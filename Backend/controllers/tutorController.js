import Tutor from "../models/Tutor.js";

export const createTutor = async (req, res) => {
  try {
    const tutor = await Tutor.create({ userId: req.user.id, ...req.body });
    res.json(tutor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find().populate("userId");
    res.json(tutors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
