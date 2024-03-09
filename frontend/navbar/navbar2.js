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

        <div className="Nav-links">
          <Link to="/" className="Nav-link">
            Home
          </Link>
          <Link to="/login" className="Nav-link">
            Login
          </Link>
        </div>
    </nav>
  );
}

export default Navbar;
