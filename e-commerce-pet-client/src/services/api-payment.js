import axiosConfig from './axiosConfig'

const apiPaymentOnline = async (order_id, data) => {
  const response = await axiosConfig.post(
    `/orders/${order_id}/payment_online`,
    data
  )
  return response
}
export const apiPayment = { apiPaymentOnline }
