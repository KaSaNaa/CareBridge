import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autoComplete="off"
      />
      <Status />
    </Container>
  );
};

const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #ffffff;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  color: #4f6354;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:focus + & {
    background: #ffb4ab;
  }
  ${StyledInput}:invalid + & {
    background: #ba1a1a;
  }
  ${StyledInput}:valid + & {
    background: #6d53d9;
  }
`;

export default Input;
