// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/gauri/OneDrive/Documents/Sem 5/Course_Project/frontend/src/App.css';

function Navbar() {
  return (
    <nav className="Navigation-bar">
        <Link to="/" className="Logo">
          <img src={require('./logo.png')} alt="Logo"  style={{ width: '200px', height: '75px' }}/>
        </Link>
        <p className='heading'>Departmental Events</p>
        <div className="Nav-links">
          <Link to="/about" className="Nav-link">
            About
          </Link>
          <Link to="/events" className="Nav-link">
            Past-Events
          </Link>
          <Link to="/login" className="Nav-link">
            Login
          </Link>
        </div>
    </nav>
  );
}

export default Navbar;
