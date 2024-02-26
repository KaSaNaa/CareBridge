import React from 'react'
import styled from 'styled-components'
import { colors } from '../../assets/colorPalette' // Assuming you have a file for colors

const SideBarButton = ({ onClick, icon, title }) => {
  return (
    <li>
      <ButtonSidebar onClick={onClick}>
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
  align-items: center;
  justify-content: left;

  border: none;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  font-weight: 350;
  transition: all 0.2s ease-in;
  color: ${colors.onSecContainer};

  height: 70px;

  &:hover {
    background: ${colors.SurfContainer_highest};
    font-weight: 400;
  }

  &.active {
    background: ${colors.secContainer};
    color: ${colors.onPrimContainer};
    transition: all 0.4s ease-in-out;
    font-weight: 500;
  }
`

const Icon = styled.div`
  margin-right: 15px;
  margin-left: 20px;
  height: 24px;
`
export default SideBarButton;
