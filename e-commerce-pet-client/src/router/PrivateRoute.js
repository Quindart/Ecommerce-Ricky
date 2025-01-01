import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const user = useSelector((state) => state?.auth?.user?.user)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (!user) {
      enqueueSnackbar('You do not have access!, Please login.', {
        variant: 'warning',
        duration: 5000,
      })
    }
  }, [enqueueSnackbar, user])
  return user ? <Outlet /> : <Navigate to="/" replace />
}
export default PrivateRoutes
