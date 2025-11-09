import React, { useState } from "react";

const studentsData = [
  {
    username: "Tina@123",
    name: "Tina Sharma",
    timings: "03:00 - 04:00",
    date: "1/11/2025",
    status: "expired",
  },
  {
    username: "DEev@123",
    name: "Dev Sharma",
    timings: "03:00 - 04:00",
    date: "2/10/2025",
    status: "expired",
  },
  {
    username: "Riya@Sharma",
    name: "Riya Sharma",
    timings: "04:00 - 05:00",
    date: "12/12/2025",
    status: "",
  },
  {
    username: "Dinesh@Tiwari",
    name: "Dinesh Tiwari",
    timings: "04:00 - 05:00",
    date: "23/12/2025",
    status: "",
  },
  {
    username: "Rani@123",
    name: "Rani Agrawal",
    timings: "01:00 - 02:00",
    date: "1/11/2025",
    status: "deleted",
  },
  {
    username: "Raj_12",
    name: "Raj Agrawal",
    timings: "01:00 - 02:00",
    date: "10/10/2025",
    status: "deleted",
  },
];

function Requests() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredStudents = studentsData.filter((student) => {
    if (statusFilter === "all") return true;
    if (statusFilter === "active") return student.status === "";
    return student.status === statusFilter;
  });

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const numOfStudents = sortedStudents.length;

  return (
    <div className="container">
      <h2>Requests From Students</h2>

      <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
        <div>
          <label>Status Filter: </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="active">No Action</option>
            <option value="expired">Expired</option>
            <option value="deleted">Deleted</option>
          </select>
        </div>

        <div>
          <label>Sort by Date: </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Oldest </option>
            <option value="desc">Latest</option>
          </select>
        </div>
      </div>

      {numOfStudents > 0 ? (
        <div>
          <p style={{ marginBottom: "10px" }}>
            You have total {numOfStudents} requests from students
          </p>
          <div>
            {sortedStudents.map((student, index) => (
              <Student student={student} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <p>No requests found.</p>
      )}
    </div>
  );
}

function Student({ student }) {
  return (
    <div className="tutor-card" style={{ marginBottom: "15px" }}>
      <p>
        <strong>Student Name: </strong>
        {student.name}
      </p>
      <p>
        <strong>Timings: </strong>
        {student.timings}
      </p>
      <p>
        <strong>Date: </strong> {student.date}
      </p>
      {student.status === "deleted" && <p style={{ color: "red" }}>Deleted</p>}
      {student.status === "expired" && <p style={{ color: "grey" }}>Expired</p>}
      {student.status === "" && (
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="btn-accept">Accept</button>
          <button className="btn-delete">Delete</button>
        </div>
      )}
    </div>
  );
}

export default Requests;
