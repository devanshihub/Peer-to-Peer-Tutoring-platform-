import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [requests, setRequests] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [totalSeats, setTotalSeats] = useState(0);

  const loadData = () => {
    const savedRequests = JSON.parse(localStorage.getItem("requests") || "[]");
    const savedLectures = JSON.parse(localStorage.getItem("lectures") || "[]");
    const savedSeats = JSON.parse(localStorage.getItem("seatAvailability") || "[]");

    setRequests(savedRequests);
    setLectures(savedLectures);

    let seats = 0;
    for (let i = 0; i < savedSeats.length; i++) {
      seats += Number(savedSeats[i].seats || 0);
    }
    setTotalSeats(seats);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <h2>Welcome to Tutor Dashboard</h2>

      <button className={styles.refreshButton} onClick={loadData}>
        Refresh Data
      </button>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Total Requests</h3>
          <p>{requests.length}</p>
        </div>
        <div className={styles.card}>
          <h3>Upcoming Lectures</h3>
          <p>{lectures.length}</p>
        </div>
        <div className={styles.card}>
          <h3>Total Seats Available</h3>
          <p>{totalSeats}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
