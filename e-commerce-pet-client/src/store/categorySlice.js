import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import categoryService from '../services/api-categories'

const initialState = {
  categoryTree: [],
  loading: false,
  error: null,
  loaded: false,
}

export const fetchCategoryTree = createAsyncThunk(
  'category/fetchTree',
  async (_, thunkApi) => {
    try {
      return await categoryService.apiGetTreeCategory()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkApi.rejectWithValue(message)
    }
  }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryTree.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCategoryTree.fulfilled, (state, action) => {
        state.loading = false
        state.categoryTree = action.payload
        state.error = null
        state.loaded = true
      })
      .addCase(fetchCategoryTree.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default categorySlice.reducer
