import axiosConfig from './axiosConfig'
import { PARAMS_FILTER, PRICE_RANGE, PRODUCTS_PER_PAGE } from '../utils/constants'

const getProducts = async (pageIndex, cateId) => {
  try {
    const response = await axiosConfig.get(
      `/products/filter?limit=${PRODUCTS_PER_PAGE}&offset=${pageIndex || 1}&category_id=${cateId || ""}`
    )
    return response
  } catch (error) {
    return error;
  }
}

const getProductsByParams = async (pageIndex, paramsApi, cateId) => {
  const offset = pageIndex ? pageIndex : 1
  const distancePrice =
    paramsApi.min_price || paramsApi.max_price
      ? `${paramsApi.min_price || PRICE_RANGE[0]},${paramsApi.max_price || PRICE_RANGE[1]}`
      : ''
  const color = paramsApi.color ? paramsApi.color : ''
  const brand = paramsApi.brand ? paramsApi.brand : ''
  const categoryId = cateId ? cateId : ''
  const sort = paramsApi.sort
    ? `&sortField=${paramsApi.sort.sortField}&sortType=${paramsApi.sort.sortType}`
    : ''

  try {
    const response = await axiosConfig.get(
      `/products/filter?limit=${PRODUCTS_PER_PAGE}&offset=${offset}${sort}&distancePrice=${distancePrice}&color=${color}&brand=${brand}&category_id=${categoryId}`
    )
    return response
  } catch (error) {
    return error;
  }
}

const getProductById = async (id) => {
  const response = await axiosConfig.get(`/products/${id}`)
  return response.product
}

const getTopProductByParams = async (offset, limit) => {
  const response = await axiosConfig.get(
    `/products?offset=${offset}&limit=${limit}`
  )
  return response
}

const getProductByTagName = async (offset, limit, keywords) => {
  const response = await axiosConfig.get(
    `/products/filter?offset=${offset}&limit=${limit}&searchType=name&keywords=${keywords}`
  )
  return response
}

const getProductByCategoryId = async (categoryId) => {
  const response = await axiosConfig.get(`/products/category/${categoryId}`)
  return response
}
export const productService = {
  getProducts,
  getProductsByParams,
  getProductById,
  getTopProductByParams,
  getProductByTagName,
  getProductByCategoryId,
}
