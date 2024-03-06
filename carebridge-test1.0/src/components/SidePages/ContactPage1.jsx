// eslint-disable-next-line no-unused-vars
import React from 'react'
import './contact1.css'
import Cicon1 from '../../assets/Cicon1.svg';
import Cicon2 from '../../assets/Cicon2.svg';
import Cicon3 from '../../assets/Cicon3.svg';
import Cicon4 from '../../assets/Cicon4.svg';
import { Link } from 'react-router-dom';



export default function ContactPage1() {
  return (
    <div className="div-contact-main">
      <div className='contact1-main-cont'>
        <div className="contact1-sub-part1">
            <h1 className="contactus-head">CONTACT US</h1>
            <h3 className='small-contactus-head'>Lets meet together</h3>
        </div>
    </div>



    <div className="contact-main-cont2">

      <div className="con2-sub1">
        
          <h2 className="sub1-heading">Contact Us</h2>
          <p className="sub1-para">Feel free to get in touch with us! Whether you have questions, feedback, or inquiries, we're here to help.<br/>
           Our team is dedicated to providing you with the best possible assistance. You can reach us via email, phone, or by filling out the contact form below.<br/>
           We appreciate your interest and look forward to hearing from you!</p>
  
      </div>


        <div className="left-mid-sub2">

          

          <div className="mid-mid-mid">
            <img src={Cicon2} alt="icon1" className="contact-icon" />
            <h3 className="Cicon-topic">Address</h3>
            <p className="Cicon-para">Street NAme<br/>Building 85,<br/> 12345, Colombo</p>
            </div>

            <div className="mid-mid-mid">
            <img src={Cicon1} alt="icon1" className="contact-icon" />
            <h3 className="Cicon-topic">Phone</h3>
            <p className="Cicon-para">+94 01234566<br/>+94 1234567<br/>+94 98012345</p>
          </div>

        </div>  

          

          <div className="left-mid-sub2">

            <div className="mid-mid-mid">
            <img src={Cicon3} alt="icon1" className="contact-icon" />
            <h3 className="Cicon-topic">Email</h3>
            <p className="Cicon-para">Deenath@gmail.com<br/>Deenath@gmail.com<br/>dj_best@gmail.com</p>
            </div>

            <div className="mid-mid-mid">
            <img src={Cicon4} alt="icon1" className="contact-icon" />
            <h3 className="Cicon-topic">24H Open</h3>
            <p className="Cicon-para">We are<br/>Open every<br/>god damn day</p>
            </div>

          </div>
    </div>

    <Link to='/home'><button className="contact-fin-btn">Back to home page</button></Link>



    </div>
    
  )
}
