import React, { useState, useEffect } from "react";
import styles from "./BookSession.module.css";

function BookSession({ prefill, onBook }) {
  const [tutor, setTutor] = useState("");
  const [subject, setSubject] = useState("");
  const [datetime, setDatetime] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (prefill) {
      if (prefill.tutor) {
        setTutor(prefill.tutor);
      }
      if (prefill.subject) {
        setSubject(prefill.subject);
      }
    }
  }, [prefill]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tutor === "" || subject === "" || datetime === "") {
      setErrorMsg("Please fill all fields");
      return;
    }

    const parts = datetime.split("T");
    const booking = {tutor: tutor, subject: subject, date: parts[0], time: parts[1],
    };

    let savedSessions = localStorage.getItem("sessions");
    if (savedSessions) {
      savedSessions = JSON.parse(savedSessions);
    } else {
      savedSessions = [];
    }

    savedSessions.push(booking);
    localStorage.setItem("sessions", JSON.stringify(savedSessions));

    if (onBook) {
      onBook(booking);
    }

    setTutor("");
    setSubject("");
    setDatetime("");
    setErrorMsg(""); 
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.booksession}>Book a New Session</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Tutor Name:</label>
        <input type="text" value={tutor}
          onChange={(e) => setTutor(e.target.value)}
          className={styles.input}
        />

        <label>Subject:</label>
        <input type="text" value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={styles.input}
        />

        <label>Date & Time:</label>
        <input className={styles.input} type="datetime-local" value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
        />

        <button type="submit" className={styles.button}>Book</button>
      </form>
      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
    </div>
  );
}

export default BookSession;
