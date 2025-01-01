import { useDispatch, useSelector } from 'react-redux'
import { fetchProductByFilterParams, fetchProductByParams, fetchProductBySearch } from '../../services/api-product'
import { enqueueSnackbar } from 'notistack'
import { setFetchingProduct } from '../../store/product.slice' // Update import path
import { SEARCH_ENUM } from '../../Pages/ProductPage/List'

const useProduct = () => {
    const product = useSelector((state) => state?.products)
    const { isFetch, params, renderTableProduct, typeOfRender } = product

    const currentPage = parseInt(params?.page)
    const limit = parseInt(params?.limit)
    const totalPage = parseInt(params?.totalPage)

    const dispatch = useDispatch()

    const handleGetAllProductByParams = async (offset, limit) => {
        dispatch(setFetchingProduct(true))
        const resultAction = await dispatch(fetchProductByParams({ offset, limit }))

        if (fetchProductByParams.rejected.match(resultAction)) {
            enqueueSnackbar(resultAction.payload, {
                variant: 'error',
            })
            dispatch(setFetchingProduct(false))
        }
    }

    const handleSearchProduct = async (keywords, typeSearch, limit, page) => {
        let code = ''
        let name = ''
        switch (typeSearch) {
            case SEARCH_ENUM.CODE:
                code = keywords
                name = ''
                break
            case SEARCH_ENUM.NAME:
                code = ''
                name = keywords
                break
            default:
                break
        }
        dispatch(setFetchingProduct(true))
        const resultAction = await dispatch(fetchProductBySearch({ code, name, limit, page }))

        if (fetchProductBySearch.rejected.match(resultAction)) {
            enqueueSnackbar(resultAction.payload, {
                variant: 'error',
            })
            dispatch(setFetchingProduct(false))
        }
    }

    const handleFilterProduct = async (filterParams) => {
        dispatch(setFetchingProduct(true))
        const resultAction = await dispatch(fetchProductByFilterParams(filterParams))
        if (fetchProductByFilterParams.rejected.match(resultAction)) {
            enqueueSnackbar(resultAction.payload, {
                variant: 'error',
            })
            dispatch(setFetchingProduct(false))
        }
    }

    return {
        renderTableProduct,
        typeOfRender,
        isFetch,
        currentPage,
        totalPage,
        limit,
        handleGetAllProductByParams,
        handleSearchProduct,
        handleFilterProduct,
    }
}

export default useProduct
