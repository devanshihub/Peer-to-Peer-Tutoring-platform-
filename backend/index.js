import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./database/db.js";

import userRoutes from "./routes/user.js";
import studentRoutes from "./routes/student.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Server is running"));

// Routes
app.use("/api", userRoutes);
app.use("/api", studentRoutes);

// Connect DB first, then start backend
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
