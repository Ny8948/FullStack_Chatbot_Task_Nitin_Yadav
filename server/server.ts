import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db";
import enquiryRoutes from "./routes/enquiryRoutes";
import errorMiddleware from "./middleware/errorMiddleware";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

connectDB();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use("/api", apiLimiter);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Support & Lead Assistant API is running 🚀",
  });
});

app.use("/api/enquiries", enquiryRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});