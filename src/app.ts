import express  from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const app = express()

app.use(express.json())

app.use(cors())

app.listen(process.env.DB_PORT || 3003, () => {
    console.log(`Server is running in ${process.env.DB_PORT || 3003}`)
});