import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">SCRUM PEER</div>
      <ul className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar-item ${isActive ? "navbar-item-active" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `navbar-item ${isActive ? "navbar-item-active" : ""}`
          }
        >
          SignUp
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `navbar-item ${isActive ? "navbar-item-active" : ""}`
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `navbar-item ${isActive ? "navbar-item-active" : ""}`
          }
        >
          About
        </NavLink>
      </ul>
    </nav>
  );
}
