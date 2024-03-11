import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import DoctorsUI from "./pages/Doctor/DoctorsUI";
import MainHome from "./pages/Home/MainHome";
import { auth } from "./config/firebaseConfigs"; // Import the auth object from your firebaseConfig.js
import Aboutus from './pages/Sidepages/Aboutus.jsx'
import Patient from './pages/Display/Patient.jsx'
import ContactPage1 from "./components/SidePages/ContactPage1.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set up a listener for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update the user state when the authentication state changes
    });
    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
      <Route
          exact
          path="/DoctorDashboard"
          element={
            <DoctorsUI/>
          }
        />
        <Route
          exact
          path="/signin"
          element={
            <Auth inORup={'signin'}/>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <Auth inORup={'signup'}/>
          }
        />
        <Route
          exact
          path="/signin"
          element={!user ? <Auth inORup={"signin"} /> : <Navigate to="/signin" />}
        />
        <Route
          path="/home"
          element={<MainHome />}
        />


       
        
        <Route
          path="/aboutus"
          element={<Aboutus />}
        />

        <Route
          path="/Patient"
          element={<Patient />}
        />

        <Route
          path="/contact"
          element={<ContactPage1 />}
        />
      </Routes>
    </Router>
  );
};

export default App;
