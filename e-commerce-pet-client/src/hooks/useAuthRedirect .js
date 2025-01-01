import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useAuthRedirect = () => {
  const isAuthenticated = useSelector((state) => state?.auth?.user?.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])
}

export default useAuthRedirect
