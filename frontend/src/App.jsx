import './App.css'
import {

  Route,
  Routes,
  Router,
} from "react-router-dom";

import Signup from "./pages/signup/Signup.jsx";

function App() {
  return (
    <>

        <Router>
          <Routes>
            <Route path="/signup" element={<Signup/>}/>  
          </Routes>
        </Router>

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

          <div className="navbar">
            <div className="nav-content">
              <a className="nav-link" href="#">Dashboard</a>
              <a className="nav-link" href="#">Learn</a>
              {/* Add more links here */}
            </div>
          </div>

        </div>
        
      
    </>
  )
}

export default App;
