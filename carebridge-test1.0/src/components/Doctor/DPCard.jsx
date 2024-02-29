import React from "react";
import styled from "styled-components";
import visits from "../../assets/visits.svg";

const DPCard = () => {
  return (
    <DpCard>
      <Wrapper>
        <ProfilePic alt="dp" src={visits} />
        <DoctorName>Dr. Amanda J. Rodriguez</DoctorName>
        <DoctorField>Pediatrics</DoctorField>
        <HospitalAffiliations>
          <table>
            <tbody>
              <tr>
                <Td1>Experience</Td1>
                <Td2>Hospital Affiliations</Td2>
              </tr>
              <tr>
                <Td3>15 Years</Td3>
                <Td4>Mental Hospital</Td4>
              </tr>
            </tbody>
          </table>
        </HospitalAffiliations>
      </Wrapper>
    </DpCard>
  );
};

export default DPCard;

const DpCard = styled.div``;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 35px;
  padding: 20px 17px 17px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border: 1px solid rgba(206, 206, 206, 1);
`;
const DoctorName = styled.p`
  font-family: "Inter";
  font-size: 16px;
  background-color: lightgrey;
  font-weight: 300;
  text-align: center;
  line-height: normal;
  color: rgba(98, 98, 98, 1);
  display: flex;
  margin-bottom: 10px;
  margin: 30px;
`;
const DoctorField = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  color: rgba(123, 123, 123, 1);
  display: flex;
  margin-bottom: 42px;
  background-color: lightgrey;
`;

const HospitalAffiliations = styled.p`
  width: 100%;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: rgba(70, 205, 207, 1);
  align-self: center;
  display: flex;

  table {
    width: 100%;
  }
`;

const Td1 = styled.td`
  text-align: left;
`;
const Td2 = styled.td`
  text-align: right;
`;

const Td3 = styled.td`
  text-align: left;
  color: black;
  font-weight: 500;
`;

const Td4 = styled.td`
  text-align: right;
  color: black;
  font-weight: 500;
`;

const ExperienceYears = styled.p`
  height: 13.24%;
  width: 28.69%;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: rgba(50, 50, 50, 1);
  align-self: flex-start;
  display: flex;
`;
const ProfilePic = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: black;
  border: 3px solid #fff; /* Adjust border properties as needed */
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;
