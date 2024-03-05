import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profilePic1 from "../../assets/doctor.jpg";
import Swal from "sweetalert2"; // Import SweetAlert library

import { collection, getDocs, deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfigs";
import { colors } from "../../assets/colorPalette";

const PatientTable = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      const doctorId = 'TQ6vymyy5F4knPsIxsu6'; // replace with your doctor id
      const querySnapshot = await getDocs(collection(doc(db, "Doctors", doctorId), "patientList"));

      const patientData = [];
      for (const docRef of querySnapshot.docs) {
        const patientId = docRef.data().UID;
        const patientSnapshot = await getDoc(doc(db, "Patients", patientId));
        const patient = { id: patientId, ...patientSnapshot.data() };
        patientData.push(patient);
      }

      setPatients(patientData);
    };

    getPatients();
  }, []);

  const handleDelete = (patient) => {
    // Show confirmation message
    Swal.fire({
      title: "Remove Patient",
      text: `Are you sure you want to remove ${patient.id}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Implement delete functionality here
        try {
          await deleteDoc(doc(db, "Doctors/TQ6vymyy5F4knPsIxsu6/patientList/", patient.id));
          // Update state to remove the deleted patient
          setPatients(patients.filter((p) => p.id !== patient.id));
          Swal.fire("Removed!", "The patient has been removed.", "success");
        } catch (error) {
          console.error("Error removing patient:", error);
          Swal.fire("Error", "Failed to remove the patient.", "error");
        }
      }
    });
  };

  return (
    <TableWrapper>
      <Table>
        <TableHead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Pic</TableHeader>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>Mobile</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Gender</TableHeader>
            <TableHeader>Blood Type</TableHeader>
            <TableHeader></TableHeader>
            <TableHeader>Actions</TableHeader> {/* Add Actions header */}
          </tr>
        </TableHead>
        <tbody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.id}</TableCell>
              <TableCell>
                <ProfilePic src={profilePic1} alt="Profile Picture" />
              </TableCell>
              <TableCell>{patient.fName}</TableCell>
              <TableCell>{patient.lName}</TableCell>
              <TableCell>{patient.mobile}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.bloodtype}</TableCell>
              <TableCell>
                <Button className="del" onClick={() => handleDelete(patient)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default PatientTable;


const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin: 1px 0;
  font-size: 0.9rem;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const TableHead = styled.thead`
  background-color: ${colors.Ter};
  color: white;
  text-align: left;
`;

const TableHeader = styled.th`
  padding: 12px 15px;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: ${colors.SurfContainer_low};
  }

  &:last-of-type {
    border-bottom: 2px solid ${colors.Ter};
  }

  &.active-row {
    font-weight: bold;
    color: #009879;
  }
`;

const TableCell = styled.td`
  padding: 12px 15px;
  .del{
    background-color: ${colors.Err};
    &:hover {
    background-color: red;
  }
  }
`;

const ProfilePic = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

const Button = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  background-color: ${colors.onSecContainer};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.Prim};
  }
`;
