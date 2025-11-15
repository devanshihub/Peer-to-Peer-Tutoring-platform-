import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tutorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: String,
    time: String,
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
