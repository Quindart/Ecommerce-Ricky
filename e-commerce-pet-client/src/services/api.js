import axiosConfig from './axiosConfig'

// api search

export const apiSearch = async (data) => {
  const response = await axiosConfig.get(`/products/search?code=&name=${data}`)
  return response
}

// api get product by id

export const apiGetProductById = async (id) => {
  const response = await axiosConfig.get(`/products/${id}`)
  return response
}