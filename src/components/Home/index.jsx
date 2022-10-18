import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { FormWrapper } from "../../shared/StyledElements";

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
`;

const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 4rem;
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  color: var(--color-white);
`;

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn, access } = useAuth();
  console.log(access);
  if (!isLoggedIn) navigate("login", { replace: true });

  return (
    <MainWrapper>
      <Container>
        <FormWrapper>
          <Heading>This is a Protected Route</Heading>
        </FormWrapper>
      </Container>
    </MainWrapper>
  );
};

export default Home;
