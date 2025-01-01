import { useEffect, useState } from 'react'
import { setLoading } from '../../store/app.slice'
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../../services/api-User'

export const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state?.user?.currentUser)

    useEffect(() => {
        const fetchData = async () => {
            dispatch(setLoading(true))
            try {
                const resultAction = await dispatch(fetchUserById(user?.id))
                setCurrentUser(resultAction?.payload)
                enqueueSnackbar(`Welcome back ${resultAction.payload?.first_name} ${resultAction.payload?.last_name}`, {
                    variant: 'success',
                })
            } catch (error) {
                enqueueSnackbar(error?.message, {
                    variant: 'error',
                })
            } finally {
                dispatch(setLoading(false))
            }
        }

        fetchData()
    }, [dispatch, enqueueSnackbar, user?.id])

    return currentUser
}
