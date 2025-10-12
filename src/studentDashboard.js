import BookingForm from "./studentDashboardComponents/bookingForm";
import Profile from "./studentDashboardComponents/profile";
import SearchTutor from "./studentDashboardComponents/searchTutor";

import MySessions from "./studentDashboardComponents/mySessions";

import { useState } from "react";

function StudentDashboard() {
  const [activeItem, setActiveItem] = useState("Profile");
  const [activeWindow, setWindow] = useState(<Profile />);

  function handleProfile() {
    setActiveItem("Profile");
    setWindow(<Profile />);
  }
  function handleTutor() {
    setActiveItem("SearchTutor");
    setWindow(<SearchTutor />);
  }
  function handleSession() {
    setActiveItem("BookingForm");
    setWindow(<BookingForm />);
  }
  function handleMySession() {
    setActiveItem("MySessions");
    setWindow(<MySessions />);
  }

  return (
    <div className="student-dashboard-container ">
      <div className="sidebar">
        <img src="/images/student.png" className="student-img"></img>
        <button
          onClick={handleProfile}
          className={`sidebar-button ${
            activeItem === "Profile" ? "sidebar-button-active" : ""
          }`}
        >
          Profile
        </button>

        <button
          onClick={handleTutor}
          className={`sidebar-button ${
            activeItem === "SearchTutor" ? "sidebar-button-active" : ""
          }`}
        >
          Search Tutor
        </button>
        <button
          onClick={handleSession}
          className={`sidebar-button ${
            activeItem === "BookingForm" ? "sidebar-button-active" : ""
          }`}
        >
          Book a Session
        </button>
        <button
          onClick={handleMySession}
          className={`sidebar-button ${
            activeItem === "MySessions" ? "sidebar-button-active" : ""
          }`}
        >
          My Sessions
        </button>
      </div>
      <div>{activeWindow}</div>
    </div>
  );
}
export default StudentDashboard;
