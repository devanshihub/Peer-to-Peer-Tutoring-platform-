import React, { useState } from "react";
import BookingForm from "./bookingForm";
import { Link } from "react-router-dom";

function SearchTutor() {
  const [search, setSearch] = useState("");
  const [selectedTutor, setSelectedTutor] = useState(null);

  const tutors = [
    { id: 1, name: "Tina", subject: "Math", timings: "03:00" },
    { id: 2, name: "Bhavya", subject: "math" },
    { id: 3, name: "Priya", subject: "History" },
    { id: 5, name: "Bhavya", subject: "Science" },
    { id: 8, name: "Bhavya", subject: "Science" },
    { id: 9, name: "Priya", subject: "science" },
  ];

  // Filter tutors based on search input
  const filteredTutors = tutors.filter((tutor) => {
    const searchLower = search.toLowerCase();
    return (
      tutor.name.toLowerCase().includes(searchLower) ||
      tutor.subject.toLowerCase().includes(searchLower)
    );
  });

  // TODO - ADD API
  const setToStorage = (tutor = {}) => {
    setSelectedTutor(tutor);
    localStorage.setItem("currentTutor", JSON.stringify(tutor));
  };

  return (
    <div className="container">
      <div>
        <h2>Search Tutors</h2>
        <input
          type="text"
          placeholder="Search by name or subject"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutor) => (
            <Tutor tutor={tutor} key={tutor.id} onBook={() => setToStorage(tutor)} />
          ))
        ) : (
          <p>No tutors found matching your search.</p>
        )}
      </div>

      {/* {selectedTutor && (
        <BookingForm tutor={selectedTutor.name}
          subject={selectedTutor.subject}
          onClose={() => setSelectedTutor(null)}
        />
      )} */}
    </div>
  );
}

function Tutor({ tutor, onBook }) {
  return (
    <div className="tutor-card">
      <p>
        <strong>Tutor Name : </strong>
        {tutor.name}
      </p>
      <p>
        <strong>Tutor Subject :</strong> {tutor.subject}
      </p>
      <Link to="/book-session">
        <button className="button" onClick={onBook}>
          Book Session
        </button>
      </Link>
    </div>
  );
}

export default SearchTutor;