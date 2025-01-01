import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../store/app.slice'

const useApp = () => {
    const app = useSelector((state) => state.app)
    const dispatch = useDispatch()

    const changeLoading = (value) => {
        dispatch(setLoading(value))
    }
    return { app, changeLoading }
}
export default useApp
