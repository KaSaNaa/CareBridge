import React from 'react'
import './card2.css';
import img5 from '../../assets/img5.jpg'
import speech from '../../assets/speech.png';

export default function Card2(props) {
  return (
    <div className="card2-con">
      <img className="card2-img" src={props.sideimage} alt={props.alter}></img>
      <div className="document-sec">
      <h2 className='card2-head'>{props.header}</h2>
      <div className="card2-mid">
      <img className='card2-img2' src={props.icon}></img>
      <p className='card2-mid-para'>{props.number}</p>
      </div>
      <p className="card2-para">{props.paragraph}</p>
    </div>
    </div>
  )
}
