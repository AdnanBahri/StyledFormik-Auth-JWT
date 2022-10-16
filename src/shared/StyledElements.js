import { Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 4rem;
    max-width: 80rem;
`

export const FormWrapper = styled.div`
    width: 100%;
    border-radius: 1rem;
    padding: 8rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-black);
    box-shadow: 0rem .5rem 3.5rem var(--color-grey);
`

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 45rem;
`

export const ForgotPassword = styled.div`
    color: var(--color-green-light);
    font-weight: 500;
    font-size: 1.3rem;
    cursor: pointer;
`