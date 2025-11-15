import Booking from "../models/Booking.js";

export const bookSession = async (req, res) => {
  try {
    const booking = await Booking.create({
      studentId: req.user.id,
      ...req.body,
    });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
