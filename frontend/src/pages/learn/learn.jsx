import { useState, useEffect } from 'react';
import './learn.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Image from '../../images/science.jpg';
import Dropdown from '../../components/dropdown/dropdown';
import testIcon from '../../images/test.png';
import pdfIcon from '../../images/pdf.png';
import server from '../../utils/server';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Learn = () => {
  // const [dropdownData, setDropdownData] = useState([]); // State to store dropdown data
  const [chapterData, setChapterData] = useState([]);

  // Function to generate random dropdown dat

  useEffect(() => {
    (async () => {
      const res1 = await server.get('/videos');
      // setVideoData(res.data);
      const res2 = await server.get('/textbooks');
      // setTextbookData(res.data);
      let l = res1.data.length;
      let data = [];
      for (let i = 0; i < l; i++) {
        if (res1.data[i].chapterNo === data.length + 1) {
          data.push({
            chapterNo: res1.data[i].chapterNo,
            title: res1.data[i].title,
            book: res2.data[res1.data[i].chapterNo - 1].url,
            subtopic: [
              {
                title: res1.data[i].subtopic,
                video: res1.data[i].url,
              },
            ],
          });
        } else {
          data[data.length - 1].subtopic.push({
            title: res1.data[i].subtopic,
            video: res1.data[i].url,
          });
        }
      }
      console.log(data);
      setChapterData(data);
    })();
  }, []);

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
          {chapterData && (
            <div>
              {chapterData.map((chapter, idx) => {
                return (
                  <Accordion key={idx}>
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>{chapter.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography> */}
                      {chapter.subtopic.map((subtopic, index) => {
                        return <div key={index}>
                          {subtopic.title}

                        </div>;
                      })}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          )}
          {/* <img src={Image} className="alignment" />
          <div className="container">
            {dropdownData.map((item, index) => (
              <div key={index} className="dropdown-container">
                <Dropdown
                  content={item.label}
                  icon={<img src={testIcon} alt="Test Icon" />}
                />
                <img src={pdfIcon} className="align" />
              </div>
            ))}
          </div> */}
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
