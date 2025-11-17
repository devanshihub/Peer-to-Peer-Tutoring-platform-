import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("tutor");
  const [userInfo, setUserInfo] = useState({
    type: "tutor",
    name: "",
    password: "",
  });


  const handleType = (type) => {
    setActiveForm(type);
    setUserInfo((prev) => ({
      ...prev,
      type: type,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found! Please sign up first.");
      return;
    }

    if (
      savedUser.name === userInfo.name &&
      savedUser.password === userInfo.password &&
      savedUser.type === userInfo.type
    ) {

      localStorage.setItem("user", JSON.stringify(savedUser));

      if (savedUser.type === "student") {
        navigate("/studentdashboard");
      } else {
        navigate("/tutordashboard");
      }
    } else {
      alert("Invalid credentials or wrong user type!");
    }
  };

  return (
    <div className="login-container">
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

      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          placeholder="Enter your username"
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />

        <button type="submit" className="submit-btn">
          Login as {activeForm === "tutor" ? "Tutor" : "Student"}
        </button>
      </form>
    </div>
  );
}

export default Login;
