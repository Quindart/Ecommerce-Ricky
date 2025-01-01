import { createSlice } from '@reduxjs/toolkit'
import { fetchOrderByParams } from '../services/api-order'

export const TYPE_OF_RENDER = {
    ALL: 'all',
    SEARCH: 'search',
    FILTER: 'filter',
}

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        isFetch: false,
        typeOfRender: TYPE_OF_RENDER.ALL,
        renderTableOrder: [],
        currentPage: 1,
        params: { limit: 6, page: 1, totalPage: 7 },
    },
    reducers: {
        setFetching: (state, action) => {
            state.isFetch = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrderByParams.fulfilled, (state, action) => {
            state.renderTableOrder = [...action.payload.list]
            state.params = action.payload.params
            state.typeOfRender = TYPE_OF_RENDER.ALL
            state.isFetch = false
            state.params.totalPage = 7
        })
    },
})
const { actions, reducer } = orderSlice
export const { setFetching } = actions
export default reducer
