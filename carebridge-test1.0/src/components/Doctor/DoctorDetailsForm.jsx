import React from "react";
import styled from "styled-components";

const DoctorDetailsForm = () => {
  return (
    <FormWrapper>
      <Form>
        <Field>
          <FieldName>First Name</FieldName>
          <StyledInput type="text" name="name" />
        </Field>

        <Field>
          <FieldName>Last Name</FieldName>
          <StyledInput type="text" name="name" />
        </Field>

        <Field>
          <FieldName>Gender</FieldName>
          <GenderWrapper>
            <StyledInput type="radio" id="male" name="gender" value="male" />
            <RadioLabel htmlFor="choice1">Male</RadioLabel>
            <StyledInput
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
            <RadioLabel htmlFor="choice2">Female</RadioLabel>
          </GenderWrapper>
        </Field>

        <Field>
          <FieldName>Email</FieldName>
          <StyledInput type="email" name="email" />
        </Field>

        <Field>
          <FieldName>Contact Number</FieldName>
          <StyledInput type="tel" name="contact" />
        </Field>

        <Field>
          <FieldName>Address</FieldName>
          <StyledInput type="address" name="address" />
        </Field>

        <Field>
          <FieldName>Date of Birth</FieldName>
          <StyledInput type="date" name="dob" />
        </Field>

        <Field>
          <FieldName>Office Hours</FieldName>
          <StyledInput type="Text" name="hours" />
        </Field>

        <Field>
          <FieldName> Professional Qualification </FieldName>
          <StyledInput type='text' name="Professional Qualification"/> 
        </Field>
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
  background-color: #ffffff; /* Set background color to white */
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
  font-family: "Inter";

  // apply default css for input type = radio
  &[type="radio"] {
    margin-left: 50px; /* Add right margin for spacing between radio buttons */
  }
`;

const FieldName = styled.label`
  font-weight: 600;
  margin: 10px;
  margin-left: auto;
  font-family: "Inter";
`;

const RadioLabel = styled.label`
  margin: 10px;
  margin-right: 50px;
  color: grey;
  font-weight: 400;
  font-family: "Inter";
`;
