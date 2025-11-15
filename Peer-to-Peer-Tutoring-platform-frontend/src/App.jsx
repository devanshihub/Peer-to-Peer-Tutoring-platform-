import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./homePagesComponents/navbar";
import HeroSection from "./homePagesComponents/herosection";
import About from "./homePagesComponents/about";
import Signup from "./homePagesComponents/signup";
import Login from "./homePagesComponents/login";

import StudentDashboard from "./studentDashboard";
import TutorDashboard from "./tutorDashboard";
import BookingForm from "./studentDashboardComponents/bookingForm";
import SearchTutor from "./studentDashboardComponents/searchTutor";
import MySessions from "./studentDashboardComponents/mySessions";
import Profile from "./common/Profile/Profile";
import UpcommingSessions from "./tutorDashboardComponents/upcommingSessions";
import Requests from "./tutorDashboardComponents/requests";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HeroSection />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <About />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <NavBar />
        <Signup />
      </>
    ),
  },
  {
    path: "/studentdashboard",
    element: <StudentDashboard />,
    children: [
      { index: true, element: <Profile /> },
      { path: "bookingform", element: <BookingForm /> },
      { path: "search-tutor", element: <SearchTutor /> },
      { path: "my-sessions", element: <MySessions /> },
    ],
  },
  {
    path: "/tutordashboard",
    element: <TutorDashboard />,
    children: [
      { index: true, element: <Profile type="tutor" /> },
      { path: "requests", element: <Requests /> },
      { path: "upcoming-sessions", element: <UpcommingSessions /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
