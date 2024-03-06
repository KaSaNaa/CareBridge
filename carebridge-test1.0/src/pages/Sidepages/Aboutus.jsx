import React from 'react'
import './aboutus.css';
import AboutusCMP1 from '../../components/SidePages/AboutusCMP1';
import AboutusCMP2 from '../../components/SidePages/AboutusCMP2';
import AboutHead from '../../components/SidePages/AboutHead';
import { Link, Navigate } from 'react-router-dom';


export default function Aboutus() {
  return (
    <div className='combine-about'>
      <AboutHead/>
        <AboutusCMP1/>
        <AboutusCMP2/>

        <Link to='/home'><button className="back-home">Back to home</button></Link>
      
    </div>
  )
}
