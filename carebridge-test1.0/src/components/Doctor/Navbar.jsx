import React from "react";
import styled from "styled-components"; // Import styled-components only once
import SideBarButton from "./NavBarLinks";

import { colors } from "../../assets/colorPalette";
import dashboard from "../../assets/dashboard.svg";
import patient from "../../assets/patient.svg";
import messages from "../../assets/messages.svg";
import visits from "../../assets/visits.svg";

const Navbar = () => {
    return (
        <SidebarWrapper>
            <SidebarBody>
                <UnorderedList>
                    {makeButtons.map((btn, i) => (
                        <SideBarButton
                            to={btn.to}
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
        to: "/",
        icon: <img src={dashboard} alt="dashboard" />,
        title: "Dashboard",
    },
    {
        to: "/patients",
        icon: <img src={patient} alt="patient" />,
        title: "Patients",
    },
    {
        to: "/appointments",
        icon: <img src={visits} alt="visits" />,
        title: "Appointments",
    },
    {
        to: "/messages",
        icon: <img src={messages} alt="messages" />,
        title: "Messages",
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
  display:inline-block;
  width: 100%;
`;

export default Navbar;