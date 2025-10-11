import React from "react";
import styles from "./ConfirmationPage.module.css";

function ConfirmPage({ booking, onnewbooking }) {
  if (!booking) return <p>No booking has been made yet.</p>;

  return (
    <div className={styles.card}>
      <h2>Booking Confirmed!</h2>
      <p><strong>Tutor:</strong> {booking.tutor}</p>
      <p><strong>Subject:</strong> {booking.subject}</p>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Time:</strong> {booking.time}</p>

      <button onClick={onnewbooking}>Book Another Session</button>
    </div>
  );
}

export default ConfirmPage;
