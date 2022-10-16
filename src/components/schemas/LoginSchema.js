import * as Yup from "yup";

export const LoginSchema =  Yup.object().shape({
    email: Yup
        .string()
        .email("Invalid email.")
        .required("The Email is Required."),
    password: Yup
        .string()
        .min(5)
        .required("The Password is Required."),
  });