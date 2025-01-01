import axiosConfig from './axiosConfig'

export const apiCreateOrder = async (data) => {
  const response = await axiosConfig.post(`/orders/`, data)
  return response
}
export const apiGetOrderById = async (id) => {
  const response = await axiosConfig.get(`/orders/${id}`)
  return response
}

export const apiOrder = {
  apiCreateOrder,
  apiGetOrderById,
}
