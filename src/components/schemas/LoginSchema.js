import * as Yup from "yup";

export const LoginSchema =  Yup.object().shape({
    username: Yup
        .string()
        .min(3,'Too Short')
        .max(25,'Too long')
        .required("The Username is Required."),
    password: Yup
        .string()
        .min(5)
        .required("The Password is Required."),
  });