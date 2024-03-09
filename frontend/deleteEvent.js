import React, { useState, useEffect } from 'react';

function DeleteEvent() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');

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

  const handleDeleteEvent = async () => {
    try {
      const response = await fetch(`http://localhost:8081/deleteEvent/${selectedEvent}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        console.log('Event deleted successfully!');
        // You may want to update the UI or fetch events again after deletion.
      } else {
        console.log('Failed to delete event.');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <h2>Delete Event</h2>
      <div>
        <label>Select Event to Delete:</label>
        <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
          <option value="">Select an Event</option>
          {events.map((event) => (
            <option key={event._id} value={event._id}>
              {event.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleDeleteEvent}>Delete Event</button>
    </div>
  );
}

export default DeleteEvent;
