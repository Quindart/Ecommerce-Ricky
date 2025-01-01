import React, { useEffect, useState } from 'react'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateLogin } from '../../../utils/validate'
import { useSnackbar } from 'notistack'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../../components/Loading'
import { login } from '../../../store/auth/authSlice'
import Breadcrumb from '../../../components/Breadcrumb'
import useAuthRedirect from '../../../hooks/useAuthRedirect '

function ForgotPasswordPage() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validateLogin),
    mode: 'onBlur',
  })

  useAuthRedirect()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  //   useEffect(() => {
  //     if (isError) {
  //       enqueueSnackbar(message, {
  //         variant: 'error',
  //       })
  //     }
  //     if ((isSuccess || user) && message !== '') {
  //       enqueueSnackbar(message, {
  //         variant: 'success',
  //       })
  //     }
  //   }, [message, enqueueSnackbar, isError, isSuccess, navigate, user, dispatch])
  const [email, setEmail] = useState('')
  const onSubmit = () => {
    const data = {
      email: email,
    }
    console.log('data', data)
    enqueueSnackbar('Đã gửi mail thành công', {
      variant: 'success',
    })
  }
  if (isLoading) {
    return <Loading />
  }
  const dataCrumbs = [
    {
      name: 'My account',
      href: '/login',
    },
    {
      name: 'Lost password',
    },
  ]
  return (
    <>
      <header className="account__header">
        <Breadcrumb
          className="account__header--breadcrumb"
          targetFormat="snake"
          list={dataCrumbs}
        />
        <h1
          style={{ textTransform: 'capitalize' }}
          className="account__header--title mx-auto"
        >
          Lost password
        </h1>
      </header>
      <div className="forgot-password">
        <div className="forgot-password__content">
          <div className="forgot-password__form">
            <div className="forgot-password__header">
              Last your password? Please enter your email address. You will
              receive a link to create a new password via email
            </div>
            <form className="forgot-password__content">
              <TextField
                className="mt-2"
                label="Email"
                type="form"
                color="blue"
                id="email"
                require={true}
                register={register}
                errors={errors}
                name="email"
                autocomplete="email"
                // onChange={(e) => setEmail(e.target.value)}
                // value={email}
              />
            </form>
            <div className="forgot-password__remember">
              <div className="forgot-password__remember--lost-password">
                <Link to="/login">Login</Link>
              </div>
            </div>
            <Button
              onClick={handleSubmit(onSubmit)}
              htmlType="submit"
              type="primary"
              className="w-100 text-center forgot-password__button"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPasswordPage
