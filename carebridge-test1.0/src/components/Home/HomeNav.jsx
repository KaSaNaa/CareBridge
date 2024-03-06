import React, { useState, useEffect } from 'react';
import './homenav.css';
import call from '../../assets/call.svg';
import mail from '../../assets/mail.svg';
import whatsapp from '../../assets/whatsapp.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';

const HomeNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['Home', 'Department', 'Service', 'Specialist', 'Blog', 'Contact'];
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && scrollPos >= element.offsetTop - 60) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
  };

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
          {['Home', 'Department', 'Service', 'Specialist', 'Blog', 'Contact'].map((section) => (
            <li key={section}>
              <a href={`#${section}`} onClick={(e) => { e.preventDefault(); handleClick(section); }}>{section}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeNav;