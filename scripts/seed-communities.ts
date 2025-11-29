import { db } from '../src/utils/db.connection.utils';
import { seedCommunities } from '../src/seeding/community.seeder';

seedCommunities()
    .then(() => {
        console.log('\n✅ Seeding script completed successfully');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n❌ Seeding script failed:', error);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    });
