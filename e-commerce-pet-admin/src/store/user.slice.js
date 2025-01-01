import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById } from '../services/api-User'

const initialState = {
    error: null,
    isLoading: false,
    user_detail: {},
    errMessage: '',
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.isLoading = false
            state.user_detail = action.payload
        })
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.isLoading = false
            state.error = true
            state.errMessage = action.error.message
        })
    },
})

export const { actions, reducer } = userSlice.actions

export default userSlice.reducer
