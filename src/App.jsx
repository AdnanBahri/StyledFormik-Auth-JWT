import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import SignUp from "./components/auth/SignUp/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword/ForgotPassword";

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const App = () => {
  return (
    <Router>
      <MainWrapper>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="login">
            <Route index element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route path="register" element={<SignUp />} />
        </Routes>
      </MainWrapper>
    </Router>
  );
};

export default App;
