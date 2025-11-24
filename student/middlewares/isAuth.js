// import jwt from "jsonwebtoken";
// import { User } from "../models/User.js";

// export const isAuth = async (req, res, next) => {
//   try {
//     const token = req.headers.token;
//     if (!token) return res.status(403).json({ message: "Please login" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded._id);
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Unauthorized" });
//   }
// };


import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) return res.status(403).json({ message: "Please login" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id).select("-password");
    if (!req.user) return res.status(401).json({ message: "Invalid token" });

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

