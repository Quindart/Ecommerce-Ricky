import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderByParams } from '../../services/api-order'
import { setFetching } from '../../store/category.slice'
import { enqueueSnackbar } from 'notistack'

export default function useOrder() {
    const order = useSelector((state) => state.orders)

    const { isFetch, typeOfRender, renderTableOrder, params } = order
    const currentPage = parseInt(params.page)
    const limit = parseInt(params.limit)
    const totalPage = parseInt(params.totalPage)
    const dispatch = useDispatch()

    const handleGetAllOrderByParams = async (limit, offset) => {
        dispatch(setFetching(true))
        const resultAction = await dispatch(fetchOrderByParams({ limit, offset }))

        if (fetchOrderByParams.rejected.match(resultAction)) {
            enqueueSnackbar(resultAction.payload, {
                variant: 'error',
            })
            dispatch(setFetching(false))
        }
    }
    return {
        isFetch,
        typeOfRender,
        renderTableOrder,
        currentPage,
        limit,
        totalPage,
        handleGetAllOrderByParams,
    }
}
