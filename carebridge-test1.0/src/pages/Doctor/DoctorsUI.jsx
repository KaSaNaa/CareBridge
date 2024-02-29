import React, { useState } from "react";
import styled from "styled-components";
import SideNavBar from "../../components/Doctor/SideNavbar";
import Content from "../../components/Doctor/Content";

const DoctorsUI = () => {
  // State to manage the selected page
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  // Function to handle sidebar button click
  const handleSideNavBarClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <DoctorUIContainer>
      <SideBarWrapper>
        {/* Pass the handleSideNavClick function to SideNavBar */}
        <SideNavBar onSideNavBarClick={handleSideNavBarClick} />
      </SideBarWrapper>
      {/* Pass the selectedPage state to Content */}
      <ContentWrapper>
        <Content selectedPage={selectedPage} />
      </ContentWrapper>
    </DoctorUIContainer>
  );
};

const DoctorUIContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SideBarWrapper = styled.div`
  width: 250px; // Adjust as needed
`;

const ContentWrapper = styled.div`
  flex: 1; // Take remaining space
  overflow-y: auto;  // Enable vertical scrolling if content exceeds height
  overflow-x: auto;
  max-width: calc(100% - 250px); // Subtract sidebar width // Push content to the right: ;
`;

export default DoctorsUI;
