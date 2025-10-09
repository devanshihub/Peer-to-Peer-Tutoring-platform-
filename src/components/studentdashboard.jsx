// src/components/StudentDashboard.jsx
import React, { useState } from "react";

// ✅ Correct imports for dashboard inside components
import Sidebar from "./dashboard/Sidebar";
import DashboardPage from "./dashboard/Dashboard";
import SearchTutor from "./dashboard/SearchTutor";
import BookingForm from "./dashboard/BookingForm";
import ConfirmPage from "./dashboard/ConfirmationPage";
import MySession from "./dashboard/MySession";

const StudentDashboard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar
        onShowDashboard={() => setCurrentPage("dashboard")}
        onSearchTutor={() => setCurrentPage("search")}
        onBook={() => setCurrentPage("form")}
        onShowSessions={() => setCurrentPage("sessions")}
      />

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {currentPage === "dashboard" && <DashboardPage />}
        {currentPage === "search" && <SearchTutor />}
        {currentPage === "form" && <BookingForm />}
        {currentPage === "confirm" && <ConfirmPage />}
        {currentPage === "sessions" && <MySession />}
      </div>
    </div>
  );
};

export default StudentDashboard;
