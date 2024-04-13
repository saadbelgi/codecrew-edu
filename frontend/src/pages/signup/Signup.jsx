import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Image from '../../images/education.png';
import server from '../../utils/server';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    medium: '',
    role: '',
    board: '',
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
      const res = await server.post('/signup', formData);
      if (!res.data.error) {
        navigate('/home');
      } else {
        console.log(res.data);
      }
    } catch (e) {
      console.error(e);
    }
    // console.log(formData);
  };

  return (
    // <div className="total">
    <div className="signup-container">
      <div className="signup-left">
        <img src={Image} alt="Image description" className="signup-left" />
      </div>
      <div className="signup-right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="spacing"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              className="spacing"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Grade:</label>
            <input
              type="number"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              min={1}
              max={12}
            />
          </div>
          {/* <div className="form-group">
            <label>Medium:</label>
            <input
              type="text"
              name="medium"
              value={formData.medium}
              onChange={handleChange}
            />
          </div> */}
          <div className="form-group">
            <label>Medium:</label>
            <select
              name="medium"
              value={formData.medium}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="English">English</option>
              {/* <option value="teacher">Teacher</option> */}
            </select>
          </div>
          <div className="form-group">
            <label>Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              {/* <option value="Teacher">Teacher</option> */}
            </select>
          </div>
          {/* <div className="form-group">
            <label>Board:</label>
            <input
              type="text"
              name="board"
              value={formData.board}
              onChange={handleChange}
            />
          </div> */}
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default Signup;
