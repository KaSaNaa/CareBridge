import React from 'react';
import care from '../../assets/care.png';
import './titilecom.css';

export default function TitleCom(props) {
    return (
        <div className="class-wrap-heads">
        <div className="small-head">
            <h2>{props.title}</h2>
            <div className="small-para">
                <p>{props.para}</p>
            </div>
            <div className="small-footer">
                
                <div className="dev-lin"></div>
                <img className="care-img" src={care} alt="care"></img>
                <div className="dev-lin"></div>
                
            </div>
        </div>
        </div>
    );
}
