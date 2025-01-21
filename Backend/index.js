import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
import credentialRoute from './routes/credential.js';
import connectDB from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {

    res.send("Hello World");
});

app.use('/api/v1/credential',credentialRoute);

app.listen(PORT, () => { 

    console.log(`Server is running on port ${PORT}`);
})

connectDB();