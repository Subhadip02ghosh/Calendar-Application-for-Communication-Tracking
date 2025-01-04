import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  return (
    <div>
      <h2>Calendar View</h2>
      <p>This is the calendar view where you can see upcoming and past communications.</p>
      <Calendar />
    </div>
  );
};

export default CalendarView;
