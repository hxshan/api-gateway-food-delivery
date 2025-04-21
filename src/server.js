import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { corsOptions } from './config/corsOptions';
import routes from './routes/gateway.routes'
dotenv.config();

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api',routes)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));