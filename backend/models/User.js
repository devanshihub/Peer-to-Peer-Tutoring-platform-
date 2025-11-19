import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "tutor"], default: "student" },
    subject: { type: String }, // For tutors only
  },
  { timestamps: true }
);

export const User = mongoose.model("User", schema);
