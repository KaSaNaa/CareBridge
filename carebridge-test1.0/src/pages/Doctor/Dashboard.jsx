import React from "react";
import styled from "styled-components";
import { colors } from "../../assets/colorPalette";
import DPCard from "../../components/Doctor/DPCard";
import DetailswithTitleCard from "../../components/Doctor/DetailswithTitleCard";
import DoctorDetailsForm from "../../components/Doctor/DoctorDetailsForm";
import ChangePswd from "../../components/Doctor/ChangePswd";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Header>Profile Information</Header>
      <ColumnWrapper>
        <div className="col1">
          <DPCard />
          <DetailswithTitleCard
            title={"Biography"}
            description={
              "Dr. Pasindu Ranawakage is a Cardiologist with 10 years of experience. He is affiliated with XYZ Hospital."
            }
          />
          <DetailswithTitleCard
            title={"Specialization"}
            description={
              <span>
                <li>MBBS</li>
                <li>MD</li>
                <li>Dip. in Psychology</li>
              </span>
            }
          />
        </div>
        <div className="col2">
          <DoctorDetailsForm/>
        </div>
        <div className="col3">
          <ChangePswd/>
        </div>
      </ColumnWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;

const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  color: aliceblue;
  background-color: ${colors.Prim};
  align-items: end;
  padding: 10px;
  border-radius: 10px 0px 0px 0px;
`;

const DashboardWrapper = styled.div`
  top: 10%;
  height: 100%;
  padding: 0px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  margin: 8px;
  width: 99%;

  .col1,
  .col2,
  .col3 {
    width: 99%;
    padding: 1rem;
    background-color: ${colors.SurfContainer_low};
    border: 1px  solid #ddd;
    color: white;
    border-radius: 10px;
  }

  .col1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
