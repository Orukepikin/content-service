import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contentRoutes from './routes/content.routes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', contentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Content service running on port ${process.env.PORT}`);
});
