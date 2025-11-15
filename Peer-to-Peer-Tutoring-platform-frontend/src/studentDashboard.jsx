import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function StudentDashboard() {
  const [activeItem, setActiveItem] = useState("Profile");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.endsWith("/bookingform")) setActiveItem("BookingForm");
    else if (pathname.endsWith("/search-tutor")) setActiveItem("SearchTutor");
    else if (pathname.endsWith("/my-sessions")) setActiveItem("MySessions");
    else setActiveItem("Profile");
  }, [pathname]);

  return (
    <div className="student-dashboard-container">
      <div className="sidebar">
        <img src="/images/student.png" className="student-img" alt="Student" />
        <Link to="">
          <button
            className={`sidebar-button ${
              activeItem === "Profile" ? "sidebar-button-active" : ""
            }`}
          >
            Profile
          </button>
        </Link>
        <Link to="search-tutor">
          <button
            className={`sidebar-button ${
              activeItem === "SearchTutor" ? "sidebar-button-active" : ""
            }`}
          >
            Search Tutor
          </button>
        </Link>
        <Link to="bookingform">
          <button
            className={`sidebar-button ${
              activeItem === "BookingForm" ? "sidebar-button-active" : ""
            }`}
          >
            Book Session
          </button>
        </Link>
        <Link to="my-sessions">
          <button
            className={`sidebar-button ${
              activeItem === "MySessions" ? "sidebar-button-active" : ""
            }`}
          >
            My Sessions
          </button>
        </Link>
      </div>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default StudentDashboard;
