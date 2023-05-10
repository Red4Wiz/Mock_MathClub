import React from 'react'
import "./index.css";

const Events = () => {
  return (
    <div className='calendar'>
      <h1>Math Club Calendar</h1>
      <iframe
        title="Google Calendar"
        src="https://calendar.google.com/calendar/embed?src=your_calendar_address_here&ctz=America%2FNew_York"
        style={{ border: '0', width: '80%', height: '600px' }}
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  )
}

export default Events
