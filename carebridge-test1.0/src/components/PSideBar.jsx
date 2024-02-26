// eslint-disable-next-line no-unused-vars
import React from 'react'
import './PSideBar.css';
import appoinment from "../assets/appoinment.svg";
import contact from "../assets/contact.svg";
import history from "../assets/history.svg";
import profile from "../assets/profile.svg";



export default function PSideBar() {
  return (
    <div className="column">
  <ul className="psidebar">
    <li>
      <div className="icon-container">
        <img src={profile} alt="profile icon" />
      </div>
      <a href="profile">Profile</a>
    </li>
    <li>
      <div className="icon-container">
        <img src={appoinment} alt="appoinment icon" />
      </div>
      <a href="appoinment">Appoinment</a>
    </li>
    <li>
      <div className="icon-container">
        <img src={contact} alt="contact icon" />
      </div>
      <a href="contact">Contact</a>
    </li>
    <li>
      <div className="icon-container">
        <img src={history} alt="history icon" />
      </div>
      <a href="history">History</a>
    </li>
  </ul>
</div>

  )
}
