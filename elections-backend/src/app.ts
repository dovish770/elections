import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/MongoDb";
import userRouter from './routes/User'
import candidatesRouter from "./routes/Candidates";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 7770;

// Middleware


app.use(express.json());
app.use(cors());

connectDb();

// Routes
app.use('/api', userRouter, candidatesRouter)

// Error handling middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

