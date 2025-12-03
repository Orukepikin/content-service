import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contentRoutes from './routes/content.routes';
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from './docs/swagger.config';
// import { ensureCommunitiesSeeded } from './seeding/community.seeder';

dotenv.config();
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(express.json());
app.use('/api/v1', contentRoutes);

async function bootstrap() {
  try {
    // await ensureCommunitiesSeeded();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Content service running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start application:', error);
    process.exit(1);
  }
}

bootstrap();
