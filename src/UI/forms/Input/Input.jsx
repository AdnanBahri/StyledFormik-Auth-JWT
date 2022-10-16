import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--color-green-light);
  border: none;
  border-radius: 2rem;
  font-weight: 500;
  color: var(--color-green-darker);

  &::placeholder {
    color: var(--color-green-darker);
  }
`;

const Error = styled.div`
  color: var(--color-error);
  position: absolute;
  padding: 0rem 2rem;
  font-weight: 500;
  font-size: 1.2rem;
  left: 0;
  bottom: 0;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "25px" : "5px")});
  transition: all 0.1s;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <Wrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Wrapper>
  );
};

export default Input;
