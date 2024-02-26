import React from "react";
import styled from "styled-components"; // Import styled-components only once
import SideBarButton from "./SideNavBarLinks";

import { colors } from "../../assets/colorPalette";
import dashboard from "../../assets/dashboard.svg";
import patient from "../../assets/patient.svg";
import visits from "../../assets/visits.svg";
import appointments from "../../assets/appointments.svg";

const SideNavbar = ({ onSideNavBarClick }) => {
  const handleClick = (page) => {
    onSideNavBarClick(page);
  };
  return (
    <SidebarWrapper>
      <SidebarBody>
        <UnorderedList>
          {makeButtons.map((btn, i) => (
            <SideBarButton
              onClick={() => handleClick(btn.title)}
              icon={btn.icon}
              title={btn.title}
              key={i}
            />
          ))}
        </UnorderedList>
      </SidebarBody>
    </SidebarWrapper>
  );
};

const makeButtons = [
  {
    icon: <img src={dashboard} alt="dashboard" />,
    title: "Dashboard",
  },
  {
    icon: <img src={patient} alt="patient" />,
    title: "Patients",
  },
  {
    icon: <img src={visits} alt="appointments" />,
    title: "Appointments",
  },
  {
    icon: <img src={appointments} alt="messages" />,
    title: "Visits",
  },
];

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: ${colors.SurfContainer};
  z-index: 2;
  transition: transform 0.3s ease-in-out;
`;

const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 20px;
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
