// eslint-disable-next-line no-unused-vars
import React from 'react'
import './mainhome.css';
import HomeNav from '../../components/Home/HomeNav.jsx';
import Com1 from '../../components/Home/Section1.jsx';
import Com2 from '../../components/Home/Section2.jsx';
import Com3 from '../../components/Home/Section3.jsx';
import Com4 from '../../components/Home/Section4.jsx';
import Com5 from '../../components/Home/Section5.jsx';
import Com6 from '../../components/Home/Section6.jsx';
import HomeFooter from '../../components/Home/HomeFooter';

export default function MainHome() {
  return (
    <div className="temp">
      <HomeNav/>
      <Com1/>
      <Com2/>
      <Com3/>
      <Com4/>
      <Com5/>
      <Com6/>
      <HomeFooter/>

      
    </div>
  )
}
