import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./studentDashboard";
import BookingForm from "./studentDashboardComponents/bookingForm";
import SearchTutor from "./studentDashboardComponents/searchTutor";
import MySessions from "./studentDashboardComponents/mySessions";
import Profile from "./common/Profile/Profile";

function App() {
  const [profileType, setProfileType] = useState("student");
  return (
    <div>
      <Routes>
        <Route path="/" element={<StudentDashboard />}>
          <Route index element={<Profile type={profileType} />} />
          <Route path="search-tutor" element={<SearchTutor />} />
          <Route path="book-session" element={<BookingForm />} />
          <Route path="my-sessions" element={<MySessions />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;