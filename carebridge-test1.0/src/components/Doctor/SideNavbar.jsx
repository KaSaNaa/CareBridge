// In SideNavbar.js

import React, { useState } from "react";
import styled from "styled-components";
import SideBarButton from "./SideNavBarLinks";
import { colors } from "../../assets/colorPalette";
import dashboard from "../../assets/dashboard.svg";
import patient from "../../assets/patient.svg";
import visits from "../../assets/visits.svg";
import appointments from "../../assets/appointments.svg";

const SideNavbar = ({ onSideNavBarClick }) => {
  const [activeButton, setActiveButton] = useState("Dashboard");

  const handleClick = (page) => {
    setActiveButton(page);
    onSideNavBarClick(page);
  };

  return (
    
      <SidebarBody>
        <UnorderedList>
          {makeButtons.map((btn, i) => (
            <SideBarButton
              key={i}
              onClick={() => handleClick(btn.title)}
              icon={btn.icon}
              title={btn.title}
              isActive={btn.title === activeButton}
            />
          ))}
        </UnorderedList>
      </SidebarBody>
    
  );
};

const makeButtons = [
  { icon: <img src={dashboard} alt="dashboard" />, title: "Dashboard" },
  { icon: <img src={patient} alt="patient" />, title: "Patients" },
  { icon: <img src={visits} alt="visits" />, title: "Appointments" },
  { icon: <img src={appointments} alt="appointments" />, title: "Visits" },
];



const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 0.6px;
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  display: inline-block;
  width: 100%;
`;

export default SideNavbar;
