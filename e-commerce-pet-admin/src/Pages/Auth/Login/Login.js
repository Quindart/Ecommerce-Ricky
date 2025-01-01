import { Link, useNavigate } from 'react-router-dom'
import { APP_ICON, APP_ROUTER, ROLE } from '../../../Utils/Constants.js'
import * as yup from 'yup'
import Textfield from '../../../Components/ui/Textfield/Textfield.js'
import { useSnackbar } from 'notistack'
import '../style.js'
import { Icon } from '@iconify/react'
import Button from '../../../Components/ui/Button/Button.js'
import ukoLogo from '../../../assets/img/ukoLogo.png'
import sideImage from '../../../assets/img/sideImage.png'
import { Grid, Image, FormContainer, Box, Checkbox } from '../style.js'
import { login } from '../../../services/api-auth.js'
import { tokenService } from '../../../services/token.services.js'
import Progress from '../../../Components/ui/Progress/Progress.js'
import { useDispatch, useSelector } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../../../store/userSlice.js'
import useAuthRedirect from '../../../hook/ui/useAuthRedirect.js'
const schema = yup.object().shape({
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
        .matches(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
})

function Login() {
    useAuthRedirect()
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()
    const { loading } = useSelector((state) => state.user)
    const navigate = useNavigate()

    const handleLogin = async (values) => {
        try {
            dispatch(signInStart())
            const service = tokenService()
            const result = await login(values)
            console.log(result)
            if (result.success && result.user.role === ROLE.OWNER) {
                dispatch(signInSuccess(result))
                enqueueSnackbar(result.message, { variant: 'success' })
                service.setTokenList(result.tokenList)
                navigate(APP_ROUTER.HOME)
            } else {
                enqueueSnackbar('Role client not access this Page', { variant: 'error' })
                navigate(APP_ROUTER.LOGIN)
                dispatch(signInFailure())
            }
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' })
            dispatch(signInFailure(error.message))
        }
    }

    return (
        <Grid
            className="grid-template-areas-2 md:grid-template-areas-4 bg-[ #f3f4f9] grid
            overflow-hidden "
        >
            {loading && <Progress />}
            <FormContainer
                className="form"
                initialValues={{ userName: '', password: '' }}
                validationSchema={schema}
                onSubmit={handleLogin}
            >
                {({ handleBlur, handleChange, values, errors, touched }) => (
                    <Box className=" w-full justify-self-center px-11 pb-16 pt-8">
                        <div className="mb-6 flex items-center justify-center">
                            <img src={ukoLogo} width="40" alt="Logo"></img>
                        </div>
                        <h2 className="mb-[2px] text-center text-2xl font-bold text-gray-900">Sign in to Uko</h2>
                        <div className="mb-[17px] flex justify-center text-sm font-semibold">
                            <span className="mb-5 text-gray-400">New Here?</span>
                            <Link to={APP_ROUTER.REGISTER}>
                                <span className="ml-1 text-blue-400">Create an account</span>
                            </Link>
                        </div>
                        <div className=" mb-2 grid md:flex md:justify-between">
                            <Textfield
                                className="focus:shadow-outline w-full appearance-none  py-1 text-sm leading-tight text-gray-700 focus:outline-none"
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
                        <div>
                            <Textfield
                                placeholder="Password"
                                className=" focus:shadow-outline w-full appearance-none py-1 text-sm leading-tight text-gray-700 focus:outline-none"
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
                        <div className="mb-6 ml-1 mt-6 flex items-center justify-between">
                            <div className="mt-[-3px] flex items-center">
                                <Checkbox className=" mr-2 leading-tight" type="checkbox" id="rememberMe" />
                                <label className="ml-1 mt-[-1px] text-xs font-bold text-gray-700" htmlFor="rememberMe">
                                    Remember me
                                </label>
                            </div>
                            <a
                                className="relative top-[-10px] text-xs font-bold text-red-500"
                                href="./forgot-password.html"
                            >
                                Forget Password
                            </a>
                        </div>

                        <Button
                            className="focus:shadow-outline mb-10 mt-[1px] w-full px-4 py-2 text-center font-bold focus:outline-none"
                            type="submit"
                            color="primary"
                            size="sm"
                        >
                            Sign In
                        </Button>

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
                                <span className="text-sm font-normal text-gray-800">SignIn with Google</span>
                            </Button>
                            <Button
                                className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon className="mr-2 text-xl" icon={APP_ICON.i_facebook} />
                                <span className="text-sm font-normal text-gray-800"> SignIn with Facebook</span>
                            </Button>
                            <Button
                                className="text-darkgray focus:shadow-outline w-full rounded-lg border border-blue-200 bg-gray-100 px-4 py-3 font-bold focus:outline-none"
                                type="button"
                                variant="outline"
                                size="sm"
                                color="primary"
                            >
                                <Icon className="mr-2 text-lg" icon={APP_ICON.i_twitter} />
                                <span className="text-sm font-normal text-gray-800"> SignIn with Twitter</span>
                            </Button>
                        </div>
                    </Box>
                )}
            </FormContainer>
            <Image
                className="image h-full w-full object-contain opacity-80"
                width={100}
                height={100}
                src={sideImage}
                alt="Unsplash Image"
            />
        </Grid>
    )
}

export default Login
