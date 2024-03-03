// JSX
import React from 'react';
import './com4.css';
import Group from '../../assets/Group.png';

export default function Com4() {
  return (
    <div className='com4-main-con'>
      <div className="com4-part1"> 
        <img className="img-grp" src={Group} alt="Group"></img>
        <div className="text-overlay">
          <h4 className="grp-head">Appointment Booking</h4>
          <p className="grp-para">Booking appointments is a crucial aspect of maintaining an organized and productive schedule, 
          whether for personal or professional purposes. With the advent of digital tools and online platforms, 
          the process has become more streamlined and convenient than ever before. <br/><br/>
          By leveraging various appointment booking systems, individuals and businesses can effortlessly manage their calendars, 
          coordinate with clients or colleagues, and ensure optimal use of time. From healthcare providers to salon owners, 
          efficient appointment booking not only enhances customer satisfaction but also maximizes operational efficiency.<br/><br/>Embracing technology-driven solutions allows for seamless communication, automated reminders, 
          and real-time updates, fostering smoother interactions and reducing the likelihood of scheduling conflicts. 
          In today's fast-paced world, mastering the art of appointment booking is essential for achieving productivity and success.</p>
        </div>
      </div>
      <div className="com4-part2">
        {/* Additional content for com4-part2 if needed */}
      </div>
    </div>
  )
}
