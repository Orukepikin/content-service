import { db } from '../utils/db.connection.utils';
import { nigeriaWardsData } from '../data/nigeria-states-lgas-wards';

type SeedSummary = {
    created: number;
    skipped: number;
};

type EnsureSeedResult = SeedSummary & {
    alreadySeeded: boolean;
};

// Calculate total system communities (LGAs + Wards)
const TOTAL_SYSTEM_LGA_COMMUNITIES = nigeriaWardsData.reduce((total, state) => total + state.lgas.length, 0);
const TOTAL_SYSTEM_WARD_COMMUNITIES = nigeriaWardsData.reduce(
    (total, state) => total + state.lgas.reduce((lgaTotal, lga) => lgaTotal + lga.wards.length, 0),
    0
);
const TOTAL_SYSTEM_COMMUNITIES = TOTAL_SYSTEM_LGA_COMMUNITIES + TOTAL_SYSTEM_WARD_COMMUNITIES;

const DB_RETRY_ATTEMPTS = 5;
const DB_RETRY_DELAY_MS = 2_000;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function reconnectPrisma() {
    try {
        await db.$disconnect();
    } catch (error) {
        console.warn('⚠️ Unable to disconnect Prisma cleanly before reconnecting:', error);
    }

    await db.$connect();
}

async function withDbRetry<T>(operation: () => Promise<T>, description: string): Promise<T> {
    let lastError: unknown;

    for (let attempt = 1; attempt <= DB_RETRY_ATTEMPTS; attempt++) {
        try {
            return await operation();
        } catch (error: any) {
            lastError = error;

            const isConnectionIssue = typeof error === 'object' && error?.code === 'P1001';
            const shouldRetry = isConnectionIssue && attempt < DB_RETRY_ATTEMPTS;

            console.error(`❌ ${description} failed (attempt ${attempt}/${DB_RETRY_ATTEMPTS})`, error);

            if (!shouldRetry) {
                break;
            }

            console.log('🔄 Retrying after database reconnect...');
            await reconnectPrisma();
            await delay(DB_RETRY_DELAY_MS * attempt);
        }
    }

    throw lastError;
}

export async function seedCommunities(): Promise<SeedSummary> {
    console.log('🌱 Starting community seeding...');
    console.log(`📊 Total communities to create: ${TOTAL_SYSTEM_COMMUNITIES.toLocaleString()}`);
    console.log(`   - LGA communities: ${TOTAL_SYSTEM_LGA_COMMUNITIES.toLocaleString()}`);
    console.log(`   - Ward communities: ${TOTAL_SYSTEM_WARD_COMMUNITIES.toLocaleString()}`);

    await db.$connect();

    // Fetch existing communities
    const existingCommunities = await withDbRetry(
        () => db.community.findMany({
            where: {
                communityType: { in: ['SYSTEM_LGA', 'SYSTEM_WARD'] }
            },
            select: { name: true }
        }),
        'Fetching existing system communities'
    );
    const existingNames = new Set(existingCommunities.map((c) => c.name.toLowerCase()));

    let createdCount = 0;
    let skippedCount = 0;

    for (const stateData of nigeriaWardsData) {
        console.log(`\n📍 Processing ${stateData.state}...`);

        let stateCreatedCount = 0;
        let stateSkippedCount = 0;

        for (const lgaData of stateData.lgas) {
            // Create LGA-level community
            const lgaCommunityName = `${lgaData.name}, ${stateData.state}`;
            const lgaNormalizedName = lgaCommunityName.toLowerCase();

            if (!existingNames.has(lgaNormalizedName)) {
                await withDbRetry(
                    () => db.community.create({
                        data: {
                            name: lgaCommunityName,
                            description: `Official community for ${lgaData.name} Local Government Area in ${stateData.state} State, Nigeria. Connect with people, share updates, and stay informed about events in your area.`,
                            location: `${lgaData.name}, ${stateData.state}, Nigeria`,
                            state: stateData.state,
                            lga: lgaData.name,
                            ward: null,
                            communityType: 'SYSTEM_LGA',
                            status: 'ACTIVE',
                            createdBy: 'SYSTEM',
                        }
                    }),
                    `Creating LGA community for ${lgaCommunityName}`
                );

                existingNames.add(lgaNormalizedName);
                createdCount++;
                stateCreatedCount++;
            } else {
                skippedCount++;
                stateSkippedCount++;
            }

            // Create ward-level communities for this LGA
            for (const wardName of lgaData.wards) {
                const wardCommunityName = `${wardName}, ${lgaData.name}, ${stateData.state}`;
                const wardNormalizedName = wardCommunityName.toLowerCase();

                if (!existingNames.has(wardNormalizedName)) {
                    await withDbRetry(
                        () => db.community.create({
                            data: {
                                name: wardCommunityName,
                                description: `Official community for ${wardName} Ward in ${lgaData.name} LGA, ${stateData.state} State, Nigeria. Connect with neighbors, share local updates, and stay informed about ward activities.`,
                                location: `${wardName}, ${lgaData.name}, ${stateData.state}, Nigeria`,
                                state: stateData.state,
                                lga: lgaData.name,
                                ward: wardName,
                                communityType: 'SYSTEM_WARD',
                                status: 'ACTIVE',
                                createdBy: 'SYSTEM',
                            }
                        }),
                        `Creating ward community for ${wardCommunityName}`
                    );

                    existingNames.add(wardNormalizedName);
                    createdCount++;
                    stateCreatedCount++;
                } else {
                    skippedCount++;
                    stateSkippedCount++;
                }
            }
        }

        console.log(`✅ Completed ${stateData.state}:`);
        console.log(`   ${stateData.lgas.length} LGAs processed`);
        console.log(`   ${stateData.lgas.reduce((sum, lga) => sum + lga.wards.length, 0)} wards processed`);
        console.log(`   ${stateCreatedCount} created, ${stateSkippedCount} skipped`);
    }

    console.log(`\n🎉 Seeding completed!`);
    console.log(`✨ Created: ${createdCount.toLocaleString()} communities`);
    console.log(`⏭️  Skipped: ${skippedCount.toLocaleString()} communities (already exist)`);

    return { created: createdCount, skipped: skippedCount };
}

export async function ensureCommunitiesSeeded(): Promise<EnsureSeedResult> {
    const existingCount = await withDbRetry(
        () => db.community.count({
            where: {
                communityType: { in: ['SYSTEM_LGA', 'SYSTEM_WARD'] }
            }
        }),
        'Counting existing system communities'
    );

    if (existingCount >= TOTAL_SYSTEM_COMMUNITIES) {
        console.log(`🔁 All ${existingCount.toLocaleString()} system communities already present. Skipping seeding.`);
        return { created: 0, skipped: existingCount, alreadySeeded: true };
    }

    console.log(`⚠️ Only ${existingCount.toLocaleString()}/${TOTAL_SYSTEM_COMMUNITIES.toLocaleString()} system communities present. Resuming seeding to fill the gap.`);
    const summary = await seedCommunities();
    return { ...summary, alreadySeeded: false };
}
