import { createAsyncThunk } from '@reduxjs/toolkit'
import client from './api-context'

const apiGetUserById = async (user_id) => {
    return await client.get('users/' + user_id)
}

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (user_id, { rejectWithValue }) => {
    try {
        const response = await apiGetUserById(user_id)
        if (response.user) return response.user
    } catch (error) {
        return rejectWithValue(`${error.message}`)
    }
})
