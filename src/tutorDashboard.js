import Profile from "./tutorDashboardComponets/profile";
import UpcommingSessions from "./tutorDashboardComponets/upcommingSessions";
import Requests from "./tutorDashboardComponets/requests";
import { useState } from "react";

function TutorDashboard() {
  const [activeItem, setActiveItem] = useState("Profile");
  const [activeWindow, setWindow] = useState(<Profile />);

  function handleProfile() {
    setActiveItem("Profile");
    setWindow(<Profile />);
  }
  function handleRequests() {
    setActiveItem("Requests");
    setWindow(<Requests />);
  }
  function handleSession() {
    setActiveItem("UpcommingSessions");
    setWindow(<UpcommingSessions />);
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
          onClick={handleRequests}
          className={`sidebar-button ${
            activeItem === "SearchTutor" ? "sidebar-button-active" : ""
          }`}
        >
          Requests
        </button>
        <button
          onClick={handleSession}
          className={`sidebar-button ${
            activeItem === "UpcommingSessions" ? "sidebar-button-active" : ""
          }`}
        >
          Upcomming Sessions
        </button>
      </div>
      <div>{activeWindow}</div>
    </div>
  );
}
export default TutorDashboard;
