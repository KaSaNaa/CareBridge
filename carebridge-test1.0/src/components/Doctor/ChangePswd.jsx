import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../assets/colorPalette";
import { updateUserPassword } from "../../config/firebaseConfigs";

const ChangePswd = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "newPswd") {
      setNewPassword(value);
    } else if (name === "confirmPswd") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Call the updatePassword function with the new password
    updateUserPassword(newPassword);
  };

  return (
    <Wrapper>
      <h1>Change Password</h1>
      <Line />
      <Form onSubmit={handleSubmit}>
        <Field>
          <label htmlFor="newPswd">New Password</label>
          <input
            type="text"
            id="newPswd"
            name="newPswd"
            value={newPassword}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <label htmlFor="confirmPswd">Confirm Password</label>
          <input
            type="text"
            id="confirmPswd"
            name="confirmPswd"
            value={confirmPassword}
            onChange={handleChange}
          />
        </Field>
        <CenterButton>
          <PswdBtn type="submit">Change Password</PswdBtn>
        </CenterButton>
      </Form>
    </Wrapper>
  );
};

export default ChangePswd;

// Styled components remain the same


const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 270px;
  .save,
  .cancel,
  .edit {
    margin: 10px;
    padding: 10px;
    padding-left: 14px;
    padding-right: 15px;
    color: ${colors.onTrinity};
    border-radius: 10px;
    border: 0 transparent;
  }

  .save{
    background-color: ${colors.Prim};
  }

  .cancel{
    background-color: ${colors.Surf};
    color: ${colors.Prim};
    border: 1px ${colors.Prim} solid;
  }

  .edit{
    background-color: ${colors.Ter};
  }
`;

const PswdBtn = styled.button`
  width: 75%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 1rem 0;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  background-color: ${colors.onErrContainer};
  color: ${colors.onTrinity};
  margin-left: auto;

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background-color: ${colors.Err};
  }
`;

const Button = styled.button``

const BtnText = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  flex: 1;
  align-self: stretch;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.SurfContainer_low};
  padding: 20px;
  border-radius: 15px;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8rem;

  h1 {
    color: ${colors.Prim};
    display: flex;
    font-size: 20px;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
  background-color: ${colors.Prim};
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: 0.14px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin-bottom: 15px;
    color: #000000;
  }
  input {
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 15px;
    margin-top: 5px;
    width: 90%;
    height: 10px;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  }
`;

const Field = styled.div`
  margin: 5px;
`;

const CenterButton = styled(Field)`
  margin: auto;
`;
