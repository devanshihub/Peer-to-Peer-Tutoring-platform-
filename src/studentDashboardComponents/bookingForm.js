import React, { useState, useEffect } from "react";

function BookingForm() {
  const [tutor, setTutor] = useState("");
  const [subject, setSubject] = useState("");
  const [datetime, setDatetime] = useState("");
  
  function App(){

  }

  return (
    <div className="container">
      <h2 className="heading">Book a New Session</h2>
      <form onSubmit="" className="">
        <label>Tutor Name:</label>
        <input
          type="text"
          value={tutor}
          onChange={(e) => setTutor(e.target.value)}
        />

        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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
