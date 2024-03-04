// eslint-disable-next-line no-unused-vars
import React from 'react'
import './homenav.css';
import call from '../../assets/call.svg';
import mail from '../../assets/mail.svg';
import whatsapp from '../../assets/whatsapp.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import  instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';



export default function HomeNav() {
  return (
    <div className="home-nav-con">
      <div className="nav-top">
        <div className="top-nav1">
          <img src={whatsapp} alt="whatsapp"></img>
          <img src={instagram} alt="instagram"></img>
          <img src={facebook} alt="facebook"></img>
          <img src={twitter} alt="twitter"></img>
          <img src={linkedin} alt="linkedin"></img>
          
        </div>
        <div className="top-nav2">
          <div className="div-call">
          <img className="call" src={call} alt="call"></img>
          <label>+94 771837116</label>
          </div>
          <div className="div-mail">
          <img className="email" src={mail} alt="email"></img>
          <label>ddeenath@gmail.com</label>
          </div>
        </div>
          
        <div className="top-nav3">
          <button className="book-app">Appoinment</button>
          <button className="main-signin">Sign-in</button>
          <button className="main-signup">Sign-up</button>
        </div>
      </div>

      <div className="nav-bottom">
        <ul className="top-nav-list">
          <li><a href="home">Home</a></li>
          <li><a href="About">About</a></li>
          <li><a href="Department">Department</a></li>
          <li><a href="Page">Page</a></li>
          <li><a href="Block">Block</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </div>
      
    </div>
  )
}
