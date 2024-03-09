/*import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar1';
import event1Image from './career.jpg';
import event2Image from './cultural.jpg';
import event3Image from './hackathon.jpg';
import event4Image from './industry.jpg';frontend\public\logo192.png

const eventsData = [
  {
    id: 1,
    image: event3Image,
    description: 'Hackathon and Coding Competition',
    date: 'January 8th and 9th',
    time: '9 AM to 5 PM',
    registrationLink: '/Register1'
  },
  {
    id: 2,
    image: event2Image,
    description: 'Social and Cultural Event',
    date: 'January 15th',
    time: 'Starting at 6 PM',
    registrationLink: '/Register2'
  },
  {
    id: 3,
    image: event1Image,
    description: 'Career Development Workshop',
    date: 'January 22nd',
    time: 'Commencing at 10 AM',
    registrationLink: '/Register3'
  },
  {
    id: 4,
    image: event4Image,
    description: 'Industry Visit',
    date: 'January 29th',
    time: 'Starting at 8 AM',
    registrationLink: '/Register4'
  }
];

function Events() {
  return (
    <div>
      <Navbar />
      <h2 style={{ paddingTop: '80px', fontFamily: 'serif', fontWeight: 'bold', color: '#365486', paddingLeft: '10px' }}>Upcoming Events</h2>
      <div className="events-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {eventsData.map((event, index) => (
          <div key={index} className="event-block">
            <img
              src={event.image}
              alt={`Event ${event.id}`}
              style={{ marginRight: '10px' }}
              className='event-image'
            />
            <div className="event-description">
              <h3 style={{ paddingTop: '80px', fontFamily: 'serif', fontWeight: 'bold', color: '#365486', paddingLeft: '10px' }}>{event.description}</h3>
              <br />
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <Link to={event.registrationLink} className="register1-link">
                Register
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;*/



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar1';
import event1Image from './career.jpg';
import event2Image from './cultural.jpg';
import event3Image from './hackathon.jpg';
import event4Image from './industry.jpg';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:8081/events1');
      const data = await response.json();

      if (Array.isArray(data)) {
        setEvents(data);
      } else {
        console.error('Invalid response format:', data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const eventsData = [
    {
      id: 1,
      image: event3Image,
      description: 'Hackathon and Coding Competition',
      date: 'January 8th and 9th',
      time: '9 AM to 5 PM',
      registrationLink: '/Register1'
    },
    {
      id: 2,
      image: event2Image,
      description: 'Social and Cultural Event',
      date: 'January 15th',
      time: 'Starting at 6 PM',
      registrationLink: '/Register2'
    },
    {
      id: 3,
      image: event1Image,
      description: 'Career Development Workshop',
      date: 'January 22nd',
      time: 'Commencing at 10 AM',
      registrationLink: '/Register3'
    },
    {
      id: 4,
      image: event4Image,
      description: 'Industry Visit',
      date: 'January 29th',
      time: 'Starting at 8 AM',
      registrationLink: '/Register4'
    }
  ];

  const updateEvents = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div>
      <Navbar />
      <h2 style={{ paddingTop: '80px', fontFamily: 'serif', fontWeight: 'bold', color: '#365486', paddingLeft: '10px' }}>Upcoming Events</h2>
      <div className="events-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {eventsData.map((event) => (
          <div key={event.id} className="event-block">
            <img
              src={event.image}
              alt={`Event ${event.id}`}
              style={{ marginRight: '10px' }}
              className='event-image'
            />
            <div className="event-description">
              <h3 style={{ paddingTop: '80px', fontFamily: 'serif', fontWeight: 'bold', color: '#365486', paddingLeft: '10px' }}>{event.description}</h3>
              <br />
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <Link to={event.registrationLink} className="register1-link">
                Register
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="events-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {events.map((event) => (
          <div key={event._id} className="event-block">
            <img
              src={event.imagePath} // Adjust this based on your actual data structure
              alt={`Event ${event._id}`}
              style={{ marginRight: '10px' }}
              className='event-image'
            />
            <div className="event-description">
              <h3 style={{ paddingTop: '80px', fontFamily: 'serif', fontWeight: 'bold', color: '#365486', paddingLeft: '10px' }}>{event.description}</h3>
              <br />
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <Link to={event.registrationLink} className="register1-link">
                Register
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
