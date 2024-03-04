// SelectApp.jsx
import React from 'react';
import "./selectApp.css";

export default function SelectApp({ handleAppointment }) {
  return (
    <div className="select-app">
      <header className="head-app">Appointment</header>
      <ul className="app-ul">
        <li><button className='appoin-button'  onClick={() => handleAppointment('book-appointment')}>Book Appointment</button></li>
        <li><button  className='appoin-button' onClick={() => handleAppointment('change-appointment')}>Change Appointment</button></li>
        <li><button  className='appoin-button' onClick={() => handleAppointment('view-appointment')}>View Appointment</button></li>
      </ul>
    </div>
  );
}
