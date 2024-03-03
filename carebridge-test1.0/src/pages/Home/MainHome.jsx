// eslint-disable-next-line no-unused-vars
import React from 'react'
import './mainhome.css';
import HomeNav from '../../components/Home/HomeNav.jsx';
import Com1 from '../../components/Home/Com1.jsx';
import Com2 from '../../components/Home/Com2.jsx';
import Com3 from '../../components/Home/Com3.jsx';
import Com4 from '../../components/Home/Com4.jsx';
import Com5 from '../../components/Home/Com5.jsx';
import Com6 from '../../components/Home/Com6.jsx'

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
      
    </div>
  )
}
