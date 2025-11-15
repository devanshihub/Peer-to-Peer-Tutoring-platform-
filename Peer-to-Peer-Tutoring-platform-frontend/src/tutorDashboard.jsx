import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Profile from "./common/Profile/Profile";
import UpcommingSessions from "./tutorDashboardComponents/upcommingSessions";
import Requests from "./tutorDashboardComponents/requests";

function TutorDashboard() {
  const [activeItem, setActiveItem] = useState("Profile");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.endsWith("/requests")) setActiveItem("Requests");
    else if (pathname.endsWith("/upcoming-sessions"))
      setActiveItem("UpcommingSessions");
    else setActiveItem("Profile");
  }, [pathname]);

  return (
    <div className="student-dashboard-container">
      <div className="sidebar">
        <img src="/images/student.png" className="student-img" alt="Tutor" />
        <Link to="">
          <button
            className={`sidebar-button ${
              activeItem === "Profile" ? "sidebar-button-active" : ""
            }`}
          >
            Profile
          </button>
        </Link>
        <Link to="requests">
          <button
            className={`sidebar-button ${
              activeItem === "Requests" ? "sidebar-button-active" : ""
            }`}
          >
            Requests
          </button>
        </Link>
        <Link to="upcoming-sessions">
          <button
            className={`sidebar-button ${
              activeItem === "UpcommingSessions" ? "sidebar-button-active" : ""
            }`}
          >
            Upcomming Sessions
          </button>
        </Link>
      </div>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default TutorDashboard;
