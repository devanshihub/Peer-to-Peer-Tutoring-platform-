// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./studentDashboard";
import TutorDashboard from "./tutorDashboard";
import BookingForm from "./studentDashboardComponents/bookingForm";
import SearchTutor from "./studentDashboardComponents/searchTutor";
import MySessions from "./studentDashboardComponents/mySessions";
import Profile from "./common/Profile/Profile";
import About from "./homePagesComponents/about";
import Home from "./home";

function App() {
  // const isLoggedIn = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   return !!user;
  // }
  // const getProfileType = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if(!user){
  //     return "";
  //   }
  //   return user.type;
  // }
  // return (
  //   <div>
  //     <Routes>
  //       <Route path="/" element={isLoggedIn() ? getProfileType() === "tutor" ? <TutorDashboard /> : <StudentDashboard /> : <Home />}>
  //         <Route index element={<Profile type={getProfileType()} />} />
  //         <Route path="search-tutor" element={<SearchTutor />} />
  //         <Route path="book-session" element={<BookingForm />} />
  //         <Route path="my-sessions" element={<MySessions />} />
  //       </Route>
  //     </Routes>
  //   </div>
  // );

  return <TutorDashboard />;
}

export default App;
