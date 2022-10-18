import React from "react";
import styled from "styled-components";
import {
  Container,
  FormWrapper,
  StyledForm,
  ForgotPassword,
} from "../../../shared/StyledElements";
import Input from "../../../UI/forms/Input/Input";
import { Field, Formik } from "formik";
import Button from "../../../UI/forms/Button/Button";
import { SignUpSchema } from "../../schemas/SignUpSchema";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { register } from "../../../shared/AuthServices";

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

const Heading = styled.div`
  font-size: 2.1rem;
  font-weight: 500;
  color: var(--color-white);
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
`;

const Heading1 = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 3rem;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;

  span {
    color: var(--color-green-light);
    font-weight: 500;
    font-size: 1.3rem;
    margin-left: 1rem;
    letter-spacing: 0.1rem;
  }
`;

const SignUp = () => {
  let navigate = useNavigate();
  const onSubmit = async (values, state) => {
    const response = await register(values);
    console.log("Log From SignUp", response);
  };
  return (
    <MainWrapper>
      <Container>
        <FormWrapper>
          <Heading>Sign Up for an account</Heading>
          <Heading1>Fill in your details to register your new account</Heading1>
          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <StyledForm>
                <Field
                  type="text"
                  name="username"
                  placeholder="Enter your Username"
                  component={Input}
                />
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Enter your First Name"
                  component={Input}
                />
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Enter your Last Name"
                  component={Input}
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  component={Input}
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  component={Input}
                />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Password Confirmation"
                  component={Input}
                />
                <Button isSubmitting={false}>Submit</Button>
              </StyledForm>
            )}
          </Formik>
        </FormWrapper>
      </Container>
    </MainWrapper>
  );
};

export default SignUp;
