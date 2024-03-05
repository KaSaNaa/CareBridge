import React from 'react';
import './PSideBar.css';
import appoinment from '../../assets/appoinment.svg';
import contact from "../../assets/contact.svg";
import history from "../../assets/history.svg";
import profile from "../../assets/profile.svg";

export default function PSideBar({ handleNavigation, selectedPage }) {
  return (
    <div className="column">
      <ul className="psidebar">
        <li>
          <button className={`navigate-button ${selectedPage === 'profile' ? 'selected' : ''}`} onClick={() => handleNavigation('profile')}>
            <img className="icon-fill" src={profile} alt="profile"></img>
            Profile
          </button>
        </li>
        <li>
          <button className={`navigate-button ${selectedPage === 'appointment' ? 'selected' : ''}`} onClick={() => handleNavigation('appointment')}>
            <img className="icon-fill" src={appoinment} alt="appointment"></img>
            Appointment
          </button>
        </li>
        <li>
          <button className={`navigate-button ${selectedPage === 'history' ? 'selected' : ''}`} onClick={() => handleNavigation('history')} >
            <img className="icon-fill" src={history} alt="history"></img>
            History
          </button>
        </li>
        <li>
          <button className={`navigate-button ${selectedPage === 'contact' ? 'selected' : ''}`} onClick={() => handleNavigation('contact')}>
            <img className="icon-fill" src={contact} alt="contact"></img>
            Contact
          </button>
        </li>
      </ul>
    </div>
  )
}
