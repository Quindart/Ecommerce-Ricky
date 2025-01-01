import { createSlice } from '@reduxjs/toolkit'
import { fetchCategoryByParams, fetchCategoryBySearch } from '../services/api-category'

export const TYPE_OF_RENDER = {
    ALL: 'all',
    SEARCH: 'search',
    FILTER: 'filter',
}
const categorySlice = createSlice({
    name: 'categorys',
    initialState: {
        isFetch: false,
        typeOfRender: TYPE_OF_RENDER.ALL,
        renderTableCategory: [],
        currentPage: 1,
        params: { limit: 6, page: 1, totalPage: 7 },
    },
    reducers: {
        setFetching: (state, action) => {
            state.isFetch = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryByParams.fulfilled, (state, action) => {
            state.renderTableCategory = [...action.payload.listCategory]
            state.params = action.payload.params
            state.typeOfRender = TYPE_OF_RENDER.ALL
            state.isFetch = false
            state.params.totalPage = 7
        })
        builder.addCase(fetchCategoryBySearch.fulfilled, (state, action) => {
            state.renderTableCategory = []
            state.renderTableCategory = [...action.payload.list_category]
            state.params.page = 1
            state.params.limit = 6
            state.typeOfRender = TYPE_OF_RENDER.SEARCH
            state.isFetch = false
            if (parseInt(action.payload.total / state.params.limit) > 0) {
                state.params.totalPage = parseInt(action.payload.total / state.params.limit) + 1
            } else state.params.totalPage = parseInt(action.payload.total / state.params.limit)
        })
    },
})
const { actions, reducer } = categorySlice
export const { setFetching } = actions
export default reducer
