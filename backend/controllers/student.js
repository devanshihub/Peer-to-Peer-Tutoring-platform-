import TryCatch from "../middlewares/TryCatch.js";
import { User } from "../models/User.js";
import { Session } from "../models/Session.js";

// Search tutors by subject
export const searchTutors = TryCatch(async (req, res) => {
  const { subject } = req.query;
  const tutors = await User.find({ role: "tutor", subject: { $regex: subject, $options: "i" } }).select("-password");
  res.json({ tutors });
});

// View tutor details
export const viewTutor = TryCatch(async (req, res) => {
  const tutor = await User.findById(req.params.id).select("-password");
  if (!tutor || tutor.role !== "tutor") return res.status(404).json({ message: "Tutor not found" });
  res.json({ tutor });
});

// Book a session
export const bookSession = TryCatch(async (req, res) => {
  const { tutorId, subject, date } = req.body;
  const session = await Session.create({
    student: req.user._id,
    tutor: tutorId,
    subject,
    date,
  });
  res.status(201).json({ message: "Session booked", session });
});

// Track sessions
export const mySessions = TryCatch(async (req, res) => {
  const sessions = await Session.find({ student: req.user._id })
    .populate("tutor", "name email subject")
    .sort({ date: -1 });
  res.json({ sessions });
});
