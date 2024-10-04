import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string().min(2).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(8)
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  // password_confirmation: Yup.string().required().oneOf([Yup.ref('password'), null], 'Password must match')
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email'),
  password: Yup.string().min(8).required('Please enter your password')
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string().email().required('Please enter your email')
});

export const resetPasswordSchema = Yup.object({
  password: Yup.string().min(8).required('Please enter your password').matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
  password_confirmation: Yup.string().required().oneOf([Yup.ref('password'), null], 'Password must match')
});