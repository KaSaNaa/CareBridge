import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth.jsx'; // Add missing import statement for Auth component
import DoctorDashboard from './pages/Doctor/DashboardPage.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Auth inORup={"signup"} />} /> */}
        <Route exact path="/" element={<DoctorDashboard />} />

        <Route exact path="/signin" element={<Auth inORup={"signin"} />} />

        <Route exact path="/signup" element={<Auth inORup={"signup"} />} />
      </Routes>
    </Router>
  );
};

export default App;