import React from "react";
import styled from "styled-components";
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
