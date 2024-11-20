import express from 'express';
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import messageRoute from './routes/message.route.js';

dotenv.config();

const port = process.env.PORT || 5000

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/message',messageRoute)

app.listen(port,() => {
    console.log(`server listening on port : ${port}`);
    connectDB();
})  