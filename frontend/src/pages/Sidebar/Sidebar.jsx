import React, { useState } from 'react';
import './Sidebar.css'
import UserIcon from "../../images/user.png";

const Sidebar = () => {
  return (
    <>
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
              
              <img src={UserIcon}></img> 
              </div>
              <p style={{ color: 'white',fontSize:'28px' }}>Advait Sapkal</p>

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

export default Sidebar;

