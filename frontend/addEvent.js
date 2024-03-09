/*import React, { useState, useEffect } from 'react';

function AddEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState(''); // New state for time

  const handleAddEvent = async () => {
    try {
      const response = await fetch('http://localhost:8081/addEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: eventName,
          date: eventDate,
          time: eventTime,
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log('Event added successfully!');
        // You may want to redirect or update the UI as needed.
        fetchEvents(); // Fetch events after adding a new one
      } else {
        console.log('Failed to add event.');
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };  

  const [events, setEvents] = useState([]);

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

  useEffect(() => {
    fetchEvents(); // Fetch events when the component mounts
  }, []);

  return (
    <div>
      <h2>Add Event</h2>
      <div>
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div>
        <label>Event Date:</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <div>
        <label>Event Time:</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
      </div>
      <button onClick={handleAddEvent}>Add Event</button>

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
    </div>
  );
}

export default AddEvent;*/

/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEvent() {
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');

  const navigate = useNavigate();

  const handleAddEvent = async () => {
    try {
      const response = await fetch('http://localhost:8081/addEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: eventDescription,
          date: eventDate,
          time: eventTime,
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log('Event added successfully!');
        // Navigate to the /admin page after adding the event
        navigate('/admin');
      } else {
        console.log('Failed to add event.');
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };
  
  return (
    <div>
      <h2>Add Event</h2>
      <div>
        <label>Event Description:</label>
        <input
          type="text"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Event Date:</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <div>
        <label>Event Time:</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
      </div>
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
}

export default AddEvent;*/

/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEvent({ updateEvents }) {
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventImage, setEventImage] = useState(null);

  const navigate = useNavigate();

  const handleAddEvent = async () => {
    try {
      const formData = new FormData();
      formData.append('description', eventDescription);
      formData.append('date', eventDate);
      formData.append('time', eventTime);
      formData.append('image', eventImage);

      const response = await fetch('http://localhost:8081/addEvent', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log('Event added successfully!');
        // Call the updateEvents function to update the events list
        updateEvents(data.newEvent);
        // Navigate to the /admin page after adding the event
        navigate('/admin');
      } else {
        console.log('Failed to add event.');
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventImage(file);
  }; 

  return (
    <div>
      <h2>Add Event</h2>
      <div>
        <label>Event Description:</label>
        <input
          type="text"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Event Date:</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <div>
        <label>Event Time:</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
      </div>
      <div>
  <label>Event Image:</label>
  <input type="file" onChange={handleImageChange} />
</div>
      <button onClick={handleAddEvent}>Add Event</button>
      </div>
  );
}

export default AddEvent;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEvent({ updateEvents }) {
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventImage, setEventImage] = useState(null);

  const navigate = useNavigate();

  const handleAddEvent = async () => {
    try {
      const formData = new FormData();
      formData.append('description', eventDescription);
      formData.append('date', eventDate);
      formData.append('time', eventTime);
      formData.append('image', eventImage);

      const response = await fetch('http://localhost:8081/addEvent', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log('Event added successfully!');
        // Call the updateEvents function to update the events list
        updateEvents(data.newEvent);
        // Navigate to the /admin page after adding the event
        navigate('/admin');
      } else {
        console.log('Failed to add event.');
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventImage(file);
  };

  return (
    <div>
      <h2>Add Event</h2>
      <div>
        <label>Event Description:</label>
        <input
          type="text"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Event Date:</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <div>
        <label>Event Time:</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
      </div>
      <div>
        <label>Event Image:</label>
        <input type="file" onChange={handleImageChange} />
      </div>
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
}

export default AddEvent;



