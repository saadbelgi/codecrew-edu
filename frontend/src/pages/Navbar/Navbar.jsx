import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      {/* <div className="navbar">
        <div className="nav-content">
          <a className="nav-link" href="#">Dashboard</a>
          <a className="nav-link" href="#">Learn</a>
        </div>
      </div> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          SMARTLearn
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Learn
              </a>
            </li>
          </ul>
          <span class="navbar-text">John Doe</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
