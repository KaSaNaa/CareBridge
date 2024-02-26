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
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const SideBarWrapper = styled.div`
  width: 100%;
`;

export default DoctorsUI;
