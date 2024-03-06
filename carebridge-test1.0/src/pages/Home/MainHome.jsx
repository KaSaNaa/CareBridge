import React from 'react'; // Don't forget to import useState
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
      <div id="Home">
        <Com1/>
      </div>
      <div id="Department">
        <Com2 />
      </div>
      <div id="Service">
        <Com3 />
        <Com4 />
      </div>
      <div id="Specialist">
        <Com5 />
      </div>
      <div id="Blog">
        <Com6 />
      </div>
      <div id='Contact'>
        <HomeFooter/>
      </div>
      
      
      
    </div>
  )
}
