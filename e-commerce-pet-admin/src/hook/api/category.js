import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryByParams, fetchCategoryBySearch } from '../../services/api-category'
import { enqueueSnackbar } from 'notistack'
import { setFetching } from '../../store/category.slice'
import { SEARCH_ENUM } from '../../Pages/CategoryPage/List'

const useCategory = () => {
    const category = useSelector((state) => state.categorys)
    const { isFetch, params, renderTableCategory, typeOfRender } = category

    const currentPage = parseInt(params.page)
    const limit = parseInt(params.limit)
    const totalPage = parseInt(params.totalPage)
    const dispatch = useDispatch()

    const handleGetAllCategoryByParams = async (limit, offset) => {
        dispatch(setFetching(true))
        const resultAction = await dispatch(fetchCategoryByParams({ limit, offset }))

        if (fetchCategoryByParams.rejected.match(resultAction)) {
            enqueueSnackbar(resultAction.payload, {
                variant: 'error',
            })
            dispatch(setFetching(false))
        }
    }

    const handleSearchCategory = async (keywords, typeSearch, limit, page) => {
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
        dispatch(setFetching(true))
        const resultAction = await dispatch(fetchCategoryBySearch({ name, code, limit, page }))

        if (fetchCategoryBySearch.rejected.match(resultAction)) {
            enqueueSnackbar(resultAction.payload, {
                variant: 'error',
            })
            dispatch(setFetching(false))
        }
    }

    return {
        renderTableCategory,
        typeOfRender,
        isFetch,
        currentPage,
        totalPage,
        limit,
        handleGetAllCategoryByParams,
        handleSearchCategory,
    }
}
export default useCategory
