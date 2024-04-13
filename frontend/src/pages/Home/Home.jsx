import React, { useState } from 'react';
import './Home.css'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false); // State variable for dropdown visibility
  const [selectedOption, setSelectedOption] = useState(null); // State for selected option

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility on button click
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update selected option on click
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-content">
          <a className="nav-link" href="#">Dashboard</a>
          <a className="nav-link" href="#">Learn</a>
        </div>
      </div>
        <div class="status-section">
        <p>In progress, Upcoming, Completed. View all</p>
        <div class="status-boxes">
          <div class="status-box one">
            <h3>Scripts Writing</h3>
            <p>1/3 Course</p>
          </div>
          <div class="status-box two">
            <h3>UX Modeling</h3>
            <p>4/12 -</p>
          </div>
          <div class="status-box three">
            <h3>Quick Sketching</h3>
            <p>2116 Course</p>
          </div>
        </div>
      </div>
      
      <div className="alignment">
      <div class="statistics-section">
        <h2>Statistics</h2>
        <div class="dropdown">
          <button
            class="dropdown-button"
            onClick={toggleDropdown}
          >
            {selectedOption || "By hours"} <i class="fas fa-angle-down"></i>
          </button>
          {isOpen && (
            <ul class="dropdown-content container ">
              <li class="dropdown-content"
                className={selectedOption === "By Day" ? "active" : ""}
                onClick={() => handleOptionClick("By Day")}
              >
                <i className="fas fa-check"></i> By Day
              </li>
              <li
                className={selectedOption === "By Week" ? "active" : ""}
                onClick={() => handleOptionClick("By Week")}
              >
                <i className="fas fa-check"></i> By Week
              </li>
              <li
                className={selectedOption === "By Month" ? "active" : ""}
                onClick={() => handleOptionClick("By Month")}
              >
                <i className="fas fa-check"></i> By Month
              </li>
            </ul>
          )}
        </div>
      </div>

      <div class="circle-container">
  <div class="big-circle"></div>
  <div class="small-circle top-left"></div>
  {/* <div class="left-container">hello</div> */}
  <div class="small-circle top-right"></div>
  <div class="small-circle bottom-left"></div>
  <div class="small-circle bottom-right"></div>
</div>

<table>
  <thead>
    <tr>
      <th>Time</th>
      <th>Mon</th>
      <th>Tue</th>
      <th>Wed</th>
      <th>Thu</th>
      <th>Fri</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>9:00 AM</td>
      <td><div class="subject math"></div></td>
      <td><div class="subject science"></div></td>
      <td><div class="subject english"></div></td>
      <td><div class="subject history"></div></td>
      <td><div class="subject art"></div></td>
    </tr>
    </tbody>
</table>
      </div>


<div id="tooltip" class="hidden">
  <span id="tooltip-text"></span>
</div>




        {/* <Router>
          <Routes>
            <Route path="/signup" element={<Signup/>}/>  
          </Routes>
        </Router> */}

        <div className='main'>

          <div className="left-side">
              
              <div className='profile'>
                
                  
              </div>
              <p style={{ color: 'white' }}>Username</p>

              <div className='bottom-left'>

                <div className='up'>
                  <div className='box'>
                    <p style={{ color: 'white',fontSize:'20px' }}>Completed Courses</p>
                  </div>
                  <div className='box'><p style={{ color: 'white',fontSize:'20px' }}>Achievements</p></div>
                </div>
                <div className='down'>
                  <div className='box'><p style={{ color: 'white',fontSize:'20px' }}>Progress</p></div>
                    <div className='box'><p style={{ color: 'white',fontSize:'20px' }}>Classmates</p></div>
                </div>
              </div>
          </div>

        </div>
        
      
    </>
  );
}

export default Home;

