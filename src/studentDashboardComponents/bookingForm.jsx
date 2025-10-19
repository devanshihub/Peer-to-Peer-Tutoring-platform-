import React, { useState, useEffect } from "react";

function BookingForm() {
  const [datetime, setDatetime] = useState("");
  const [tutor,setTutor] = useState({
    name:"",
    subject:"",
  })

  const handleSubmit =(e) => {
    e.preventDefault();
    alert(`Booked ${tutor.name} for ${tutor.subject} at ${datetime} `);
    onclose();
  }

  const getFromStorage = () => {
    const currentTutor = JSON.parse(localStorage.getItem("currentTutor"));
    setTutor(currentTutor);
  }

  useEffect(()=>{
    getFromStorage();
  },[]);

  return (
    <div className="container">
      <h2 className="heading">Book a New Session</h2>
      <form onSubmit={handleSubmit}>
        <label>Tutor Name:</label>
        <input
          type="text"
          value={tutor.name}
        />

        <label>Subject:</label>
        <input
          type="text"
          value={tutor.subject}
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