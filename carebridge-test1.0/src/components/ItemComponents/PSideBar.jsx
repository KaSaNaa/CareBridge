import React from 'react';
import './PSideBar.css';
import appoinment from '../../assets/appoinment.svg';
import contact from "../../assets/contact.svg";
import history from "../../assets/history.svg";
import profile from "../../assets/profile.svg";

export default function PSideBar({ handleNavigation }) {
  return (
    <div className="column">
      <ul className="psidebar">
        <li>
          <button className='navigate-button' onClick={() => handleNavigation('profile')}>
            <img src={profile} alt="profile"></img>
            Profile
          </button>
        </li>
        <li>
          <button className='navigate-button' onClick={() => handleNavigation('appointment')}>
            <img src={appoinment} alt="appointment"></img>
            Appointment
          </button>
        </li>
        <li>
          <button className='navigate-button' onClick={() => handleNavigation('history')} >
            <img src={history} alt="history"></img>
            History
          </button>
        </li>
        <li>
          <button className='navigate-button' onClick={() => handleNavigation('contact')}>
            <img src={contact} alt="contact"></img>
            Contact
          </button>
        </li>
      </ul>
    </div>
  )
}
