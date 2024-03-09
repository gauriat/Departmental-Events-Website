// components/home.component.js

/*import React, { Component } from 'react';

function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50vh',
    }}>
      <h1>Welcome to Departmental Events</h1>
        <h2>About the Kle Tech:</h2>
        <h4>
          KLE Technological University (KLE Tech) has its roots in B. V. Bhoomaraddi College of Engineering and Technology, Hubli (BVB), one of the premier engineering institutions of Karnataka. The founding organization KLE Society, Belgaum, established BVB college in 1947 with an aspiration of creating an institution that would lay the foundation of modern engineering education in the northern region of Karnataka.
        </h4>
        <h2>About the Events :</h2>
        <h4>Join us for an exciting lineup of events this January, featuring a diverse range of opportunities tailored for everyone. Dive into the thrill of Hackathons and Coding Competitions, where innovation meets creativity, on January 8th and 9th, from 9 AM to 5 PM. Experience the vibrant pulse of Social and Cultural Events on January 15th, starting at 6 PM, promising a blend of entertainment and community bonding. Elevate your skills with Career Development Workshops scheduled for January 22nd, commencing at 10 AM, designed to shape your professional journey. Lastly, embark on insightful Industry Visits on January 29th, starting bright and early at 8 AM, offering a firsthand glimpse into the professional landscape. Register now for an enriching experience tailored just for you!</h4>
    </div>
  );
}


export default Home*/

// components/home.component.js

import React from 'react';
import techImage from './SOCSE.jpg';
import './App.css';
import Navbar from './navbar/navbar';

function Home() {
  return (
      <div className='content'>
        <Navbar /> 
        <img src={techImage} alt="CSE Dept" className='Dept'/>
      </div>
  );
}

export default Home;

