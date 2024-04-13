import React, { useState, useEffect } from 'react';
import './learn.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Image from '../../images/science.jpg';
import Dropdown from '../../components/dropdown/dropdown';
import testIcon from '../../images/test.png'
import pdfIcon from '../../images/pdf.png'

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

  useEffect(() => {
    generateRandomData(); // Generate random data on component mount
  }, []); // Empty dependency array ensures generateRandomData runs only once

  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="top">
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <div>
          <img src={Image} className="alignment" />
          <div className="container">
            {dropdownData.map((item, index) => (
              <div key={index} className="dropdown-container">
                <Dropdown content={item.label} icon={<img src={testIcon} alt="Test Icon" />}/>
                <img src={pdfIcon} className='align'/>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Learn;

// import React, { useState, useEffect } from 'react';
// import './learn.css';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';
// import Image from '../../images/science.jpg';
// import Dropdown from '../../components/dropdown/dropdown';

// const Learn = () => {
//   const [dropdownData, setDropdownData] = useState([]); // State to store dropdown data

//   // Function to fetch data from database (replace with your actual logic)
//   const fetchData = async () => {
//     const response = await fetch('your-api-endpoint'); // Replace with your API endpoint
//     const data = await response.json();
//     setDropdownData(data); // Update state with fetched data
//   };

//   useEffect(() => {
//     fetchData(); // Fetch data on component mount
//   }, []); // Empty dependency array ensures fetchData runs only once

//   return (
//     <>
//       <div className="top">
//         <div>
//           <Navbar />
//           <Sidebar />
//         </div>
//         <div>
//           <img src={Image} className="alignment" />
//           <div className="container">
//           {dropdownData.map((item, index) => ( // Loop through fetched data
//             <div key={index} className="dropdown-container"> {/* Unique key for each dropdown */}
//               <Dropdown content={item.label} icon="fas fa-file-pdf" /> {/* Pass content and icon class */}
//             </div>
//           ))}
//         </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Learn;
