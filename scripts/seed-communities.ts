import { db } from '../src/utils/db.connection.utils';
import { nigeriaData } from '../src/data/nigeria-states-lgas';

async function seedCommunities() {
    console.log('🌱 Starting community seeding...');

    try {
        let createdCount = 0;
        let skippedCount = 0;

        for (const stateData of nigeriaData) {
            console.log(`\n📍 Processing ${stateData.state}...`);

            for (const lga of stateData.lgas) {
                const communityName = `${lga}, ${stateData.state}`;

                // Check if community already exists
                const existing = await db.community.findFirst({
                    where: {
                        name: {
                            equals: communityName,
                            mode: 'insensitive'
                        }
                    }
                });

                if (existing) {
                    skippedCount++;
                    continue;
                }

                // Create community
                await db.community.create({
                    data: {
                        name: communityName,
                        description: `Official community for ${lga} Local Government Area in ${stateData.state} State, Nigeria. Connect with people, share updates, and stay informed about events in your area.`,
                        location: `${lga}, ${stateData.state}, Nigeria`,
                        state: stateData.state,
                        lga: lga,
                        communityType: 'SYSTEM_LGA',
                        status: 'ACTIVE',
                        createdBy: 'SYSTEM',
                    }
                });

                createdCount++;
            }

            console.log(`✅ Completed ${stateData.state}: ${stateData.lgas.length} LGAs processed`);
        }

        console.log(`\n🎉 Seeding completed!`);
        console.log(`✨ Created: ${createdCount} communities`);
        console.log(`⏭️  Skipped: ${skippedCount} communities (already exist)`);

    } catch (error) {
        console.error('❌ Error during seeding:', error);
        throw error;
    } finally {
        await db.$disconnect();
    }
}

// Run the seeding
seedCommunities()
    .then(() => {
        console.log('\n✅ Seeding script completed successfully');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n❌ Seeding script failed:', error);
        process.exit(1);
    });
