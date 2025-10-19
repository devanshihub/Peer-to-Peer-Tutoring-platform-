import React, { useState, useEffect } from "react";

function MySessions() {
  const tutors = [
    {
      id: 1,
      name: "Tina",
      subject: "Math",
      timings: "03:00",
      date: "12/12/2025",
    },
    {
      id: 2,
      name: "Bhavya",
      subject: "Science",
      timings: "14:30",
      date: "12/12/2025",
    },
    {
      id: 3,
      name: "Priya",
      subject: "History",
      timings: "09:53",
      date: "12/12/2025",
    },
  ];

  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();

    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h2>My Upcoming Sessions</h2>
      <div>
        {tutors.map((tutor) => (
          <Tutor tutor={tutor} key={tutor.id} currentTime={currentTime} />
        ))}
      </div>
    </div>
  );
}

function Tutor({ tutor, currentTime }) {
  const isActive = currentTime === tutor.timings;

  return (
    <div className="tutor-card">
      <p>
        <strong>Tutor Name: </strong>
        {tutor.name}
      </p>
      <p>
        <strong>Subject: </strong> {tutor.subject}
      </p>
      <p>
        <strong>Timings: </strong> {tutor.timings}
      </p>
      <p>
        <strong>Date: </strong> {tutor.date}
      </p>
      <button className={`button ${isActive ? "button-active" : ""}`}>
        Upcoming
      </button>
    </div>
  );
}

export default MySessions;