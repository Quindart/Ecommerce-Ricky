import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { APP_ROUTER } from '../Utils/Constants'

const PrivateRoutes = ({ children }) => {
    const user = useSelector((state) => state.user.currentUser)
    return user ? <>{children}</> : <Navigate to={APP_ROUTER.LOGIN} replace />
}
export default PrivateRoutes
