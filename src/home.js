import { useState } from "react";
import Signup from "./homePagesComponents/signup";
import Herosection from "./homePagesComponents/herosection";
import About from "./homePagesComponents/about";
import Login from "./homePagesComponents/login";
import Footer from "./homePagesComponents/footer";

function Home() {
  const [activeItem, setActiveItem] = useState("Home");
  const [activeWindow, setActiveWindow] = useState(<Herosection />);

  function onClickHome() {
    setActiveItem("Home");
    setActiveWindow(<Herosection />);
  }
  function onClickLogin() {
    setActiveItem("Login");
    setActiveWindow(<Login />);
  }
  function onClickSignup() {
    setActiveItem("Signup");
    setActiveWindow(<Signup />);
  }
  function onClickAbout() {
    setActiveItem("About");
    setActiveWindow(<About />);
  }
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar-logo">SCRUM PEER</div>
        <ul className="navbar-links">
          <li
            className={`navbar-item ${
              activeItem === "Home" ? "navbar-item-active" : ""
            }`}
            onClick={() => onClickHome()}
          >
            Home
          </li>
          <li
            className={`navbar-item ${
              activeItem === "Login" ? "navbar-item-active" : ""
            }`}
            onClick={() => onClickLogin()}
          >
            Login
          </li>
          <li
            className={`navbar-item ${
              activeItem === "Signup" ? "navbar-item-active" : ""
            }`}
            onClick={() => onClickSignup()}
          >
            Signup
          </li>
          <li
            className={`navbar-item  ${
              activeItem === "About" ? "navbar-item-active" : ""
            }`}
            onClick={() => onClickAbout()}
          >
            About
          </li>
        </ul>
      </nav>
      <div>{activeWindow}</div>
      {activeItem === "Home" && <Footer />}
      {activeItem === "About" && <Footer />}
    </div>
  );
}
export default Home;
