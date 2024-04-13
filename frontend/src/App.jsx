import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home.jsx";
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Learn from './pages/learn/learn.jsx';
// import Home from './pages/home/home.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </Router>
        
      
    </>
  );
}

export default App;

