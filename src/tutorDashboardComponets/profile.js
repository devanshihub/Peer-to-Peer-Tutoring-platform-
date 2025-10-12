import { useState } from "react";

const tutorDetails = [
  {
    name: "Ram",
    Password: "!@#$RTY",
    age: 34,
    totalSessions: 20,
    upcomingSessions: 3,
    AvailableHours: "03:00 , 05:00",
  },
];

function Profile() {
  const tutorName = tutorDetails[0].name;
  const tutorAge = tutorDetails[0].age;
  const password = tutorDetails[0].Password;
  const totalSessions = tutorDetails[0].totalSessions;
  const upcomingSessions = tutorDetails[0].upcomingSessions;
  const AvailableHours = tutorDetails[0].AvailableHours;

  return (
    <div className="profile-container">
      <h2>Hi {tutorName} , Welcome to Tutor Dashboard</h2>
      <p>
        <strong>Tutor Name : </strong>
        {tutorName}
      </p>
      <p>
        <strong>Age : </strong>
        {tutorAge}
      </p>
      <p>
        <strong>Password : </strong>
        {password}
      </p>
      <p>
        <strong>Total Sessions : </strong>
        {totalSessions}
      </p>
      <p>
        <strong>Upcoming Sessions : </strong>
        {upcomingSessions}
      </p>
      <p>
        <strong>Available Hours : </strong>
        {AvailableHours}
      </p>
    </div>
  );
}
export default Profile;
