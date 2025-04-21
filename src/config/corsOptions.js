import cors from 'cors';

export const corsOptions = {
  origin: [
    'http://localhost:3000', 
    'https://frontend.com', 
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

