import { useEffect, useState } from "react";
import styles from "./ViewRequests.module.css";

function ViewRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem("requests") || "[]");
    setRequests(savedRequests);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Student Requests</h1>

      {requests.length === 0 ? (
        <p className={styles.empty}>No requests yet.</p>
      ) : (
        <ul className={styles.list}>
          {requests.map((req, index) => (
            <li key={index} className={styles.item}>
              <strong>{req.student}</strong> requested for <strong>{req.subject}</strong> on {req.date} at {req.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewRequests;
