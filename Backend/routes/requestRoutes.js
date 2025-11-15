import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { sendRequest, getTutorRequests } from "../controllers/requestController.js";

const router = express.Router();

router.post("/", protect, sendRequest);
router.get("/", protect, getTutorRequests);

export default router;
