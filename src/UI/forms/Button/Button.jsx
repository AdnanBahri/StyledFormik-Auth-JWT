import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  margin-top: 2rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  color: var(--color-white);
  letter-spacing: 0.15rem;
  font-weight: 700;
  box-shadow: 0rem 0.5rem 3.5rem var(--color-black);
  background-color: var(--color-green-dark);
  border: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({ children, isSubmitting }) => {
  return (
    <StyledButton disabled={isSubmitting} type="submit">
      {children}
    </StyledButton>
  );
};

export default Button;
