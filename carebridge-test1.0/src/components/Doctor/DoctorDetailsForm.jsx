import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../assets/colorPalette";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebaseConfigs";

const DoctorDetailsForm = ({
  firstName,
  lastName,
  gender,
  email,
  contactNumber,
  address,
  dob,
  officeHours,
  professionalQualification,
}) => {
  // State variables
  const [editable, setEditable] = useState(false);

  // Function to save changes to Firebase
  const saveChanges = async () => {
    // try {
    //   const doctorRef = collection("doctors").doc("TQ6vymyy5F4knPsIxsu6");
    //   await doctorRef.update();
    //   setEditable(false); // Toggle back to read-only mode after saving changes
    // } catch (error) {
    //   console.error("Error saving changes: ", error);
    // }
  };
  const handleInputChange = (e) => {}

  return (
    <FormWrapper>
      <Form>
        <Field>
          <FieldName>First Name</FieldName>
          <StyledInput
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            readOnly={!editable}
          />
        </Field>

        <Field>
          <FieldName>Last Name</FieldName>
          <StyledInput
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            readOnly={!editable}
          />
        </Field>

        <Field>
          <FieldName>Gender</FieldName>
          <StyledInput
            type="text"
            name="gender"
            value={gender}
            onChange={handleInputChange}
            readOnly={!editable}
          />
        </Field>

        <Field>
          <FieldName>Email</FieldName>
          <StyledInput
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            readOnly={!editable}
          />
        </Field>

        <Field>
          <FieldName>Contact Number</FieldName>
          <StyledInput
            type="tel"
            name="contactNumber"
            value={contactNumber}
            onChange={handleInputChange}
            readOnly={!editable}
          />
        </Field>

        <Field>
          <FieldName>Address</FieldName>
          <StyledInput
            type="address"
            name="address"
            value={address}
            onChange={handleInputChange}
            readOnly={!editable}
          />
        </Field>

        <Field>
          <FieldName>Date of Birth</FieldName>
          <StyledInput
            type="date"
            name="dob"
            value={dob}
            onChange={handleInputChange}
            readOnly={!editable}
          />
        </Field>

        <Field>
          <FieldName>Office Hours</FieldName>
          <StyledInput
            type="text"
            name="officeHours"
            value={officeHours}
            onChange={handleInputChange}
            readOnly={!editable}
          />
        </Field>

        <Field>
          <FieldName>Professional Qualification</FieldName>
          <StyledInput
            type="text"
            name="professionalQual"
            value={professionalQualification}
            onChange={handleInputChange}
            readOnly={!editable}
          />
        </Field>

        <ButtonWrapper>
          {!editable && (
            <Button onClick={() => setEditable(true)}>Edit</Button>
          )}
          {editable && (
            <>
              <Button onClick={() => setEditable(false)}>Cancel</Button>
              <Button onClick={saveChanges}>Save</Button>
            </>
          )}
        </ButtonWrapper>
      </Form>
    </FormWrapper>
  );
};

export default DoctorDetailsForm;

const GenderWrapper = styled.div`
  // Add a wrapper for radio buttons
  display: flex;
  align-items: center;
`;

const FormWrapper = styled.div`
  background-color: ${colors.SurfContainer_low};
  padding: 20px; /* Add padding for spacing */
  border-radius: 10px; /* Add border radius for rounded corners */
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column; /* Change direction to column for vertical layout */
`;

const Field = styled.label`
  margin-bottom: 15px; /* Add bottom margin for spacing between labels */
  color: #000000; /* Set label text color to black */
`;

const StyledInput = styled.input`
  padding: 10px; /* Add padding for input fields */
  border: 1px solid #cccccc; /* Add border for input fields */
  border-radius: 15px; /* Add border radius for rounded corners */
  margin-top: 5px; /* Add top margin for spacing */
  width: 90%;
  height: 10px;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);

  // apply default css for input type = radio
  &[type="radio"] {
    margin-left: 50px; /* Add right margin for spacing between radio buttons */
  }
`;

const FieldName = styled.label`
  font-weight: 600;
  margin: 10px;
  margin-left: auto;
  color: ${colors.Prim};
`;

const ButtonWrapper = styled.div`
`;

const Button = styled.button``