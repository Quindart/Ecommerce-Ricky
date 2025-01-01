import { createAsyncThunk } from '@reduxjs/toolkit'
import client from './api-context'

export const apiGetCategoryByParams = async (limit, offset) => {
    const response = await client.get(`/categorys?limit=${limit}&offset=${offset}`)
    return response
}
export const apiGetCategoryById = async (category_id) => {
    const response = await client.get(`/categorys/${category_id}`)
    return response
}
export const apiUpdateCategoryById = async (category_id, data) => {
    const response = await client.put(`/categorys/${category_id}`, data)
    return response
}
export const apiCreateCategory = async (data) => {
    const response = await client.post(`/categorys`, data)
    return response
}
export const apiGetTreeCategory = async () => {
    const resopnse = await client.get('/categorys/tree_category')
    return resopnse
}
export const apiChangeActiveCategory = async (category_id) => {
    const resopnse = await client.put(`/categorys/${category_id}/active`)
    return resopnse
}
export const apiDeleteCategory = async (category_id) => {
    const resopnse = await client.delete(`/categorys/${category_id}`)
    return resopnse
}
export const apiSearchCategoryByQuery = async (name, code, limit, offset) => {
    const resopnse = await client.get(`/categorys/search?name=${name}&code=${code}&limit=${limit}&offset=${offset}`)
    return resopnse
}
//[THUNK]
export const fetchCategoryByParams = createAsyncThunk(
    'categorys/fetchCategoryByParams',
    async ({ limit, offset }, { rejectWithValue }) => {
        try {
            const response = await apiGetCategoryByParams(limit, offset)
            if (response.listCategory) return response
        } catch (error) {
            return rejectWithValue(`${error.message}`)
        }
    },
)
export const fetchCategoryBySearch = createAsyncThunk(
    'categorys/fetchCategoryBySearch',
    async ({ name, code, limit, page }, { rejectWithValue }) => {
        try {
            const response = await apiSearchCategoryByQuery(name, code, limit, page)
            if (response.list_category) return response
        } catch (error) {
            return rejectWithValue(`${error.message}`)
        }
    },
)
