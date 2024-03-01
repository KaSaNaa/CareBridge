import React from "react";
import styled from "styled-components";

const ChangePswd = () => {
  return (
    <Wrapper>
      <h1>Change Password</h1>
      <Line />
      <Form>
        <Field>
          <label htmlFor="currentPswd">Current Password</label>
          <input type="password" id="currentPswd" name="currentPswd" />
        </Field>
        <Field>
          <label htmlFor="newPswd">New Password</label>
          <input type="password" id="newPswd" name="newPswd" />
        </Field>
        <Field>
          <label htmlFor="confirmPswd">Confirm Password</label>
          <input type="password" id="confirmPswd" name="confirmPswd" />
        </Field>
        <CenterButton>
          <button type="submit">Change Password</button>
        </CenterButton>
      </Form>
    </Wrapper>
  );
};

export default ChangePswd;

const Wrapper = styled.div`
  display: flex;
  font-family: "Inter";
  background-color: #ffff;
  padding: 20px;
  border-radius: 15px;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8rem;

  h1 {
    font-family: "Inter";
    color: red;
    display: flex;
    font-size: 20px;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
  background-color: red;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: 0.14px;
  background-color: red;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin-bottom: 15px;
    color: #000000;
    font-family: "Inter";
  }
  input {
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 15px;
    margin-top: 5px;
    width: 90%;
    height: 10px;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    font-family: "Inter";
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    font-family: "Inter";
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    background-color: #00bfff;
    margin-left: auto;

    &:hover {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      background-color: lightgreen;
    }
  }
`;

const Field = styled.div`
    margin: 5px;
`;

const CenterButton = styled(Field)`
    margin: auto;
`
