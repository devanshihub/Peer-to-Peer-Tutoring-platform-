import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [totalSessions, setTotalSessions] = useState(0);
  const [upcomingSessions, setUpcomingSessions] = useState(0);

  useEffect(() => {
    const sessions = JSON.parse(localStorage.getItem("sessions")) || [];
    setTotalSessions(sessions.length);

    const now = new Date();
    const upcoming = sessions.filter(
      (s) => new Date(`${s.date}T${s.time}`) >= now
    );
    setUpcomingSessions(upcoming.length);
  }, []);

  return (
    <div className={styles.card}>
      <h2 className={styles.dashboardTitle}>Dashboard</h2>
      <div className={styles.stats}>
        <div className={styles.sessionCard}>
          <p>
            <strong>Welcome To DashBoard</strong>
          </p>
          <p>
            <strong>Total Sessions:</strong> {totalSessions}
          </p>
          <p>
            <strong>Upcoming Sessions:</strong> {upcomingSessions}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
