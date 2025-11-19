import mongoose from "mongoose";

const schema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["upcoming", "completed", "cancelled"], default: "upcoming" },
  createdAt: { type: Date, default: Date.now },
});

export const Session = mongoose.model("Session", schema);
