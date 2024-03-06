import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../assets/colorPalette";
import { db } from "../../config/firebaseConfigs";
import { collection, addDoc, getDocs } from "firebase/firestore";

const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    doctorEmail: "",
    patientEmail: "",
    scheduledTime: "",
  });

  // Fetch doctors data from Firestore
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsCollection = collection(db, "Doctors");
        const querySnapshot = await getDocs(doctorsCollection);
        const doctorsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit appointment data to Firestore
      const appointmentsCollection = collection(db, "Appointments");
      await addDoc(appointmentsCollection, {
        doctorEmail: formData.doctorEmail,
        patientEmail: formData.patientEmail,
        scheduledTime: new Date(formData.scheduledTime),
      });

      // Reset form data after successful submission
      setFormData({
        doctorEmail: "",
        patientEmail: "",
        scheduledTime: "",
      });

      // Optionally, display a success message to the user
      alert("Appointment submitted successfully!");
    } catch (error) {
      console.error("Error submitting appointment:", error);
      // Optionally, display an error message to the user
      alert("Error submitting appointment. Please try again later.");
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label htmlFor="doctorEmail">Doctor</label>
      <select
        id="doctorEmail"
        name="doctorEmail"
        value={formData.doctorEmail}
        onChange={handleChange}
      >
        <option value="">Select Doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.email}>
            {doctor.firstName} {doctor.lastName}
          </option>
        ))}
      </select>
      <label htmlFor="patientEmail">Patient Email</label>
      <input
        type="email"
        id="patientEmail"
        name="patientEmail"
        value={formData.patientEmail}
        onChange={handleChange}
        required
      />
      <label htmlFor="scheduledTime">Scheduled Time</label>
      <input
        type="datetime-local"
        id="scheduledTime"
        name="scheduledTime"
        value={formData.scheduledTime}
        onChange={handleChange}
        required
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormWrapper>
  );
};

export default AppointmentForm;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: auto;

  label {
    font-weight: bold;
  }

  select,
  input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid ${colors.Prim};
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: ${colors.Prim};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.PrimDark};
  }
`;
