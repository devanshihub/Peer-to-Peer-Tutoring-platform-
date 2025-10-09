// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isStudentLoggedIn = localStorage.getItem("studentLoggedIn");
  return isStudentLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
