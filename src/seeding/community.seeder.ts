// import { db } from '../utils/db.connection.utils';
// import { nigeriaData } from '../data/nigeria-states-lgas';

// type SeedSummary = {
//     created: number;
//     skipped: number;
// };

// type EnsureSeedResult = SeedSummary & {
//     alreadySeeded: boolean;
// };

// const TOTAL_SYSTEM_COMMUNITIES = nigeriaData.reduce((total, state) => total + state.lgas.length, 0);
// const DB_RETRY_ATTEMPTS = 5;
// const DB_RETRY_DELAY_MS = 2_000;

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// async function reconnectPrisma() {
//     try {
//         await db.$disconnect();
//     } catch (error) {
//         console.warn('⚠️ Unable to disconnect Prisma cleanly before reconnecting:', error);
//     }

//     await db.$connect();
// }

// async function withDbRetry<T>(operation: () => Promise<T>, description: string): Promise<T> {
//     let lastError: unknown;

//     for (let attempt = 1; attempt <= DB_RETRY_ATTEMPTS; attempt++) {
//         try {
//             return await operation();
//         } catch (error: any) {
//             lastError = error;

//             const isConnectionIssue = typeof error === 'object' && error?.code === 'P1001';
//             const shouldRetry = isConnectionIssue && attempt < DB_RETRY_ATTEMPTS;

//             console.error(`❌ ${description} failed (attempt ${attempt}/${DB_RETRY_ATTEMPTS})`, error);

//             if (!shouldRetry) {
//                 break;
//             }

//             console.log('🔄 Retrying after database reconnect...');
//             await reconnectPrisma();
//             await delay(DB_RETRY_DELAY_MS * attempt);
//         }
//     }

//     throw lastError;
// }

// export async function seedCommunities(): Promise<SeedSummary> {
//     console.log('🌱 Starting community seeding...');

//     await db.$connect();

//     const existingCommunities = await withDbRetry(
//         () => db.community.findMany({
//             where: { communityType: 'SYSTEM_LGA' },
//             select: { name: true }
//         }),
//         'Fetching existing system communities'
//     );
//     const existingNames = new Set(existingCommunities.map((c) => c.name.toLowerCase()));

//     let createdCount = 0;
//     let skippedCount = 0;

//     for (const stateData of nigeriaData) {
//         console.log(`\n📍 Processing ${stateData.state}...`);

//         for (const lga of stateData.lgas) {
//             const communityName = `${lga}, ${stateData.state}`;
//             const normalizedName = communityName.toLowerCase();

//             if (existingNames.has(normalizedName)) {
//                 skippedCount++;
//                 continue;
//             }

//             await withDbRetry(
//                 () => db.community.create({
//                     data: {
//                         name: communityName,
//                         description: `Official community for ${lga} Local Government Area in ${stateData.state} State, Nigeria. Connect with people, share updates, and stay informed about events in your area.`,
//                         location: `${lga}, ${stateData.state}, Nigeria`,
//                         state: stateData.state,
//                         lga: lga,
//                         communityType: 'SYSTEM_LGA',
//                         status: 'ACTIVE',
//                         createdBy: 'SYSTEM',
//                     }
//                 }),
//                 `Creating community for ${communityName}`
//             );

//             existingNames.add(normalizedName);
//             createdCount++;
//         }

//         console.log(`✅ Completed ${stateData.state}: ${stateData.lgas.length} LGAs processed`);
//     }

//     console.log(`\n🎉 Seeding completed!`);
//     console.log(`✨ Created: ${createdCount} communities`);
//     console.log(`⏭️  Skipped: ${skippedCount} communities (already exist)`);

//     return { created: createdCount, skipped: skippedCount };
// }

// export async function ensureCommunitiesSeeded(): Promise<EnsureSeedResult> {
//     const existingCount = await withDbRetry(
//         () => db.community.count({
//             where: {
//                 communityType: 'SYSTEM_LGA'
//             }
//         }),
//         'Counting existing system communities'
//     );

//     if (existingCount >= TOTAL_SYSTEM_COMMUNITIES) {
//         console.log(`🔁 All ${existingCount} system communities already present. Skipping seeding.`);
//         return { created: 0, skipped: existingCount, alreadySeeded: true };
//     }

//     console.log(`⚠️ Only ${existingCount}/${TOTAL_SYSTEM_COMMUNITIES} system communities present. Resuming seeding to fill the gap.`);
//     const summary = await seedCommunities();
//     return { ...summary, alreadySeeded: false };
// }
