import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SearchTutor from "./components/SearchTutor.jsx";
import BookSession from "./components/BookingForm.jsx";
import ConfirmPage from "./components/ConfirmationPage.jsx";
import MySession from "./components/MySession.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [bookingDetails, setBookingDetails] = useState(null);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [sessions, setSessions] = useState([]);


  const handleBooking = (details) => {
    setBookingDetails(details);
    setSessions((prev) => [...prev, details]); 
    setCurrentPage("confirm");
  };

  return (
    <div className="app">
      <Sidebar
        onBook={() => {
          setSelectedTutor(null); 
          setCurrentPage("form");
        }}
        onShowSessions={() => setCurrentPage("sessions")}
        onShowDashboard={() => setCurrentPage("dashboard")}
        onSearchTutor={() => setCurrentPage("search")}
      />

      <main className="main-content">
        {currentPage === "dashboard" && (
          <Dashboard sessions={sessions} />
        )}

        {currentPage === "search" && (
          <SearchTutor
            onSelectTutor={(tutorInfo) => {
              setSelectedTutor(tutorInfo);
              setCurrentPage("form");
            }}
          />
        )}

        {currentPage === "form" && (
          <BookSession prefill={selectedTutor}
            onBook={handleBooking} 
          />
        )}

        {currentPage === "confirm" && (
          <ConfirmPage booking={bookingDetails}
            onnewbooking={() => {
              setSelectedTutor(null);
              setCurrentPage("form");
            }}
          />
        )}

        {currentPage === "sessions" && (
          <MySession sessions={sessions} /> 
        )}
      </main>
    </div>
  );
}

export default App;