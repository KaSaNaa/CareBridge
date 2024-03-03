// eslint-disable-next-line no-unused-vars
import React from 'react'
import './com6.css';
import TitleCom from './TitleCom';
import Card2 from './Card2';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import speech from '../../assets/speech.png'

export default function Com6() {
  return (
    <div className="com6-main-con">
      <div className="com6-part1">
        <TitleCom title="Recent Posts" para="Explore the latest updates with our recent posts."/>
      </div>
      <div className="com6-part2">
        <Card2 sideimage={img5} alter="img5" header="Why primary treatment is important ?" icon={speech} number="5" paragraph="Primary treatment is vital for early intervention, preventing complications and fostering long-term health."/>
        <Card2 sideimage={img6} alter="img6" header="Why primary treatment is important ?" icon={speech} number="15" paragraph="Primary treatment is vital for early intervention, preventing complications and fostering long-term health."/>


      </div> 
    </div>
  )
}
