import { useState } from "react";
import styles from "./SeatAvailability.module.css";

function SeatAvailability() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  const [slots, setSlots] = useState([]);
  const [day, setDay] = useState("");
  const [subject, setSubject] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [seats, setSeats] = useState("");

  const addSlot = () => {
    if (!day || !subject || !start || !end || !seats) {
      alert("Please fill all fields!");
      return;
    }

    const newSlot = { day, subject, start, end, seats };
    setSlots([...slots, newSlot]);

    setDay(""); 
    setSubject(""); 
    setStart(""); 
    setEnd(""); 
    setSeats("");
  };

  const saveSlots = () => {
    localStorage.setItem("seatAvailability", JSON.stringify(slots));
    alert("Saved!");
  };

  return (
    <div className={styles.container}>
      <h2>Seat Availability</h2>

      <div className={styles.form}>
        <label>Day:</label>
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Select a day</option>
          {days.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <label>Subject:</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />

        <label>Start Time:</label>
        <input type="time" value={start} onChange={(e) => setStart(e.target.value)} />

        <label>End Time:</label>
        <input type="time" value={end} onChange={(e) => setEnd(e.target.value)} />

        <label>Seats:</label>
        <input type="number" value={seats} onChange={(e) => setSeats(e.target.value)} />

        <button type="button" onClick={addSlot}>+ Add</button>
      </div>

      {slots.length > 0 && (
        <div className={styles.slots}>
          {slots.map((s, i) => (
            <div key={i} className={styles.slot}>
              <p><strong>{s.day}</strong> - {s.subject}</p>
              <p>{s.start} to {s.end} | Seats: {s.seats}</p>
            </div>
          ))}
          <button onClick={saveSlots}>Save All</button>
        </div>
      )}
    </div>
  );
}

export default SeatAvailability;
