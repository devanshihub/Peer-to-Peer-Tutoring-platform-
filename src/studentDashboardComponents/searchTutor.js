import React, { useState } from "react";

function SearchTutor() {
  const [search, setSearch] = useState("");

  const tutors = [
    { id: 1, name: "Tina", subject: "Math", timings: "03:00" },
    { id: 2, name: "Bhavya", subject: "Science" },
    { id: 3, name: "Priya", subject: "History" },
    { id: 4, name: "Tina", subject: "Math", timings: "03:00" },
    { id: 5, name: "Bhavya", subject: "Science" },
    { id: 6, name: "Priya", subject: "History" },
    { id: 7, name: "Tina", subject: "Math", timings: "03:00" },
    { id: 8, name: "Bhavya", subject: "Science" },
    { id: 9, name: "Priya", subject: "History" },
  ];

  return (
    <div className="container">
      <h2>Search Tutors</h2>
      <input
        type="text"
        placeholder="Search by name or subject"
        value={search}
      />

      <div>
        {tutors.map((tutor) => (
          <Tutor tutor={tutor} key={tutor.id} />
        ))}
      </div>
    </div>
  );
}

function Tutor({ tutor }) {
  return (
    <div class="tutor-card">
      <p>
        <strong>Tutor Name : </strong>
        {tutor.name}
      </p>
      <p>
        <strong>Tutor Subject :</strong> {tutor.subject}
      </p>
      <button className="button">Book Session</button>
    </div>
  );
}

export default SearchTutor;
