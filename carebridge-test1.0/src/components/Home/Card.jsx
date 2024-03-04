// eslint-disable-next-line no-unused-vars
import React from 'react';
import './card.css';

export default function Card(props) {
  return (
    <div className="card-com">
      <div className="card-wrapper-sml">
        <img className="cd-img" src={props.img} alt={props.alt} />
        </div>
        <h2 className="cd-tit">{props.title}</h2>
        <p className="cd-p">{props.text}</p>
      
    </div>
  );
}
