import { useState } from "react";

function Login() {
  const [activeForm, setActiveForm] = useState("tutor");
  return (
    <div className="login-container">
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
        <form>
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
}

export default Login;