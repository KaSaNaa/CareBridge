// In SideBarButton.js

import React from "react";
import styled from "styled-components";
import { colors } from "../../assets/colorPalette";

const SideBarButton = ({ onClick, icon, title, isActive }) => {
  return (
    <li>
      <ButtonSidebar onClick={onClick} className={isActive ? "active" : ""}>
        <Icon>{icon}</Icon>
        {title}
      </ButtonSidebar>
    </li>
  );
};

const ButtonSidebar = styled.button`
  position: relative;
  width: 100%;
  text-decoration: none;
  display: flex;
  margin:5px;
  margin-left: 0px;

  align-items: center;
  justify-content: left;
  font-size: 15px;
  border: none;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  font-weight: 600;
  transition: all 0.2s ease-in;
  color: ${colors.onSecContainer};
  height: 70px;

  &:hover {
    background: ${colors.SurfContainer_highest};
    font-weight: 400;
  }

  &.active {
    background: ${colors.Prim};
    color: ${colors.onTrinity};
    transition: all 0.4s ease-in-out;
    font-weight: 500;
  }
`;

const Icon = styled.div`
  margin-right: 15px;
  margin-left: 20px;
  height: 24px;
  background-color: ${colors.SurfContainer};
  border-radius: 5px;
`;

export default SideBarButton;
