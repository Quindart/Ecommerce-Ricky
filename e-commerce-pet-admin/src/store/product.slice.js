import { createSlice } from '@reduxjs/toolkit'
import { fetchProductByFilterParams, fetchProductByParams, fetchProductBySearch } from '../services/api-product'

export const TYPE_OF_RENDER = {
    ALL: 'all',
    SEARCH: 'search',
    FILTER: 'filter',
}
const productSlice = createSlice({
    name: 'products',
    initialState: {
        isFetch: false,
        typeOfRender: TYPE_OF_RENDER.ALL,
        renderTableProduct: [],
        currentPage: 1,
        params: { page: 1, limit: 6, totalPage: 7 },
    },
    reducers: {
        setFetchingProduct: (state, action) => {
            state.isFetch = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductByParams.fulfilled, (state, action) => {
            state.renderTableProduct = [...action.payload.list]
            state.params = action.payload.params
            state.typeOfRender = TYPE_OF_RENDER.ALL
            state.isFetch = false
            state.params.totalPage = 7
        })
        builder.addCase(fetchProductBySearch.fulfilled, (state, action) => {
            state.renderTableProduct = []
            state.renderTableProduct = [...action.payload.list_product]
            state.params.page = 1
            state.params.limit = 6
            state.typeOfRender = TYPE_OF_RENDER.SEARCH
            state.isFetch = false
            if (parseInt(action.payload.total / state.params.limit) > 0) {
                state.params.totalPage = parseInt(action.payload.total / state.params.limit) + 1
            } else state.params.totalPage = parseInt(action.payload.total / state.params.limit)
        })
        builder.addCase(fetchProductByFilterParams.fulfilled, (state, action) => {
            state.renderTableProduct = []
            state.renderTableProduct = [...action.payload.products]
            state.params.page = 1
            state.params.limit = 6
            state.typeOfRender = TYPE_OF_RENDER.FILTER
            state.isFetch = false
            state.params.totalPage = parseInt(action.payload.params.totalPage)
        })
    },
})
const { actions, reducer } = productSlice
export const { setFetchingProduct } = actions
export default reducer
