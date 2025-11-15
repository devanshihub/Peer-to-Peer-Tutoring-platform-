import Request from "../models/Request.js";

export const sendRequest = async (req, res) => {
  try {
    const request = await Request.create({
      studentId: req.user.id,
      ...req.body,
    });
    res.json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTutorRequests = async (req, res) => {
  try {
    const requests = await Request.find({ tutorId: req.user.id });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
