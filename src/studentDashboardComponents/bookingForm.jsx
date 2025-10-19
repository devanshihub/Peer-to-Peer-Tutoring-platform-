import React, { useState, useEffect } from "react";

function BookingForm({tutor, subject, onclose}) {
  const [datetime, setDatetime] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();
    alert(`Booked ${tutor} for ${subject} at ${datetime} `);
    onclose();
  }

  return (
    <div className="container">
      <h2 className="heading">Book a New Session</h2>
      <form onSubmit={handleSubmit}>
        <label>Tutor Name:</label>
        <input
          type="text"
          value={tutor}
        />

        <label>Subject:</label>
        <input
          type="text"
          value={subject}
        />

        <label>Date & Time:</label>
        <input
          type="datetime-local"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
        />

        <button type="submit" className="button">
          Book
        </button>
      </form>
    </div>
  );
}

export default BookingForm;