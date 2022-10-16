import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../UI/forms/Button/Button";

const MainWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 7rem);
  position: absolute;
  top: 7rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mediaQueries.small} {
    height: 100vh;
    top: 0;
  }
`;

const Text = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-green-darker);
`;

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <MainWrapper>
      <Text>ForgotPassword</Text>
      <button onClick={(e) => navigate(-1)}>Go Back</button>
    </MainWrapper>
  );
};

export default ForgotPassword;
