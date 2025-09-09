import React, { useState, useEffect } from "react";
import styles from "./BookSession.module.css";

function BookSession({ prefill, onBook }) {
  const [tutor, setTutor] = useState("");
  const [subject, setSubject] = useState("");
  const [datetime, setDatetime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (prefill) {
      setTutor(prefill.tutor);
      setSubject(prefill.subject);
    }
  }, [prefill]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tutor || !subject || !datetime) {
      setMessage("Please fill all details");
      return;
    }

    const [date, time] = datetime.split("T");
    const booking = { tutor, subject, date, time };

    const sessions = JSON.parse(localStorage.getItem("sessions")) || [];
    sessions.push(booking);
    localStorage.setItem("sessions", JSON.stringify(sessions));

    onBook(booking);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.booksession}>Book a New Session</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Tutor Name:</label>
        <input type="text" value={tutor}
          onChange={(e) => setTutor(e.target.value)}
        />

        <label>Subject:</label>
        <input type="text" value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label>Date & Time:</label>
        <input
          type="datetime-local" value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
        />

        <button type="submit">Book</button>
      </form>
      {message && <p className={styles.error}>{message}</p>}
    </div>
  );
}

export default BookSession;
