import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [activeForm, setActiveForm] = useState("tutor");
  const navigate = useNavigate();

  const handleTutorLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("tutorLoggedIn", "true");
    alert("Tutor login successful! (You can redirect them to tutor dashboard)");
  };

  const handleStudentLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("studentLoggedIn", "true");
    navigate("/student-dashboard");
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

      {activeForm === "tutor" && (
        <form onSubmit={handleTutorLogin}>
          <label htmlFor="tutorUsername">Username</label>
          <input
            type="text"
            id="tutorUsername"
            placeholder="Enter your username"
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
            Login as Tutor
          </button>
        </form>
      )}

      {activeForm === "student" && (
        <form onSubmit={handleStudentLogin}>
          <label htmlFor="studentUsername">Username</label>
          <input
            type="text"
            id="studentUsername"
            placeholder="Enter your username"
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
            Login as Student
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
