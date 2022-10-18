import React from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const ProtectedRoute = ({ path, children }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
