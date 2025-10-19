import { useState } from "react";

function Signup() {
  const [activeForm, setActiveForm] = useState("tutor");
  return (
    <div className="signup-container">
      <div className="signup-buttons">
        <button
          className={activeForm === "tutor" ? "signup-buttons-active" : ""}
          onClick={() => setActiveForm("tutor")}
        >
          Tutor
        </button>
        <button
          className={activeForm === "student" ? "signup-buttons-active" : ""}
          onClick={() => setActiveForm("student")}
        >
          Student
        </button>
      </div>
      {activeForm === "tutor" && (
        <form>
          <label htmlFor="tutorName">Name</label>
          <input
            type="text"
            id="tutorName"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="tutorAge">Age</label>
          <input
            type="number"
            id="tutorAge"
            placeholder="Enter your age"
            required
          />

          <label htmlFor="tutorField">Field of Working</label>
          <input
            type="text"
            id="tutorField"
            placeholder="e.g. Mathematics, Physics"
            required
          />

          <label htmlFor="tutorTime">Available Hours</label>
          <input
            type="text"
            id="tutorTime"
            placeholder="e.g. 09:00 - 17:00"
            required
          />

          <label htmlFor="tutorPassword">Password</label>
          <input
            type="password"
            id="tutorPassword"
            placeholder="Enter password"
            required
          />

          <button type="submit" className="submit-btn">
            Sign Up as Tutor
          </button>
        </form>
      )}
      {activeForm === "student" && (
        <form>
          <label htmlFor="studentName">Name</label>
          <input
            type="text"
            id="studentName"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="studentAge">Age</label>
          <input
            type="number"
            id="studentAge"
            placeholder="Enter your age"
            required
          />

          <label htmlFor="studentPassword">Password</label>
          <input
            type="password"
            id="studentPassword"
            placeholder="Enter password"
            required
          />

          <button type="submit" className="submit-btn">
            Sign Up as Student
          </button>
        </form>
      )}
    </div>
  );
}

export default Signup;