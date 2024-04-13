// Create a separate Dropdown component (Dropdown.js)
import React from 'react';
import './dropdown.css';

const Dropdown = ({ content, icon }) => {
  // Add dropdown logic here (optional: open/close functionality, menu items)
  return (
    <div className="dropdown">
      <span className="dropdown-content">{content}</span>
      <i className={icon}>Chapter 1</i>
    </div>
  );
};

export default Dropdown;