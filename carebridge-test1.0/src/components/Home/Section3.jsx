// eslint-disable-next-line no-unused-vars
import React from 'react'
import './section3.css';
import TitleCom from './TitleCom.jsx';
import Card from './Card.jsx';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
import icon7 from '../../assets/icon7.png';
import icon8 from '../../assets/icon8.png';

export default function Com3() {
  return (
    <div className="com3-main-con">
      <div className="com3-part1">
        <TitleCom title="OUR SERVICE" para="Precision care, profound impact – your health, our priority"/>
      </div>
      <div className="com3-part2-main">
      <div className="com3-part2">
        <Card img={icon6} title="Consulting" text="Expert advice at your fingertips online simplicity"/>
        <Card img={icon4} title="Dental care" text="Smile brighter with our comprehensive dental care."/>
        <Card img={icon2} title="Emergency Service" text="Urgent help when every second counts most."/>
        <Card img={icon7} title="Test" text="Accurate diagnostics for informed and proactive care."/>
        </div>
        <div className="com3-part2">
        <Card img={icon1} title="Diabetic Tests" text="Precision testing for diabetes management and awareness."/>
        <Card img={icon5} title="24/7 Support" text="Always here for you with 24/7 service."/>
        <Card img={icon8} title="General Treatment" text="Comprehensive care for your well-being, tailored to you."/>
        <Card img={icon3} title="Free Checkup" text="Receive a complimentary health checkup for free."/>
        </div>
        </div>
      
      
    </div>
  )
}
