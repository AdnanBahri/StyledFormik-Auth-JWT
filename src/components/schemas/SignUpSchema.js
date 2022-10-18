import * as Yup from "yup";

export const SignUpSchema =  Yup.object().shape({
    username:Yup
        .string()
        .min(3,'Too short')
        .max(25,"Too long")
        .required("The Username is Required."),
    firstName:Yup
        .string(),
        // .min(3,'Too short')
        // .max(25,"Too long")
        // .required("Your First Name is Required."),
    lastName:Yup
        .string(),
        // .min(3,'Too short')
        // .max(25,"Too long")
        // .required("Your Last Name is Required."),
    email: Yup
        .string()
        .email("Invalid email.")
        .required("The Email is Required."),
    password: Yup
        .string()
        .min(5)
        .required("The Password is Required."),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password'),null],`Password doesn't match`)
        .required("You Need to Confirm your Password."),
  });