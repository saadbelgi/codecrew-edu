import React, { useState } from 'react';
import './Login.css';
import Image from '../../images/education.png'

const Login = () => {
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
    <div className="signup-container">
      <div className="signup-left">
        {/* Add your related image or content here */}
        <img src={Image} alt="Image description" className="signup-left"/>
      </div>
      <div className="signup-right">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
