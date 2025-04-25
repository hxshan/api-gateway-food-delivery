import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {corsOptions} from './config/corsOptions.js'
import router from './routes/gateway.routes.js';
dotenv.config();

const app = express();
app.use(cors(corsOptions)); 
// app.use(express.json());


 app.use('/api',router)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));