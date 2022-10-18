import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/auth/Login/Login";
import SignUp from "./components/auth/SignUp/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword/ForgotPassword";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import AuthProvider from "./store/AuthProvider";

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainWrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="login">
              <Route index element={<Login />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route path="register" element={<SignUp />} />
            <Route path="*" element={<Navigate to="login" replace />} />
          </Routes>
        </MainWrapper>
      </Router>
    </AuthProvider>
  );
};

export default App;
