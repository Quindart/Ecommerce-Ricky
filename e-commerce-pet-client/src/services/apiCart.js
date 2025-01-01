import axiosConfig from './axiosConfig'

export const apiGetCartByUserId = async (user_id) => {
  const response = await axiosConfig.get(`/carts/${user_id}`)
  return response
}
