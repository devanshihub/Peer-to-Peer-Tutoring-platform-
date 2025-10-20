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
      [name]: value
    }));
  };

  const handleType = (type) => {
    setActiveForm(type);
    setUserInfo((prev)=>({
      ...prev,
      type
    }));
  }

  const handleSignUp = () => {
    const user = JSON.stringify(userInfo);
    localStorage.setItem("user", user);
    navigate("/");
  }

  return (
    <div className="signup-container">
      <div className="signup-buttons">
        <button
          className={activeForm === "tutor" ? "signup-buttons-active" : ""}
          onClick={()=>handleType("tutor")}
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
      {activeForm === "tutor" && (
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Enter your age"
            onChange={handleChange}
            required
          />

          <label htmlFor="tutorField">Field of Working</label>
          <input
            type="text"
            name="tutorField"
            id="tutorField"
            placeholder="e.g. Mathematics, Physics"
            onChange={handleChange}
            required
          />

          <label htmlFor="tutorTime">Available Hours</label>
          <input
            type="text"
            name="tutorTime"
            id="tutorTime"
            placeholder="e.g. 09:00 - 17:00"
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn" onClick={handleSignUp}>
            Sign Up as Tutor
          </button>
        </form>
      )}
      {activeForm === "student" && (
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Enter your age"
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn" onClick={handleSignUp}>
            Sign Up as Student
          </button>
        </form>
      )}
    </div>
  );
}

export default Signup;