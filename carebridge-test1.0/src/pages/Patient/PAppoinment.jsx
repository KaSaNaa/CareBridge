// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import "./pappoinment.css";
import PSideBar from '../../components/PSideBar';
import SelectApp from '../../components/SelectApp';
// eslint-disable-next-line no-unused-vars
import PInput from '../../components/PInput';
import MultiFilters from '../../components/Mulrifilter';


export default function PAppoinment() {
  const [com3Selection, setCom3Selection] = useState({'component': 'MultiFilters'})
  const loadComponent = (component) => {
    setCom3Selection(component)
    console.log('selected component:', component)
  }
  return (
    <div className="page">
      <div className="com1">
      <PSideBar/>
      </div>
      <div className="com2">
      <SelectApp/>
      </div>
      <div className="com3">
        {com3Selection.component === 'MultiFilters' && <MultiFilters handleClick={loadComponent}/>}
        {com3Selection.component === 'PInput' && <PInput handleClick={loadComponent} item={com3Selection.item}/>}
        
      </div>
      </div>
  )
}
