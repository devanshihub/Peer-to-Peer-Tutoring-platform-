import { useState } from "react";

function Login() {
  const [activeForm, setActiveForm] = useState("tutor");
  const [userInfo, setUserInfo] = useState({
    type: "tutor",
    name: "",
    age: 0,
    password: "",
  });

  const handleType = (type) => {
    setActiveForm(type);
    setUserInfo((prev)=>({
      ...prev,
      type: type
    }));
    console.log(userInfo);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInfo((prev)=>({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = () => {
    const user = JSON.stringify(userInfo);

    localStorage.setItem("user", user);
    navigate("/");
  }

  return (
    <div className="login-container">
      <div className="signup-buttons">
        <button
          className={activeForm === "tutor" ? "signup-buttons-active" : ""}
          onClick={()=>handleType("tutor")}
        >
          Tutor
        </button>
        <button
          className={activeForm === "student" ? "signup-buttons-active" : ""}
          onClick={()=>handleType("student")}
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
            name="name"
            value={userInfo.name}
            placeholder="Enter your username"
            onChange={handleChange}
            required
          />

          <label htmlFor="tutorPassword">Password</label>
          <input
            type="password"
            id="tutorPassword"
            name="password"
            value={userInfo.password}
            placeholder="Enter password"
            required
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn" onClick={handleLogin}>
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
            name="name"
            value={userInfo.name}
            placeholder="Enter your username"
            required
            onChange={handleChange}
          />

          <label htmlFor="studentPassword">Password</label>
          <input
            type="password"
            id="studentPassword"
            name="password"
            value={userInfo.password}
            placeholder="Enter password"
            required
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn" onClick={handleLogin}>
            Login as Student
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;