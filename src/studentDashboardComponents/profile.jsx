import { useState } from "react";

const studentDetails = [
  {
    name: "Ram",
    Password: "!@#$RTY",
    age: 34,
    totalSessions: 20,
    upcomingSessions: 3,
  },
];

function Profile() {
  const studentName = studentDetails[0].name;
  const studentAge = studentDetails[0].age;
  const password = studentDetails[0].Password;
  const totalSessions = studentDetails[0].totalSessions;
  const upcomingSessions = studentDetails[0].upcomingSessions;

  return (
    <div className="profile-container">
      <h2>Hi {studentName} , Welcome to Student Dashboard</h2>
      <p>
        <strong>Student Name : </strong>
        {studentName}
      </p>
      <p>
        <strong>Age : </strong>
        {studentAge}
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
    </div>
  );
}
export default Profile;