import React from 'react';
import Login from './login';
import'./App.css';
import Home from './home';
import Navbar from './navbar/navbar';
//import Register from './Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
   <BrowserRouter>
   <div className="App">
   <Navbar /> 
        <div className="colored-background"></div>
        <div className="white-background"></div>
   <Routes>
   <Route exact path='/' element={<Home />} />
   <Route exact path='/login' element={<Login />} />
   </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
