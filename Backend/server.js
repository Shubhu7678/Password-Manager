import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import userRoutes from './routes/userRoutes.js';


const app = express();

dotenv.config({ quiet: true });

connectDb();

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send("Hello World");
})

app.use('/api/user',userRoutes);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})