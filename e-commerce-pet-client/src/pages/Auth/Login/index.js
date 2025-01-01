import React, { useEffect, useState } from 'react'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import Checkbox from '../../../components/CheckBox'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateLogin } from '../../../utils/validate'
import { useSnackbar } from 'notistack'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../../components/Loading'
import { reset } from '../../../store/auth/authSlice'
import Breadcrumb from '../../../components/Breadcrumb'
import useAuthRedirect from '../../../hooks/useAuthRedirect '
import { Icon } from '@iconify/react/dist/iconify.js'
import { useAuth } from 'hooks/useAuth'
import { getAllCartItems } from 'store/slice/cartSlice'
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  useAuthRedirect()
  const [isShowPassword, setIsShowPassword] = useState('password')

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validateLogin),
    mode: 'onBlur',
  })

  const { user, isLoading } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user && user?.success === true) {
      enqueueSnackbar(user?.message, {
        variant: 'success',
      })
      dispatch(getAllCartItems())
      navigate('/')
    }
    if (user?.status === 404) {
      enqueueSnackbar(user?.message, {
        variant: 'error',
      })
    }
  }, [navigate, user, dispatch, enqueueSnackbar])

  const onSubmit = ({ confirmPassword, ...data }) => {
    dispatch(useAuth.login(data))
    reset()
  }
  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <header className="account__header">
        <Breadcrumb
          className="account__header--breadcrumb"
          targetFormat="snake"
        />
        <h1
          style={{ textTransform: 'capitalize' }}
          className="account__header--title mx-auto"
        >
          My account
        </h1>
      </header>
      <div className="login">
        <div className="login__content">
          <div className="login__form">
            <div className="login__header">Login</div>
            <form className="login__content">
              <TextField
                className="mt-2"
                label="User name *"
                type="form"
                disabled={false}
                color="blue"
                id="userName"
                register={register}
                errors={errors}
                name="username"
                autocomplete="user-name"
              />
              <TextField
                hidden
                className="mt-2"
                label="Password *"
                type={isShowPassword}
                disabled={false}
                color="blue"
                id="password"
                register={register}
                errors={errors}
                autoComplete="user-password"
              >
                <Icon
                  className="login__icon eye"
                  icon={
                    isShowPassword === 'password'
                      ? 'ph:eye-closed-bold'
                      : 'mdi:eye'
                  }
                  onClick={() =>
                    setIsShowPassword(
                      isShowPassword === 'password' ? 'text' : 'password'
                    )
                  }
                />
              </TextField>
            </form>
            <div className="login__remember">
              <Checkbox label="Remember Me" color="blue" size="c-form" />
              <div className="login__remember--lost-password">
                <Link to="/forgot-password">Lost Your Password?</Link>
              </div>
            </div>
            <Button
              onClick={handleSubmit(onSubmit)}
              htmlType="submit"
              type="primary"
              className="w-100 text-center"
            >
              Login
            </Button>
            <div className="login__bottom">
              Not A Member?
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
