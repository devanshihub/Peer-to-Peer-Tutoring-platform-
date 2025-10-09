import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ViewRequests from "./components/ViewRequests.jsx";
import SeatAvailability from "./components/SeatAvailability.jsx";
import MyLectures from "./components/MyLectures.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="app">
      {}
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {}
      <main className="content">
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "requests" && <ViewRequests />}
        {currentPage === "availability" && <SeatAvailability />}
        {currentPage === "lectures" && <MyLectures />}
      </main>
    </div>
  );
}

export default App;
