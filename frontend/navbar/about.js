
import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/gauri/OneDrive/Documents/Sem 5/Course_Project/frontend/src/App.css';
import Navbar from './navbar2';

function About() {
  return (
      <div className='about'>
        <Navbar /> 
        <Link to="/" className="Logo">
          <img src={require('./KLE Technological University,img.png')} alt="Logo"  style={{ width: '100%', height: '75%' }}/>
        </Link>
        <h2 style={{color: 'red'}}>Inspiring excellence, nurturing talent</h2>
        <p>KLE Technological University (KLE Tech) has its roots in one of the premier Engineering Institutions of Karnataka, B. V. Bhoomaraddi College of Engineering and Technology (BVB), a prestigious Engineering College in Hubballi. The founding organization KLE Society, Belgaum, established BVB College in 1947 to create an institution that would lay the foundation of modern engineering education in the northern region of Karnataka.
            <br/>Over time, it gained tremendous credibility with the industries and employers and emerged as a brand to reckon with. The Alumni of the Institute have done exceedingly well in all spheres of life at both national and international levels and brought name and fame to themselves and their alma mater.
            <br/>.
        </p>
      </div>
  );
}

export default About;
