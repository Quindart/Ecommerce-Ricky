import React, { useEffect } from 'react'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSnackbar } from 'notistack'
import { schema } from '../../../utils/validate'
import { useDispatch, useSelector } from 'react-redux'

import Loading from '../../../components/Loading'
import Breadcrumb from '../../../components/Breadcrumb'
import { useAuth } from 'hooks/useAuth'
function Register() {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    onBlur,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const dispatch = useDispatch()
  const { user, isLoading } = useSelector((state) => state.auth)
  useEffect(() => {
    if (user && user?.success === true) {
      enqueueSnackbar(user?.message, {
        variant: 'success',
      })
      navigate('/login')
    }
    if (user?.status === 404) {
      enqueueSnackbar(user?.message, {
        variant: 'error',
      })
    }
  }, [navigate, user, dispatch, enqueueSnackbar])

  const onSubmit = ({ confirmPassword, ...data }) => {
    dispatch(useAuth.signUp(data))
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
      <div className="register">
        <div className="register__content">
          <div className="register__form">
            <div className="register__header">Register</div>
            <form className="register__content">
              <TextField
                label="Email address *"
                type="form"
                disabled={false}
                color="blue"
                id="email"
                register={register}
                errors={errors}
                onBlur={onBlur}
              />
              <TextField
                className="mt-2"
                label="User name *"
                type="form"
                disabled={false}
                color="blue"
                id="userName"
                register={register}
                errors={errors}
              />
              <TextField
                className="mt-2"
                label="Password *"
                type="password"
                disabled={false}
                color="blue"
                id="password"
                register={register}
                errors={errors}
              />
              <TextField
                className="mt-2"
                label="Confirm password *"
                type="password"
                disabled={false}
                color="blue"
                id="confirmPassword"
                register={register}
                errors={errors}
              />
              <TextField
                className="mt-2"
                label="First name *"
                type="form"
                disabled={false}
                color="blue"
                id="firstName"
                register={register}
                errors={errors}
              />
              <TextField
                className="mt-2"
                label="Last name *"
                type="form"
                disabled={false}
                color="blue"
                id="lastName"
                register={register}
                errors={errors}
              />
            </form>
            <div className="register__policy">
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{' '}
                <Link to="#" target="_blank">
                  privacy policy
                </Link>
                .
              </p>
            </div>
            <Button
              onClick={handleSubmit(onSubmit)}
              htmlType="submit"
              type="primary"
              className="w-100 text-center"
            >
              Register
            </Button>
            <div className="register__bottom">
              You A Member?
              <Link to={'/login'}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
