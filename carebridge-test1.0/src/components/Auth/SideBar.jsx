import React from "react";
import styled from "styled-components";
import logo from '../../assets/logo.svg';
import Input from "./Input";
import { Link } from "react-router-dom";
import { colors } from "../../assets/colorPalette";

const SideBar = ({ formType }) => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="CareBridge-Logo" />
        <h3>
          CARE<span> BRIDGE</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>{formType === "signup" ? "Sign Up" : "Sign In"}</h3>
        {formType === "signup" ? (
          <>
            <Input id="fName" placeholder="Full Name" />
            <Input id="email" type="email" placeholder="Email Address" />
            <Input id="pswd" type="password" placeholder="Password" />
            <Input id="confirmpswd" type="password" placeholder="Confirm Password" />
          </>
        ) : (
          <>
            <Input id="email" type="email" placeholder="Email" />
            <Input id="pswd" type="password" placeholder="Password" />
          </>
        )}
        <button>{formType === "signup" ? "Sign up" : "Sign in"}</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service.
        </Terms>
        <h4>
          {formType === "signup" ? (
            <>
              Already have an account? <span><Link to={"/signin"}>Sign in</Link></span>
            </>
          ) : (
            <>
              New to CareBridge? <span><Link to={"/signup"}>Sign up</Link></span> here.
            </>
          )}
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #3c494c;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: ${colors.Prim};
    color: ${colors.onTrinity};
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
      background-color: ${colors.Ter};
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 7rem;
  }

  h3 {
    color: #006878;
    text-align: center;
  }

  span {
    color: #6d5389;
    text-align: center;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(30px);
  background-color: #e8eff1ad;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #006878;
      cursor: pointer;
    }
  }
`;

export default SideBar