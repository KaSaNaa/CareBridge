import React from "react";
import styled from "styled-components";

const CardComponent = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Line />
      <Description>
        {description}
      </Description>
      <Group47>
        <Edit>Edit</Edit>
      </Group47>
    </Card>
  );
};

export default CardComponent;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  color: black;
  padding: 15px;
  border-radius: 20px;
  margin: 5px;
  height: auto;
  width: 294px;
`;

const Title = styled.p`
  font-family: "Inter";
  font-size: 15px;
  font-weight: 600;
  line-height: normal;
  display: flex;
  margin-bottom: 1.71px;
  margin-left: 4px;
`;
const Line = styled.div`
  width: 99%;
  height: 2px;
  margin-bottom: 10px;
  margin-left: 0.14px;
  background-color: red;
`;
const Description = styled.p`
  max-width: 281px;
  width: 98.86%;
  height: auto;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  
  margin-bottom: 1px;
  /* letter-spacing: 0.16px; */
`;
const Group47 = styled.div`
  margin-left: 208px;
  border-radius: 8px;
  padding: 8px 23px 7px 24px;
  background-color: lightblue;
  display: flex;
  align-items: center;
`;
const Edit = styled.p`
  font-family: "Inter";
  font-size: 15px;
  font-weight: 600;
  line-height: normal;
  flex: 1;
  align-self: stretch;
  display: flex;
`;
