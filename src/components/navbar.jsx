import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">SCRUM PEER</div>

      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-item active" : "navbar-item"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "navbar-item active" : "navbar-item"
            }
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "navbar-item active" : "navbar-item"
            }
          >
            Signup
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar-item active" : "navbar-item"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
