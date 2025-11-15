import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    subjects: [String],
    experience: Number,
    bio: String,
  },
  { timestamps: true }
);

export default mongoose.model("Tutor", tutorSchema);
