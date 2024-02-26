import React from 'react'
import Signup from './pages/Auth/Signup.jsx';
import Signin from './pages/Auth/Signin.jsx';
import PSideBar from './components/PSideBar.jsx';
import SelectApp from './components/SelectApp.jsx';
import PAppoinment from './pages/Patient/PAppoinment.jsx';
import PInput from './components/PInput.jsx';
import MultiFilters from './components/Mulrifilter.jsx';
const App = () => {
  return (
    <div>
      {/* <Signup /> */}

      {/* <PSideBar/> */}
      <PAppoinment/>
      {/* <PInput/> */}
      
      {/* <Card/> */}
      {/* <MultiFilters/> */}

    </div>
  )
}

export default App;

