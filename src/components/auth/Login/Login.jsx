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
import { LoginSchema } from "../../schemas/LoginSchema";
import { Link, NavLink, useNavigate } from "react-router-dom";

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
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 5rem;
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

const Login = () => {
  let navigate = useNavigate();
  const onSubmit = (values, state) => {
    console.log("values", values);
    console.log("state", state);
  };
  return (
    <MainWrapper>
      <Container>
        <FormWrapper>
          <Heading>Welcome Back Login</Heading>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit
          >
            {(props) => (
              <StyledForm>
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
                <FieldContainer>
                  <label htmlFor="rm">
                    <Field type="checkbox" name="rm" />
                    <span>Remember Me</span>
                  </label>
                  <ForgotPassword onClick={(e) => navigate("forgot-password")}>
                    Forgot Password?
                  </ForgotPassword>
                </FieldContainer>
                <Button isSubmitting={props.isSubmitting}>Submit</Button>
              </StyledForm>
            )}
          </Formik>
        </FormWrapper>
      </Container>
    </MainWrapper>
  );
};

export default Login;
