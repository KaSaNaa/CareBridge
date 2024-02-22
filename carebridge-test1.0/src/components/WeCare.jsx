// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const WeCare = () => {
  return (
    <Container>
      <h1>
        We Care, <br />
        Always..
      </h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #f0f0f0;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export default WeCare;
