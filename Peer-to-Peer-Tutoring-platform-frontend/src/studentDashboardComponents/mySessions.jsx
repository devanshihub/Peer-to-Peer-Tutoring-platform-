import React, { useState, useEffect } from "react";

function MySessions() {
  const [sessions, setSessions] = useState([]);

  const getSessionStatus = (sessionDateTime, durationMinutes = 60) => {
    const now = new Date();
    const sessionStart = new Date(sessionDateTime);
    const sessionEnd = new Date(
      sessionStart.getTime() + durationMinutes * 60000
    );
    if (now < sessionStart) {
      return "Upcoming";
    } else if (now >= sessionStart && now <= sessionEnd) {
      return "Active";
    } else {
      return "Inactive";
    }
  };

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookedSessions")) || [];
    setSessions(storedBookings);
  }, []);

  return (
    <div className="container">
      <h2>My Upcoming Sessions</h2>

      {sessions.length === 0 ? (
        <p>No sessions booked yet.</p>
      ) : (
        sessions.map((session) => {
          const date = new Date(session.datetime);
          const formattedDate = date.toLocaleDateString();
          const formattedTime = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div key={session.id} className="tutor-card">
              <p>
                <strong>Tutor Name:</strong> {session.name}
              </p>
              <p>
                <strong>Subject:</strong> {session.subject}
              </p>
              <p>
                <strong>Date:</strong> {formattedDate}
              </p>
              <p>
                <strong>Time:</strong> {formattedTime}
              </p>
              <button className="button">
                {getSessionStatus(session.datetime)}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default MySessions;
