import React from 'react';
import Login from './login';
import'./App.css';
import About from './navbar/about';
import Home from './home';
import Events from './events/events';
import EventDetail from './events/EventDetail';
import Register1 from './Register1';
import Register2 from './Register2';
import Register3 from './Register3';
import Register4 from './Register4';
import NewEvents from './events/UpcomingEvents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SuccessfulRegistration from './registered';
import AdminLogin from './admin';
import AdminHome from './adminHome';
import Register from './register';
import DisplayRegister1 from './displayRegister1';
import DisplayRegister2 from './displayRegister2';
import DisplayRegister3 from './displayRegister3';
import DisplayRegister4 from './displayRegister4';
import AddEvent from './addEvent';
import DeleteEvent from './deleteEvent';

function App() {
  return(
   <BrowserRouter>
   <div className="App">
  
   <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<Events/>} />
          <Route path='/events/:eventId' element={<EventDetail />} />
          <Route exact path='/register1' element={<Register1 />} />
          <Route exact path='/register2' element={<Register2 />} />
          <Route exact path='/register3' element={<Register3 />} />
          <Route exact path='/register4' element={<Register4 />} />
          <Route exact path='/events1' element={<NewEvents />} />
          <Route exact path='/admin' element={<AdminLogin />} />
          <Route exact path='/adminHome' element={<AdminHome />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/registerd' element={<SuccessfulRegistration />} />
          <Route exact path='/display-1' element={<DisplayRegister1 />} />
          <Route exact path='/display-2' element={<DisplayRegister2 />} />
          <Route exact path='/display-3' element={<DisplayRegister3 />} />
          <Route exact path='/display-4' element={<DisplayRegister4 />} />
          <Route exact path='addevent' element={<AddEvent />} />
          <Route exactpath='/deleteEvent/:eventId' element={<DeleteEvent />} />
   </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App