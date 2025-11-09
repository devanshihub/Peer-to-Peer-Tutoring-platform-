import React, { useState, useEffect } from "react";

const studentsData = [
  {
    username: "Tina@123",
    name: "Tina Sharma",
    timings: "03:00 - 04:00",
    date: "1/11/2025",
    status: "attended",
  },
  {
    username: "DEev@123",
    name: "Dev Sharma",
    timings: "03:00 - 04:00",
    date: "2/10/2025",
    status: "attended",
  },
  {
    username: "Riya@Sharma",
    name: "Riya Sharma",
    timings: "11:00 - 13:00",
    date: "9/11/2025",
    status: "upcoming",
  },
  {
    username: "Dinesh@Tiwari",
    name: "Dinesh Tiwari",
    timings: "04:00 - 05:00",
    date: "23/12/2025",
    status: "upcoming",
  },
  {
    username: "Rani@123",
    name: "Rani Agrawal",
    timings: "01:00 - 02:00",
    date: "1/11/2025",
    status: "expired",
  },
  {
    username: "Raj_12",
    name: "Raj Agrawal",
    timings: "01:00 - 02:00",
    date: "10/10/2025",
    status: "expired",
  },
];

function UpcommingSessions() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  const sortedStudents = [...studentsData].sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const noOfStudents = sortedStudents.length;

  return (
    <div className="container">
      <h2>My Upcoming Sessions</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Sort by Date: </label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Oldest First</option>
          <option value="desc">Latest First</option>
        </select>
      </div>

      {noOfStudents > 0 ? (
        <div>
          <p style={{ marginBottom: "10px" }}>
            You have {noOfStudents} upcoming sessions
          </p>
          <div>
            {sortedStudents.map((student, index) => (
              <Student
                key={index}
                student={student}
                currentTime={currentTime}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>You have no upcoming sessions.</p>
      )}
    </div>
  );
}

function Student({ student, currentTime }) {
  const isSessionActive = () => {
    const [start, end] = student.timings.split(" - ");
    const [day, month, year] = student.date.split("/").map(Number);

    const [startHour, startMin] = start.split(":").map(Number);
    const [endHour, endMin] = end.split(":").map(Number);

    const startTime = new Date(year, month - 1, day, startHour, startMin);
    const endTime = new Date(year, month - 1, day, endHour, endMin);

    return currentTime >= startTime && currentTime <= endTime;
  };

  const active = isSessionActive();

  return (
    <div className="tutor-card" style={{ marginBottom: "15px" }}>
      <p>
        <strong>Student Name:</strong> {student.name}
      </p>
      <p>
        <strong>Timings:</strong> {student.timings}
      </p>
      <p>
        <strong>Date:</strong> {student.date}
      </p>
      {student.status == "upcoming" && (
        <button className={`button ${active ? "btn-active" : ""}`}>
          {active ? "Active" : "Upcoming"}
        </button>
      )}
      {student.status === "attended" && (
        <p style={{ color: "blue" }}>Attended</p>
      )}
      {student.status === "expired" && <p style={{ color: "grey" }}>Expired</p>}
    </div>
  );
}

export default UpcommingSessions;
