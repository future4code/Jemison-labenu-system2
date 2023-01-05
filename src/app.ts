import dotenv from 'dotenv';
import express from "express"
import cors from 'cors'

dotenv.config();

const app = express()

app.use(express.json())

app.use(cors())



app.listen(process.env.DB_PORT || 3003, () => {
    console.log(`Server is running in ${process.env.DB_PORT || 3003}`)
});

export default app;
