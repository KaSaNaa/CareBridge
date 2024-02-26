import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx"; 
import DoctorsUI from "./pages/Doctor/DoctorsUI.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Auth inORup={"signup"} />} />
        <Route exact path="/DoctorDashboard" element={<DoctorsUI/>} />
        <Route exact path="/signin" element={<Auth inORup={"signin"} />} />
        <Route exact path="/signup" element={<Auth inORup={"signup"} />} />
      </Routes>
    </Router>
  );
};

export default App;