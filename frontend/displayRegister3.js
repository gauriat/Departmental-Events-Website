// Import necessary dependencies

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar/navbar1'

function DisplayRegister3() {
  const [register3Students, setRegister3Students] = useState([]);

  useEffect(() => {
    // Fetch Register3 student details when the component mounts
    const fetchRegister3Students = async () => {
      try {
        const response = await axios.get('http://localhost:8081/display-3');
        setRegister3Students(response.data);
      } catch (error) {
        console.error('Error fetching Register1 students:', error);
      }
    };

    fetchRegister3Students();
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <div style={{paddingTop:'100px'}}>
      <Navbar/>
      <h2>Register3 Student Details</h2>
      <ul>
        {register3Students.map((student) => (
          <li key={student._id}>
            <strong>Name:</strong> {student.name}<br></br> <strong>Email:</strong> {student.email}<br></br> <strong>USN:</strong> {student.usn}<br></br> <strong>Sem:</strong> {student.sem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayRegister3;
