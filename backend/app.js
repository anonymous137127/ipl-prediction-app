import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

dotenv.config();

// connect database
connectDB();

const app = express();

// ================= MIDDLEWARE =================

// allow frontend (important for Render + Netlify)
app.use(cors({
  origin: "*", // later we can restrict
  credentials: true
}));

// parse JSON
app.use(express.json());

// ================= ROUTES =================

// test route (very important for checking server)
app.get("/", (req, res) => {
  res.send("🚀 IPL Backend API is running...");
});

// auth routes
app.use("/api/auth", authRoutes);

// ================= ERROR HANDLING =================

app.use((err, req, res, next) => {
  console.error("ERROR:", err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

export default app;