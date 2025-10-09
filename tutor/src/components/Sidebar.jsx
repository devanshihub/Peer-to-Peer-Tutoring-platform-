import styles from "./Sidebar.module.css";

function Sidebar({ setCurrentPage, currentPage }) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Tutor Panel</h2>
      <ul className={styles.menu}>
        <li
          className={currentPage === "dashboard" ? styles.active : ""}
          onClick={() => setCurrentPage("dashboard")}
        >
          Dashboard
        </li>
        <li
          className={currentPage === "requests" ? styles.active : ""}
          onClick={() => setCurrentPage("requests")}
        >
          View Requests
        </li>
        <li
          className={currentPage === "availability" ? styles.active : ""}
          onClick={() => setCurrentPage("availability")}
        >
          Seat Availability
        </li>
        <li
          className={currentPage === "lectures" ? styles.active : ""}
          onClick={() => setCurrentPage("lectures")}
        >
          My Lectures
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
