/*import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const defaultEventsData = [
  {
    name: 'Hackathons and Coding Competitions',
    date: 'January 8th and 9th',
    time: '9 AM to 5 PM',
    registrationLink: '/Register1'
  },
  {
    name: 'Social and Cultural Events',
    date: 'January 15th',
    time: 'Starting at 6 PM',
    registrationLink: '/Register2/social-events'
  },
  {
    name: 'Career Development Workshops',
    date: 'January 22nd',
    time: 'Commencing at 10 AM',
    registrationLink: '/Register3/career-workshops'
  },
  {
    name: 'Industry Visits',
    date: 'January 29th',
    time: 'Starting at 8 AM',
    registrationLink: '/Register4/industry-visits'
  }
];

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8081/events');
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

    fetchEvents();
  }, []);

  const mergedEvents = [...defaultEventsData, ...events];

  return (
    <div className="events-container">
      <h2 className="sub-heading">Upcoming Events</h2>
      <div className="events-list">
        {mergedEvents.map((event, index) => (
          <div key={index} className="event-box">
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <Link to={event.registrationLink} className="register1-link">
              Register
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;*/


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const defaultEventsData = [
  {
    name: 'Hackathons and Coding Competitions',
    date: 'January 8th and 9th',
    time: '9 AM to 5 PM',
    registrationLink: '/Register1'
  },
  {
    name: 'Social and Cultural Events',
    date: 'January 15th',
    time: 'Starting at 6 PM',
    registrationLink: '/Register2'
  },
  {
    name: 'Career Development Workshops',
    date: 'January 22nd',
    time: 'Commencing at 10 AM',
    registrationLink: '/Register3'
  },
  {
    name: 'Industry Visits',
    date: 'January 29th',
    time: 'Starting at 8 AM',
    registrationLink: '/Register4'
  }
];

function Events() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8081/events');
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

    fetchEvents();
  }, []);

  const mergedEvents = [...defaultEventsData, ...events];
  const eventsPerPage = 2; // Number of events to display per page
  const totalPages = Math.ceil(mergedEvents.length / eventsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIdx = currentPage * eventsPerPage;
  const endIdx = startIdx + eventsPerPage;
  const currentEvents = mergedEvents.slice(startIdx, endIdx);

  return (
    <div className="events-container">
      <h2 className="sub-heading">Upcoming Events</h2>
      <div className="events-list">
        {currentEvents.map((event, index) => (
          <div key={index} className="event-box">
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <Link to={event.registrationLink} className="register1-link">
              Register
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="prev-next-button"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          &lt; Previous
        </button>
        <span>{`Page ${currentPage + 1} of ${totalPages}`}</span>
        <button
          className="prev-next-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );  
}

export default Events;