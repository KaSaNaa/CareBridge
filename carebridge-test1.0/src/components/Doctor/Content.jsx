import React from 'react';
import DashboardPage from '../../pages/Doctor/Dashboard';
import PatientsPage from '../../pages/Doctor/Patients';
import VisitsPage from '../../pages/Doctor/Visits';
import AppointmentsPage from '../../pages/Doctor/Appointments';
import styled from 'styled-components';

const Content = ({ selectedPage }) => {
  const renderPage = () => {
    switch (selectedPage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Patients':
        return <PatientsPage />;
      case 'Appointments':
        return <AppointmentsPage />;
      case 'Visits':
        return <VisitsPage />;
      default:
        // Throw an error for invalid pages
        throw new Error(`Invalid page: ${selectedPage}`);
    }
  };

  return (
    <ContentContainer>{renderPage()}</ContentContainer>
  );
}

const ContentContainer = styled.div`
    display: flex;
    padding: 20px;
`
export default Content;
