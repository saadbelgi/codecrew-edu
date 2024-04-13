import { useState } from 'react';
import './Login.css';
import Image from '../../images/education.png';
import server from '../../utils/server';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    role: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await server.post('/login', formData);
      if (!res.data.error) {
        navigate('/home');
      } else {
        console.log(res.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        {/* Add your related image or content here */}
        <img src={Image} alt="Image description" className="signup-left" />
      </div>
      <div className="signup-right">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
