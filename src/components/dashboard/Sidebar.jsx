import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar({ onBook, onShowSessions, onShowDashboard, onSearchTutor }) {
  return (
    <div className={styles.sidebar}>
      <button onClick={onShowDashboard}>Dashboard</button>
      <button onClick={onSearchTutor}>Search Tutor</button>
      <button onClick={onBook}>Book a Session</button>
      <button onClick={onShowSessions}>My Sessions</button>
    </div>
  );
}

export default Sidebar;