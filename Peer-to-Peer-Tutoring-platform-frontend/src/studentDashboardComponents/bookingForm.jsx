import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ onClose }) {
  const [datetime, setDatetime] = useState("");
  const [tutor, setTutor] = useState({
    name: "",
    subject: "",
  });
  const navigate = useNavigate();

  const getFromStorage = () => {
    const currentTutor = JSON.parse(localStorage.getItem("currentTutor"));
    if (currentTutor) {
      setTutor(currentTutor);
    }
  };

  useEffect(() => {
    getFromStorage();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      name: tutor.name,
      subject: tutor.subject,
      datetime,
    };

  
    const existingBookings = JSON.parse(localStorage.getItem("bookedSessions")) || [];


    const updatedBookings = [...existingBookings, newBooking];

    localStorage.setItem("bookedSessions", JSON.stringify(updatedBookings));

    alert(` Session booked with ${tutor.name} for ${tutor.subject} at ${datetime}`);


    if (onClose) onClose();


    setDatetime("");
    setTutor({name : "" ,subject:""});

    navigate("/studentdashboard/my-sessions");
  };

  return (
    <div className="container">
      <h2 className="heading">Book a New Session</h2>
      <form onSubmit={handleSubmit}>
        <label>Tutor Name:</label>
        <input type="text" value={tutor.name} readOnly />

        <label>Subject:</label>
        <input type="text" value={tutor.subject} readOnly />

        <label>Date & Time:</label>
        <input
          type="datetime-local"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          required
        />

        <button type="submit" className="button">
          Book
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
