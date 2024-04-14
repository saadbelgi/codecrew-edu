import React, { useState, useEffect } from 'react';
import './learn.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Image from '../../images/science.jpg';
import Dropdown from '../../components/dropdown/dropdown';

const Learn = () => {
  const [dropdownData, setDropdownData] = useState([]); // State to store dropdown data

  // Function to generate random dropdown data
  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 5; i++) { // Replace 5 with desired number of dropdowns
      data.push({ label: `Dropdown ${i + 1}`, value: `value-${i + 1}` }); // Add value property if needed
    }
    setDropdownData(data);
  };

  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [formData, setFormData] = useState({
    topic: '',
    numOfQuestions: 0
  }); // State to store form data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission goes here
    console.log(formData);
    setShowModal(true); // Show modal on form submission
  };

  useEffect(() => {
    generateRandomData(); // Generate random data on component mount
  }, []); // Empty dependency array ensures generateRandomData runs only once

  return (
    <>
      <div className="top">
        <div>
          <Navbar />
          <Sidebar />
        </div>

        <div className='middle'> 
          <div className='mid-con'>
            <img src={Image} className="alignment" />
            <div className="container">
              {dropdownData.map((item, index) => (
                <div key={index} className="dropdown-container">
                  <Dropdown content={item.label} icon="fas fa-file-pdf" className="sizing"/>
                  
                </div>
              ))}
            </div>
          </div>
          

          <div className='right'>
                <div className='right1'>
                  <h2 className='head'>Generate Test</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="topic" style={{ color: 'white' }}>Topic Name:</label>
                      <input type="text" id="topic" name="topic" value={formData.topic} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="numOfQuestions" style={{ color: 'white' }}>Number of Questions:</label>
                      <input type="number" id="numOfQuestions" name="numOfQuestions" value={formData.numOfQuestions} onChange={handleInputChange} required />
                    </div>
                    <button type="submit">Generate</button>
                  </form>
                </div>
                <div className='right2'></div>
          </div>

        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Learn;


