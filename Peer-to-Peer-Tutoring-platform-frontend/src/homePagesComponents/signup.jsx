import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("tutor");
  const [userInfo, setUserInfo] = useState({
    type: "tutor",
    name: "",
    age: "",
    tutorField: "",
    tutorTime: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleType = (type) => {
    setActiveForm(type);
    setUserInfo((prev) => ({
      ...prev,
      type,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(userInfo));

    if (userInfo.type === "student") {
      navigate("/studentdashboard");
    } else {
      navigate("/tutordashboard");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-buttons">
        <button
          className={activeForm === "tutor" ? "signup-buttons-active" : ""}
          onClick={() => handleType("tutor")}
        >
          Tutor
        </button>
        <button
          className={activeForm === "student" ? "signup-buttons-active" : ""}
          onClick={() => handleType("student")}
        >
          Student
        </button>
      </div>

      <form onSubmit={handleSignUp}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          onChange={handleChange}
          required
        />

        {activeForm === "tutor" && (
          <>
            <label>Field of Working</label>
            <input
              type="text"
              name="tutorField"
              placeholder="e.g. Mathematics, Physics"
              onChange={handleChange}
              required
            />

            <label>Available Hours</label>
            <input
              type="text"
              name="tutorTime"
              placeholder="e.g. 09:00 - 17:00"
              onChange={handleChange}
              required
            />
          </>
        )}

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          Sign Up as {activeForm === "tutor" ? "Tutor" : "Student"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
