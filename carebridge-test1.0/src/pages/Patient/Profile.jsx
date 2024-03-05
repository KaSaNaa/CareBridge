// eslint-disable-next-line no-unused-vars
import React from 'react'
import './profile.css';
// import PSideBar from '../../components/PSideBar';
// import PProfileCMP1 from '../../components/PProfileCMP1';
// import PProfileCMP2 from '../../components/PProfileCMP2';
// eslint-disable-next-line no-unused-vars
import PSideBar from '../../components/ItemComponents/PSideBar.jsx'
import PProfileCMP1 from '../../components/ItemComponents/PProfileCMP1.jsx'
import PProfileCMP2 from '../../components/ItemComponents/PProfileCMP2.jsx'

export default function Profile() {
  return (
    <div className='main-p-container'>
      {/* <div className="p-cmp-1">
      <PSideBar/>
      </div> */}
      <div className="p-cmp-2">
        <PProfileCMP1/>
      </div>
      <div className="p-cmp-3">
        <PProfileCMP2/>

      </div>

    </div>
  )
}
