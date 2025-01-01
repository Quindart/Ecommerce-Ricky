import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../../services/api-User'
import { useSnackbar } from 'notistack'
import { setLoading } from '../../store/app.slice'

const useUser = () => {
    const user = useSelector((state) => state.users)
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()

    const handleGetUserById = async (user_id) => {
        const resultAction = await dispatch(fetchUserById(user_id))

        if (fetchUserById.pending.match(resultAction)) {
            dispatch(setLoading(true))
        }
        if (fetchUserById.fulfilled.match(resultAction)) {
            // enqueueSnackbar(`Welcome back ${resultAction.payload.first_name} ${resultAction.payload.last_name}`, {
            //     variant: 'success',
            // })
            dispatch(setLoading(false))
        }
        if (fetchUserById.rejected.match(resultAction)) {
            enqueueSnackbar(resultAction.payload, {
                variant: 'error',
            })
            dispatch(setLoading(false))
        }
    }

    return { user, handleGetUserById }
}

export default useUser
