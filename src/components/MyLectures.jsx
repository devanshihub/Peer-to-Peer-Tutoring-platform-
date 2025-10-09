import { useEffect, useState } from "react";
import styles from "./MyLectures.module.css";

function MyLectures() {
  const [lectures, setLectures] = useState([]);


  useEffect(() => {
    const storedLectures = JSON.parse(localStorage.getItem("lectures") || "[]");
    setLectures(storedLectures);
  }, []);

  return (
    <div className={styles.container}>
      <h1>My Lectures</h1>

      {lectures.length === 0 ? (
        <p className={styles.empty}>No lectures scheduled.</p>
      ) : (
        <ul className={styles.list}>
          {lectures.map((lecture, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.subject}>{lecture.subject}</div>
              <div className={styles.details}>
                With <strong>{lecture.student}</strong> <br />
                On {lecture.date} at {lecture.time}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyLectures;
