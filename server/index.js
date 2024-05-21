import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import './config/db.js';
import { Router } from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config({path: "./config/.env"})

// const PORT = 3000;

app.use('/contactmsyt', Router)

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
});
