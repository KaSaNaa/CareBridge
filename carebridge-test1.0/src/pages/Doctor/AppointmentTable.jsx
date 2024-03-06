import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../assets/colorPalette";
import { db } from "../../config/firebaseConfigs";
import { collection, query, where, getDocs } from "firebase/firestore";

const DoctorAppointments = ({ doctorUid }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsCollection = collection(db, "Appointments");
        const appointmentsQuery = query(
          appointmentsCollection,
          where("doctorUid", "==", doctorUid)
        );
        const querySnapshot = await getDocs(appointmentsQuery);
        const appointmentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(appointmentsData);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [doctorUid]);

  return (
    <AppointmentsWrapper>
      <h2>Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <strong>Patient Email:</strong> {appointment.patientEmail},{" "}
              <strong>Scheduled Time:</strong>{" "}
              {new Date(appointment.scheduledTime.toDate()).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </AppointmentsWrapper>
  );
};

export default DoctorAppointments;

const AppointmentsWrapper = styled.div`
  margin-top: 20px;

  h2 {
    color: ${colors.Prim};
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }
`;
