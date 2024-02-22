// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import Signup from './pages/Auth/Signup.jsx';
// eslint-disable-next-line no-unused-vars
import Signin from './pages/Auth/Signin.jsx';
// eslint-disable-next-line no-unused-vars
import PSideBar from './components/PSideBar.jsx';
// eslint-disable-next-line no-unused-vars
import SelectApp from './components/SelectApp.jsx';
import PAppoinment from './pages/Patient/PAppoinment.jsx';
// eslint-disable-next-line no-unused-vars
import PInput from './components/PInput.jsx';

const App = () => {
  return (
    <div>
      {/* <Signup /> */}

      {/* <PSideBar/> */}
      <PAppoinment/>
      {/* <PInput/> */}
    </div>
  )
}

export default App;
