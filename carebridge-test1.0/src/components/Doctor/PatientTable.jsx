import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profilePic1 from "../../assets/doctor.jpg";
import Swal from "sweetalert2"; // Import SweetAlert library

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebaseConfigs";
import { colors } from "../../assets/colorPalette";

const PatientTable = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      const querySnapshot = await getDocs(collection(db, "Patients"));
      const patientData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPatients(patientData);
    };

    getPatients();
  }, []);

  // const handleEdit = (patient) => {
  //   // Show confirmation message
  //   Swal.fire({
  //     title: "Edit Patient",
  //     text: `Edit details for ${patient.name}?`,
  //     icon: "question",
  //     showCancelButton: true,
  //     confirmButtonText: "Edit",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Implement edit functionality here
  //       // You can redirect to an edit page or show a modal for editing
  //       console.log("Editing patient:", patient);
  //     }
  //   });
  // };

  const handleDelete = (patient) => {
    // Show confirmation message
    Swal.fire({
      title: "Delete Patient",
      text: `Are you sure you want to delete ${patient.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Implement delete functionality here
        try {
          await deleteDoc(doc(db, "Patients", patient.id));
          // Update state to remove the deleted patient
          setPatients(patients.filter((p) => p.id !== patient.id));
          Swal.fire("Deleted!", "The patient has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting patient:", error);
          Swal.fire("Error", "Failed to delete the patient.", "error");
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
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Gender</TableHeader>
            <TableHeader>Blood Type</TableHeader>
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
              <TableCell>{patient.name}</TableCell>
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
