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
