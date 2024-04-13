import React, { useState } from 'react';
import './Signup.css';
import Image from '../../images/education.png'

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    std: '',
    medium: '',
    role: '',
    board: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    // <div className="total">
    <div className="signup-container">
      <div className="signup-left">
        <img src={Image} alt="Image description" className="signup-left"/>
      </div>
      <div className="signup-right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input className="spacing" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Standard:</label>
            <input type="text" name="std" value={formData.std} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Medium:</label>
            <input type="text" name="medium" value={formData.medium} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <select name="role" value={formData.role} onChange={handleChange} required>
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <div className="form-group">
            <label>Board:</label>
            <input type="text" name="board" value={formData.board} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    // </div>

  );
}

export default Signup;
