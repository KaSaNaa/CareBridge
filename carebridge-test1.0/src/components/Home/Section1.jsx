// Section1.jsx (Com1)
import React from 'react';
import './section1.css';
import { Link } from 'react-router-dom';

export default function Com1() {
  

  return (
    <div className="home-com1-con">
      <div className="com1-part1">
        <h1 className="smh1">WE CARE ABOUT <br/>YOUR <span className="highlight">HEALTH</span></h1>
      </div>
      <div className="com1-part2">
        <Link to='/aboutus'><button className="btn-abt">About Us</button></Link>
        <Link to='/contact'><button className="btn-con">Contact Us</button></Link>
      </div>
    </div>
  );
}
