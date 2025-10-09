import React, { useState } from "react";
import styles from "./SearchTutor.module.css";

function SearchTutor({ onSelectTutor }) {
  const [search, setSearch] = useState("");

  const tutors = [
    { name: "Tina", subject: "Math" },
    { name: "Bhavya", subject: "Science" },
    { name: "Priya", subject: "History" },
  ];

  const filteredTutors = tutors.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.card}>
      <h2 className={styles.searchTitle}>Search Tutors</h2>
      <input
        className={styles.searchBar}
        type="text" placeholder="Search by name or subject" value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredTutors.map((tutor, index) => (
        <div key={index} className={styles.sessionCard}>
          <p>
            {tutor.name} - {tutor.subject}
          </p>
          <button
            onClick={() =>
              onSelectTutor({ tutor: tutor.name, subject: tutor.subject })
            }
          >
            Book Session
          </button>
        </div>
      ))}
    </div>
  );
}
export default SearchTutor;