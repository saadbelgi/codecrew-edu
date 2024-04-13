import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home.jsx";
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
// import Home from './pages/home/home.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
        
      
    </>
  );
}

export default App;

