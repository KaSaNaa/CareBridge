import React, { useState } from 'react';
import "./pappoinment.css";
import SelectApp from '../../components/ItemComponents/SelectApp.jsx'
import PInput from '../../components/ItemComponents/PInput.jsx'
import Multifilters from '../../components/ItemComponents/Multifilters.jsx'
import Viewapp from '../../components/ItemComponents/Viewapp.jsx'
import Changeapp from '../../components/ItemComponents/Changeapp.jsx'


export default function PAppoinment() {

  const[selectedAppointment, setSelectedAppointment] = useState(null);
  const[selectedDoctor, setSelectedDoctor] = useState(null);
  const[displayMultifilters, setDisplayMultifilters] = useState(true);

  const handleAppointment = (appointmentType) => {
     setSelectedAppointment(appointmentType);
  };

  const handleDoctorSelection = (item)=> {
    console.log("Selected Doctor: ", item);
    setSelectedDoctor(item);
    if (item.component === 'PInput') {
      console.log("Navigating to PInput...");
      setSelectedAppointment('book-appointment');
      setDisplayMultifilters(false);
    }
  };

  const handleBack = () => {
    setSelectedDoctor(null);
    setSelectedAppointment(null);
    setDisplayMultifilters(true);
  };

  const renderAppointmentComponent = () =>{
    switch (selectedAppointment) {
      case 'book-appointment':
        return displayMultifilters ? <Multifilters handleClick={handleDoctorSelection}/> : null;
      case 'change-appointment':
        return <Changeapp/>;
      case 'view-appointment':
        return <Viewapp />;
      default:
        return <Multifilters handleClick={handleDoctorSelection}/>;
    }
  };
  
  console.log("Selected Appointment: ", selectedAppointment);
  console.log("Selected Doctor: ", selectedDoctor);
  
  return (
    <div className="page">
      <div className="com1">
        <SelectApp handleAppointment={handleAppointment}/>
      </div>
      <div className="com2">
        {renderAppointmentComponent()}
        {selectedDoctor && selectedDoctor.component === 'PInput' && selectedAppointment === 'book-appointment' && <PInput item={selectedDoctor.item} />}
        {selectedAppointment && <button className ='back-button' onClick={handleBack}>Back</button>}
      </div>
    </div>
  );
}
