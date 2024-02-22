// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./pappoinment.css";
import PSideBar from '../../components/PSideBar';
import SelectApp from '../../components/SelectApp';
import PInput from '../../components/PInput';


export default function PAppoinment() {
  return (
    <div className="page">
      <div className="com1">
      <PSideBar/>
      </div>
      <div className="com2">
      <SelectApp/>
      </div>
      <div className="com3">
        <PInput/>
      </div>
      
      </div>
      
    
  )
}
