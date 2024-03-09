// Import necessary dependencies

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar/navbar1'

function DisplayRegister4() {
  const [register4Students, setRegister4Students] = useState([]);

  useEffect(() => {
    // Fetch Register4 student details when the component mounts
    const fetchRegister4Students = async () => {
      try {
        const response = await axios.get('http://localhost:8081/display-4');
        setRegister4Students(response.data);
      } catch (error) {
        console.error('Error fetching Register4 students:', error);
      }
    };

    fetchRegister4Students();
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <div style={{paddingTop:'100px'}}>
      <Navbar/>
      <h2>Register4 Student Details</h2>
      <ul>
        {register4Students.map((student) => (
          <li key={student._id}>
            <strong>Name:</strong> {student.name}<br></br> <strong>Email:</strong> {student.email}<br></br> <strong>USN:</strong> {student.usn}<br></br> <strong>Sem:</strong> {student.sem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayRegister4;
