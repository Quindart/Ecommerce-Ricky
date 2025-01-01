import React from 'react'
import { Link } from 'react-router-dom'

import { APP_ICON, COLOR, APP_ROUTER } from '../../../Utils/Constants.js'
import * as yup from 'yup'
import Textfield from '../../../Components/ui/Textfield/Textfield.js'
import { useSnackbar } from 'notistack'
import '../style.js'
import { Icon } from '@iconify/react'
import Button from '../../../Components/ui/Button/Button.js'
import ukoLogo from '../../../assets/img/ukoLogo.png'
import sideImage from '../../../assets/img/sideImage.png'
import { Grid, Image, FormContainer, Box } from '../style.js'
import client from '../../../services/api-context.js'

const schema = yup.object().shape({
    first_name: yup
        .string()
        .required('First name is required')
        .matches(/^[a-zA-Z]+$/, 'First name should only contain alphabets'),
    last_name: yup
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
        .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
    confirmPassword: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

function Register() {
    const { enqueueSnackbar } = useSnackbar()
    const handleSubmit = async (values, actions) => {
        const formattedValues = {
            email: values.email,
            userName: values.userName,
            password: values.password,
            first_name: values.first_name,
            last_name: values.last_name,
        }
        client
            .post(`/auth/register`, formattedValues)
            .then((response) => {
                console.log(response)
                enqueueSnackbar('Register successfully', { variant: 'success' })
            })
            .catch((error) => {
                console.error('Failed to Register:', error, formattedValues)
                enqueueSnackbar('Fail to Register', { variant: 'error' })
            })
    }

    return (
        <Grid className=" grid-template-areas-2 md:grid-template-areas-4 grid min-h-screen bg-gray-100">
            <FormContainer
                initialValues={{ first_name: '', last_name: '', password: '', email: '' }}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, handleBlur, handleChange, values, errors, touched }) => (
                    <Box className=" w-full justify-self-center px-11 pb-16 pt-8">
                        <div className="mb-6 flex items-center justify-center">
                            <img src={ukoLogo} width="40" alt="Logo"></img>
                        </div>
                        <h2 className="mb-[2px] text-center text-2xl font-bold text-gray-900">Signin Up to Uko</h2>
                        <div className="mb-[17px] flex justify-center text-sm font-semibold">
                            <span className="mb-5 text-gray-400">Have an account?</span>
                            <Link to={APP_ROUTER.LOGIN}>
                                <span className=" ml-1 text-blue-400">Login</span>
                            </Link>
                        </div>
                        <div className="mb-4 grid py-1 md:flex md:justify-between">
                            <Textfield
                                placeholder="First Name"
                                className="focus:shadow-outline mb-6 w-full appearance-none text-sm leading-tight text-gray-700 focus:outline-none md:mb-0 md:mr-2"
                                id="first_name"
                                type="text"
                                label="First Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.first_name}
                                helperText={touched.first_name && errors.first_name ? errors.first_name : ''}
                                error={touched.first_name && errors.first_name ? true : false}
                            />
                            <Textfield
                                placeholder="Last Name"
                                className="focus:shadow-outline w-full appearance-none text-sm leading-tight text-gray-700 focus:outline-none md:ml-2 md:mt-0"
                                id="last_name"
                                type="text"
                                label="Last Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.last_name}
                                helperText={touched.last_name && errors.last_name ? errors.last_name : ''}
                                error={touched.last_name && errors.last_name ? true : false}
                            />
                        </div>
                        <div className=" mb-4 grid md:flex md:justify-between">
                            <Textfield
                                className="focus:shadow-outline w-full appearance-none py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                label="Username"
                                id="userName"
                                name="userName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userName}
                                helperText={touched.userName && errors.userName ? errors.userName : ''}
                                error={touched.userName && errors.userName ? true : false}
                            />
                        </div>
                        <div className="mb-4">
                            <Textfield
                                placeholder="example@gmail.com"
                                className="focus:shadow-outline mb-4 w-full appearance-none py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                id="email"
                                type="email"
                                label="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                helperText={touched.email && errors.email ? errors.email : ''}
                                error={touched.email && errors.email ? true : false}
                            />
                        </div>
                        <div className="mb-4">
                            <Textfield
                                placeholder="Password"
                                className="focus:shadow-outline mb-3 w-full appearance-none py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                id="password"
                                type="password"
                                label="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                helperText={touched.password && errors.password ? errors.password : ''}
                                error={touched.password && errors.password ? true : false}
                            />
                        </div>
                        <div className="mb-5">
                            <Textfield
                                placeholder="Confirm Password"
                                className="focus:shadow-outline mb-3 w-full appearance-none py-1 text-sm leading-tight text-gray-700 focus:outline-none"
                                id="confirmPassword"
                                type="password"
                                label="Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                helperText={
                                    touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ''
                                }
                                error={touched.confirmPassword && errors.confirmPassword ? true : false}
                            />
                        </div>
                        <Button
                            className="focus:shadow-outline mt-[1px] w-full px-4 py-2 text-center font-bold focus:outline-none"
                            type="submit"
                            color="primary"
                            size="sm"
                        >
                            Sign Up
                        </Button>
                        <p className="mb-10 mt-1 text-center text-xs font-bold text-gray-400">
                            By signing up, I agree to UI Lib{' '}
                            <span className="cursor-pointer text-blue-400">Terms of Service & Privacy Policy</span>
                        </p>

                        <div className="relative top-[5px] mb-10">
                            <span className="transForm absolute left-1/2 top-[-11px] -translate-x-1/2 rounded bg-gray-100 px-2 py-1 text-xs font-bold text-gray-400">
                                OR
                            </span>
                            <hr className=" border-blue-200" />
                        </div>
                        <div className=" flex flex-col gap-4">
                            <Button
                                className=" text-darkgray focus:shadow-outline w-full rounded-lg border  border-blue-200 bg-gray-100 px-4 py-3 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon className="mr-2 text-xl" icon={APP_ICON.i_google} />{' '}
                                <span className="text-sm font-normal text-gray-800">Signin with Google</span>
                            </Button>
                            <Button
                                className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon className="mr-2 text-xl" icon={APP_ICON.i_facebook} />
                                <span className="text-sm font-normal text-gray-800"> Signin with Facebook</span>
                            </Button>
                            <Button
                                className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon className="mr-2 text-lg" icon={APP_ICON.i_twitter} />
                                <span className="text-sm font-normal text-gray-800"> Signin with Twitter</span>
                            </Button>
                        </div>
                    </Box>
                )}
            </FormContainer>
            <Image className="image h-full w-full object-cover " src={sideImage} alt="Unsplash Image" />
        </Grid>
    )
}

export default Register
