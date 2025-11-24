// import express from "express";
// import { isAuth } from "../middlewares/isAuth.js";
// import { searchTutors, viewTutor, bookSession, mySessions } from "../controllers/student.js";

// const router = express.Router();

// router.get("/tutors", isAuth, searchTutors);       // Search by subject
// router.get("/tutor/:id", isAuth, viewTutor);      // View tutor details
// router.post("/session", isAuth, bookSession);     // Book session
// router.get("/sessions", isAuth, mySessions);      // Track sessions

// export default router;


import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import {
  searchTutors,
  viewTutor,
  bookSession,
  mySessions,
} from "../controllers/student.js";

const router = express.Router();

router.get("/tutors", isAuth, searchTutors);
router.get("/tutor/:id", isAuth, viewTutor);
router.post("/session", isAuth, bookSession);
router.get("/sessions", isAuth, mySessions);

export default router;
