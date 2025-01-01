import * as yup from 'yup'
export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[a-zA-Z]+$/, 'First name should only contain alphabets'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[a-zA-Z]+$/, 'Last name should only contain alphabets'),
  userName: yup
    .string()
    .required('Username is required')
    .min(8, 'Username must be at least 8 characters')
    .max(32, 'Username must be no more than 32 characters')
    .matches(/[A-Za-z]/, 'Username must include at least one letter')
    .matches(/\d/, 'Username must include at least one number')
    .matches(/^[a-zA-Z0-9]+$/, 'Username cannot include special characters'),

  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(
      /[^A-Za-z0-9]/,
      'Password must contain at least one special character'
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
})

export const validateLogin = yup.object().shape({
  userName: yup
    .string()
    .required('Username is required')
    .min(8, 'Username must be at least 8 characters')
    .max(32, 'Username must be no more than 32 characters')
    .matches(/[A-Za-z]/, 'Username must include at least one letter')
    .matches(/\d/, 'Username must include at least one number')
    .matches(/^[a-zA-Z0-9]+$/, 'Username cannot include special characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(
      /[^A-Za-z0-9]/,
      'Password must contain at least one special character'
    ),
})
