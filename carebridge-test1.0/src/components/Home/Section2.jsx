// eslint-disable-next-line no-unused-vars
import React from 'react'
import './section2.css';
import TitleCom from './TitleCom';
import tick from '../../assets/tick.png';
import read from '../../assets/read.jpg';

export default function Com2() {
  return (
    <div className="home-com2-con">
     <div className="com2-part1">
      <TitleCom title="OUR DEPARTMENT" para="Empowering Health: Your Journey to Wellness Begins Here." /> 
     </div>
     <div className="com2-part2">
      <img className="img-read" src={read} alt="read"></img>
     </div>
     <div className="com2-part3">
      <h3 className="small-h3">About the neurology</h3>
      <p className="small-para-art">Exploring the intricate landscape 
      of the brain, our neurology department is dedicated to unraveling 
      mysteries,<br/> providing comprehensive care, and enhancing lives 
      through cutting-edge research and expertise</p>
      <table className="sml-table">
        <tr className="tr1">
          <td className='td1'><img className="img-tick" src={tick} alt="tick"></img>Care About Your Health</td>
          <td className='td1'><img className="img-tick" src={tick} alt="tick"></img>Professional Doctor’s</td>
        </tr>
        <tr className="tr2">
        <td className='td1'><img className="img-tick" src={tick} alt="tick"></img>Fast And Flex Service</td>
        <td className='td2'><img className="img-tick" src={tick} alt="tick"></img>24H Service</td>
        </tr>
      </table>
      <div className="div-btn-cls">
      <button className="sml-con-btn1">Contact Us</button>
      </div>
     </div>
    </div>
  )
}
