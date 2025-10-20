import BookingForm from "./studentDashboardComponents/bookingForm";
import SearchTutor from "./studentDashboardComponents/searchTutor";

import MySessions from "./studentDashboardComponents/mySessions";

import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigation, useParams } from "react-router-dom";
import Profile from "./common/Profile/Profile";

function StudentDashboard() {
  const [activeItem, setActiveItem] = useState("Profile");
  const location = useLocation();
  const { pathname } = location;

  const getActiveItem = () => {
    if (pathname === "/book-session") {
      setActiveItem("BookingForm");
    }
    else if (pathname === "/search-tutor") {
      setActiveItem("SearchTutor");
    }
    else if (pathname === "/my-sessions") {
      setActiveItem("MySessions");
    }
    else {
      setActiveItem("Profile");
    }
  }

  useEffect(() => {
    getActiveItem();
  }, [pathname]);

  return (
    <div className="student-dashboard-container ">
      <div className="sidebar">
        <img src="/images/student.png" className="student-img"></img>
        <Link to="/">
          <button
            // onClick={handleProfile}
            className={`sidebar-button ${activeItem === "Profile" ? "sidebar-button-active" : ""
              }`}
          >
            Profile
          </button>
        </Link>

        <Link to="/search-tutor">
          <button
            className={`sidebar-button ${activeItem === "SearchTutor" ? "sidebar-button-active" : ""
              }`}
          >
            Search Tutor
          </button>
        </Link>

        <Link to="/book-session">
          <button
            // onClick={handleSession}
            className={`sidebar-button ${activeItem === "BookingForm" ? "sidebar-button-active" : ""
              }`}
          >
            Book Session
          </button>
        </Link>

        <Link to="my-sessions">
          <button
            // onClick={handleMySession}
            className={`sidebar-button ${activeItem === "MySessions" ? "sidebar-button-active" : ""
              }`}
          >
            My Sessions
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
export default StudentDashboard;