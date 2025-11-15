import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createTutor, getTutors } from "../controllers/tutorController.js";

const router = express.Router();

router.post("/", protect, createTutor);
router.get("/", getTutors);

export default router;
