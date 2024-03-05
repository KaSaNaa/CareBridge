import React, { useEffect, useState } from "react";
import styled from "styled-components";
import doctorDP from "../../assets/doctor.jpg";
import { colors } from "../../assets/colorPalette";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfigs";

const DPCard = ({firstName, lastName, specialization, experience, hospitalAffiliation}) => {

  return (
    <DpCard>
      <Wrapper>
        <ProfilePic alt="dp" src={doctorDP} />
        <DoctorName>{firstName +" "+ lastName}</DoctorName>
        <DoctorField>{specialization}</DoctorField>
        <HospitalAffiliations>
          <table>
            <tbody>
              <tr>
                <Td1>Experience</Td1>
                <Td2>Hospital Affiliations</Td2>
              </tr>
              <tr>
                <Td3>{experience}</Td3>
                <Td4>{hospitalAffiliation}</Td4>
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
  background-color: ${colors.SurfBright};
  border-radius: 35px;
  padding: 20px 17px 17px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border: 3px solid ${colors.Ter};
  // how to animate border color

`;
const DoctorName = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  line-height: normal;
  color: ${colors.onPrimContainer};
  display: flex;
  margin-bottom: 10px;
  margin: 30px;
`;

const DoctorField = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.Ter};
  display: flex;
  margin-bottom: 42px;
  /* background-color: lightgrey; */
`;

const HospitalAffiliations = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  align-self: center;
  display: flex;

  table {
    width: 100%;
  }
`;

const Td1 = styled.td`
  text-align: left;
  color: ${colors.Ter};
`;
const Td2 = styled.td`
  text-align: right;
  color: ${colors.Ter};
`;

const Td3 = styled.td`
  text-align: left;
  color: ${colors.Prim};
  font-weight: 500;
`;

const Td4 = styled.td`
  text-align: right;
  color: ${colors.Prim};
  font-weight: 500;
`;

const ProfilePic = styled.img`
  height: 80px;
  width: 80px;
  object-fit: fill;
  border-radius: 50%;
  border: ${colors.Ter} solid 1px;
  background-color: black;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;
