import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import tutorRoutes from "./routes/tutorRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tutors", tutorRoutes);
app.use("/api/request", requestRoutes);
app.use("/api/booking", bookingRoutes);


app.get("/", (req, res) => {
    res.send("Peer-to-Peer Tutoring Platform API is running");
});


app.listen(5000, () => console.log("Server running on port 5000"));
