// eslint-disable-next-line no-unused-vars
import React from 'react'
import Patient from './pages/Display/Patient.jsx';
import Profile from './pages/Patient/Profile.jsx';
import PProfileCMP2 from './components/PProfileCMP2.jsx';
import Mainhome from './pages/Home/MainHome.jsx'
import PAppoinment from './pages/Patient/PAppoinment.jsx';
import Changeapp from './components/Changeapp.jsx';
import Viewapp from './components/Viewapp.jsx';
import MultiFilters from './components/Multifilters.jsx';
import SelectApp from './components/SelectApp.jsx';


export default function App() {
  return (
    <div>
   
      {/* <Mainhome/> */}
      {/* <Patient/> */}
      {/* <Viewapp/>
      <Changeapp/> */}
      <PAppoinment/>
      {/* <MultiFilters/> */}
      {/* <SelectApp/> */}

      
      
    </div>
  )
}
