import React from "react";
import styled from "styled-components";
import { colors } from "../../assets/colorPalette";
import addPatient from "../../assets/addPatient.svg";
import PatientTable from "../../components/Doctor/PatientTable";

const Patients = () => {
  return (
    <PatientList>
      <Header>Patient List</Header>
      <PatientListWrapper>
        <AddBtnWrapper>
          <AddNewPatient>
            <Icon>
              <img src={addPatient} width='20px' fill='#fff' alt="add new patient"></img>
            </Icon>
            <BtnText>Add New Patient</BtnText>
          </AddNewPatient>
        </AddBtnWrapper>
        <PatientTable/>
      </PatientListWrapper>
    </PatientList>
  );
};

export default Patients;

const PatientList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgreen;
`;

const Header = styled.header`
  background-color: ${colors.Prim};
  color: white;
  height: 2rem;
  font-weight: 500;
  font-size: large;
  text-align: left;
  justify-items: center;
  padding-top: 8px;
  padding-left: 10px;
`;

const PatientListWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: white;
`;

const AddBtnWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 1px;
  /* background-color: darkblue; */
  padding: 5px;
`;

const AddNewPatient = styled.button`
  padding: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 30px;
  background-color: ${colors.Prim};
  color: ${colors.onTrinity};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px transparent solid;
`;

const Icon = styled.div`
  margin: 3px;
`;

const BtnText = styled.div`
  margin: 5px;
  font-weight: 600;
  font-size: 15px;
`
