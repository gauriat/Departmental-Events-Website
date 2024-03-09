import React, { useState, useEffect } from 'react';

function Event() {
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

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.name} - {new Date(event.datetime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Event;

