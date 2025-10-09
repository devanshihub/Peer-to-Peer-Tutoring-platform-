import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [activeForm, setActiveForm] = useState("tutor");
  const navigate = useNavigate();

  const handleTutorSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("tutorLoggedIn", "true");
    alert(
      "Tutor signup successful! (You can redirect them to tutor dashboard)"
    );
  };

  const handleStudentSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("studentLoggedIn", "true");
    navigate("/student-dashboard"); // Redirect student immediately
  };

  return (
    <div className="container">
      <div className="toggle-buttons">
        <button
          className={activeForm === "tutor" ? "active" : ""}
          onClick={() => setActiveForm("tutor")}
        >
          Tutor
        </button>
        <button
          className={activeForm === "student" ? "active" : ""}
          onClick={() => setActiveForm("student")}
        >
          Student
        </button>
      </div>

      {/* Tutor Signup Form */}
      {activeForm === "tutor" && (
        <form onSubmit={handleTutorSignup}>
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

      {/* Student Signup Form */}
      {activeForm === "student" && (
        <form onSubmit={handleStudentSignup}>
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
};

export default Signup;
