import React from "react";
import styles from "./MySession.module.css";

function MySession({ sessions }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.mysession}>My Sessions</h2>
      {sessions.length === 0 ? (
        <p>No sessions booked yet.</p>
      ) : (
        <ul>
          {sessions.map((s, index) => (
            <li key={index} className={styles.sessionItem}>
              <strong>{s.tutor}</strong> - {s.subject} <br />
              Date: {s.date}, Time: {s.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MySession;