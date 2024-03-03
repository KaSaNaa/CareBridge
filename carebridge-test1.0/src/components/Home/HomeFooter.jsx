// eslint-disable-next-line no-unused-vars
import React from 'react'
import './homefooter.css';
import locationtag from '../../assets/locationtag.svg';
import listtag from '../../assets/listtag.svg';
import mail from '../../assets/mail.svg';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import whatsapp from '../../assets/whatsapp.png'
import linkedin from '../../assets/linkedin.png'
export default function HomeFooter() {
  return (
    <>
    <div className="home-footer-main-con">
      <div className="footer-sec1">
        <h3 className="footer-heading">About us</h3>
        <p className="footer-para">
        Innovating code for seamless solutions, <br/>we bring your ideas to life with precision and efficiency.
        </p>
        <div className="footer-sml-img">
          <img className="ft-sml-img1" src={locationtag}></img>
          <p className="discribe-img">Kottawa,Pannipitiya</p>
        </div>
        <div className="footer-sml-img">
          <img className="ft-sml-img1" src={mail}></img>
          <p className="discribe-img">ddeenath@gmail.com</p>
        </div>
      </div>
      <div className="footer-sec2">
        <h3 className="footer-heading">Navigation</h3>
        <ul className="footer-list">
        <li className="ft-item"><img className="ft-icon" src={listtag}></img><a href="home" className="footer-item">Home</a></li>
        <li className="ft-item"><img className="ft-icon" src={listtag}></img><a href="contact us" className="footer-item">Contact us</a></li>
        <li className="ft-item"><img className="ft-icon" src={listtag}></img><a href="about" className="footer-item">About</a></li>
        <li className="ft-item"><img className="ft-icon" src={listtag}></img><a href="service" className="footer-item">Service</a></li>
        <li className="ft-item"><img className="ft-icon" src={listtag}></img><a href="emergency" className="footer-item">Emergency</a></li>
        </ul>
      </div>
      <div className="footer-sec3">
    <h3 className="footer-heading">Social Media</h3>
    <div className="sm-list">
    <a className="ck-icon" href="facebook"><img src={facebook} alt="facebook" className="footer-sm" /></a>
    <a className="ck-icon" href="instagram"><img src={instagram} alt="instagram" className="footer-sm" /></a>
    <a className="ck-icon" href="whatsapp"><img src={whatsapp} alt="whatsapp" className="footer-sm" /></a>
    <a className="ck-icon" href="twitter"><img src={twitter} alt="twitter" className="footer-sm" /></a>
    <a className="ck-icon" href="linkedin"><img src={linkedin} alt="linkedin" className="footer-sm" /></a>
    </div>
</div>

 </div>
 <div className="attarctive">
  
 </div>
 </>
 
  )
}
