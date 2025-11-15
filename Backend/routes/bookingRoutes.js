import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { bookSession } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", protect, bookSession);

export default router;
