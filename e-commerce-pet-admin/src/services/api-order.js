import { createAsyncThunk } from '@reduxjs/toolkit'
import client from './api-context'

export const apiGetOrderByParams = async (limit, offset) => {
    const response = await client.get(`/orders/params?limit=${limit}&offset=${offset}`)
    return response
}
export const apiGetOrderById = async (_id) => {
    const response = await client.get(`/orders/${_id}`)
    return response
}

export const apiGetOrderByUserId = async (user_id) => {
    const response = await client.get(`/orders/${user_id}`)
    return response
}
//[THUNK]
export const fetchOrderByParams = createAsyncThunk(
    'Orders/fetchOrderByParams',
    async ({ limit, offset }, { rejectWithValue }) => {
        try {
            const response = await apiGetOrderByParams(limit, offset)
            if (response.list) return response
        } catch (error) {
            return rejectWithValue(`${error.message}`)
        }
    },
)
