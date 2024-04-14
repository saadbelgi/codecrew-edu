// Create a separate Dropdown component (Dropdown.js)
import React from 'react';
import './dropdown.css';
import pdfIcon from '../../images/pdf.png'

const Dropdown = ({ content, icon }) => {
  // Add dropdown logic here (optional: open/close functionality, menu items)
  return (
    <div className="dropdown">
    {/* <img src={pdfIcon} className='align'/> */}
    <i className={icon}>Chapter 1</i>
      {/* <span><img src={pdfIcon} className='align'/></span> */}
      {/* <span className="dropdown-content">{content}</span> */}
      <p className="dropdown-content">{content}</p>
    </div>
  );
};

export default Dropdown;



