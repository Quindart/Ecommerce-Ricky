import { createSlice } from '@reduxjs/toolkit'

import { useAuth } from 'hooks/useAuth'

const initialState = {
  user: null,
  isLoading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder
      // register
      .addCase(useAuth.signUp.pending, (state) => {
        state.isLoading = true
      })
      .addCase(useAuth.signUp.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
      })
      .addCase(useAuth.signUp.rejected, (state, action) => {
        state.isLoading = false
        state.user = action.payload
      })
      //   login
      .addCase(useAuth.login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(useAuth.login.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
      })
      .addCase(useAuth.login.rejected, (state, action) => {
        state.isLoading = false
        state.user = action.payload
      })
      //   logout
      .addCase(useAuth.logout.fulfilled, (state) => {
        state.user = null
      })
  },
})
export const { reset } = authSlice.actions
export default authSlice.reducer
