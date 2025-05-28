import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/landing-page" />;

  return <div className="flex h-screen">{children}</div>
};

export default ProtectedRoute;