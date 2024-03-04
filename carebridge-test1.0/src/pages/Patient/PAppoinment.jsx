import React, { useState } from 'react';
import "./pappoinment.css";
import SelectApp from '../../components/SelectApp';
import PInput from '../../components/PInput';
import Multifilters from '../../components/Multifilters.jsx';
import Viewapp from '../../components/Viewapp.jsx';
import Changeapp from '../../components/Changeapp';


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
      </div>
    </div>
  );
}
