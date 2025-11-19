import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import TryCatch from "../middlewares/TryCatch.js";

// Register
export const register = TryCatch(async (req, res) => {
  const { name, email, password, role, subject } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(400).json({ message: "User already exists" });

  const hashPassword = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashPassword, role, subject });

  res.status(201).json({ message: "User registered", user });
});

// Login
export const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid email" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "15d" });
  res.json({ message: `Welcome ${user.name}`, token, user });
});

// Profile
export const myProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.json({ user });
});
