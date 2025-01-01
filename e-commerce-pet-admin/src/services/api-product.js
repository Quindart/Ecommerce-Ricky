import { createAsyncThunk } from '@reduxjs/toolkit'
import client from './api-context'

export const apiGetProductByParams = async (offset, limit) => {
    const response = await client.get(`/products?offset=${offset}&limit=${limit}`)
    return response
}
export const apiSearchCProductByQuery = async (code, name) => {
    const response = await client.get(`/products/search?code=${code}&name=${name}`)
    return response
}
export const apiFilterProductByParams = async (params) => {
    const { offset, limit, sortField, sortType, categoryId, brand, distancePrice, tags, keywords, searchType, color } =
        params
    const queryParams = []

    if (offset) queryParams.push(`offset=${offset}`)
    if (limit) queryParams.push(`limit=${limit}`)
    if (sortField) queryParams.push(`sortField=${sortField}`)
    if (sortType) queryParams.push(`sortType=${sortType}`)
    if (categoryId) queryParams.push(`category_id=${categoryId}`)
    if (brand) queryParams.push(`brand=${brand}`)
    if (distancePrice) queryParams.push(`distancePrice=${distancePrice}`)
    if (tags) queryParams.push(`tags=${tags}`)
    if (keywords) queryParams.push(`keywords=${keywords}`)
    if (searchType) queryParams.push(`searchType=${searchType}`)
    if (color) queryParams.push(`color=${color}`)

    const queryString = queryParams.join('&')

    const url = `/products/filter?${queryString}`

    const response = await client.get(url)
    return response
}

export const fetchProductByParams = createAsyncThunk(
    'products/fetchProductByParams',
    async ({ offset, limit }, { rejectWithValue }) => {
        try {
            const response = await apiGetProductByParams(offset, limit)
            if (response.list) return response
        } catch (error) {
            return rejectWithValue(`${error.message}`)
        }
    },
)
export const fetchProductBySearch = createAsyncThunk(
    'products/fetchProductBySearch',
    async ({ name, code }, { rejectWithValue }) => {
        try {
            const response = await apiSearchCProductByQuery(code, name)
            if (response.list_product) return response
        } catch (error) {
            return rejectWithValue(`${error.message}`)
        }
    },
)
export const fetchProductByFilterParams = createAsyncThunk(
    'products/fetchProductByFilterParams',
    async (params, { rejectWithValue }) => {
        try {
            const response = await apiFilterProductByParams(params)
            if (response.products) return response
        } catch (error) {
            return rejectWithValue(`${error.message}`)
        }
    },
)
