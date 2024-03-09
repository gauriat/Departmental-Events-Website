// EventDetail.js

import React from 'react';
import Navbar from '../navbar/navbar3';
import { eventsData } from './events';
import { useParams } from 'react-router-dom';

function EventDetail() {
  const { eventId } = useParams();
  // Find the event with the matching ID from the static data
  const event = eventsData.find((event) => event.id === parseInt(eventId));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <Navbar />
      <h2 style={{ paddingTop: '80px', fontFamily: 'serif', fontWeight: 'bold', color: '#365486', paddingLeft: '10px' }}>{event.description}</h2>
      <div className="photo-container" style={{ display: 'flex', paddingLeft: '10px' }}>
        {event.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Event ${event.id} Image ${index + 1}`}
            style={{ width: '50%', height: 'auto', marginRight: '10px' }} // Adjust the width and add margins
          />
        ))}
      </div>
      <div style={{ paddingLeft: '10px', paddingTop: '10px' }}>
        {React.cloneElement(event.content, { key: eventId })}
      </div>
    </div>
  );
}

export default EventDetail;
