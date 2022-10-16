import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;
  &:hover {
    border-bottom: 1px solid var(--color-white);
  }
`;

const StyledLink = styled(NavLink)`
  color: var(--color-white);
  font-weight: 700;
  font-size: 2.7rem;
  padding: 0 2rem;
`;

const Logo = ({ children }) => {
  return (
    <Wrapper>
      <StyledLink to="/">{children}</StyledLink>
    </Wrapper>
  );
};

export default Logo;
