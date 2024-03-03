import React from 'react';
import './card1.css';


export default function Card1(props) {
  return (
    <div className="card1-com">
        <img className='card1-img' src={props.image} alt={props.alt} />
        <h3 className="img-name">{props.name}</h3>
        <div className="decoy"></div>
        <h4 className='degree'>{props.degree}</h4>
        <p className="department">{props.department}</p>
    </div>
  );
}
