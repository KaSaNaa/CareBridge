// eslint-disable-next-line no-unused-vars
import React from 'react'
import './com5.css';
import TitleCom from './TitleCom';
import Card1 from './Card1.jsx';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

export default function Com5() {
  return (
    <div className="com5-main-con">
      <div className="com5-part1">
        <TitleCom title="OUR SPECIALIST" para="Expert care delivered by our highly trained specialists."/>

      </div>
      <div className="com5-part2">
      <Card1 image={img1} alt="image1" name="Dr. Golden Ramsy" degree="MBBS MS" department="Department of Heart"/>
      <Card1 image={img2} alt="image2" name="Dr. Anjelina Rossy" degree="MBBS MS" department="Department of cardiology"/>
      <Card1 image={img3} alt="image3" name="Dr. Ann Miller" degree="MBBS MS" department="Department of Eye"/>
      </div>
      <div className="com5-part3">
      <h4 className='special-head'>Expertise in Care</h4>
      <p className="special">Introducing Our Specialist Doctors

In the realm of healthcare, the role of specialist doctors is paramount, serving as pillars of expertise and compassion in their respective fields. At our institution, we take pride in presenting a cadre of highly trained and dedicated specialists, each possessing a unique blend of skill, knowledge, and empathy.

<br/><br/>Meet Dr. Golden Ramsy, a distinguished figure in the Department of Heart. With a wealth of experience and a tireless commitment to patient care,<br/> <br/>Dr. Ramsy brings precision and innovation to the treatment of cardiovascular ailments. Patients under his care not only receive top-notch medical attention but also find solace in his reassuring demeanor.

In the Department of Cardiology,<br/> <br/>we have the esteemed presence of Dr. Anjelina Rossy. Renowned for her comprehensive approach and unwavering dedication, Dr. Rossy combines clinical expertise with a compassionate touch. Her holistic approach ensures that patients receive personalized care tailored to their unique needs.

Stepping into the realm of ophthalmology,<br/> <br/>we introduce Dr. Ann Miller. A beacon of excellence in the Department of Eye, Dr. Miller's expertise extends beyond technical proficiency to fostering a nurturing environment for her patients. Whether addressing routine check-ups or complex surgeries, her patients entrust their vision to her skilled hands with confidence.

These specialist doctors exemplify our commitment to delivering exceptional healthcare with a human touch. Their unwavering dedication, coupled with cutting-edge medical advancements, ensures that each patient receives the highest standard of care. At our institution, we stand by our promise to provide expert care delivered by highly trained specialists, guiding our patients on their journey towards wellness and vitality.</p>
      </div>
    </div>
  )
}
