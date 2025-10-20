import React, { useState } from "react";

function Requests() {
  const students = [
    {
      id: 1,
      name: "Tina",
      timings: "03:00",
      date: "12/12/2025",
    },
    {
      id: 2,
      name: "Bhavya",

      timings: "14:30",
      date: "12/12/2025",
    },
    {
      id: 3,
      name: "Priya",

      timings: "09:53",
      date: "12/12/2025",
    },
  ];

  return (
    <div className="container">
      <h2>Requests From Students</h2>
      <div>
        {students.map((student) => (
          <Student student={student} key={student.id} />
        ))}
      </div>
    </div>
  );
}

function Student({ student }) {
  return (
    <div className="tutor-card">
      <p>
        <strong>Student Name: </strong>
        {student.name}
      </p>
      <p>
        <strong>Timmings: </strong>
        {student.timings}
      </p>
      <p>
        <strong>Date: </strong> {student.date}
      </p>
      <button className="button">Accept</button>
    </div>
  );
}

export default Requests;