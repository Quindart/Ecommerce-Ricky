import { useEffect, useState } from 'react'
import { apiOrder } from '../services/apiOrder'
import { useSnackbar } from 'notistack'
import { createSearchParams, useNavigate } from 'react-router-dom'

export const useHandleCreateOrder = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const handleCreateOrder = async (data) => {
    try {
      setLoading(true)
      const response = await apiOrder.apiCreateOrder(data)
      navigate({
        search: createSearchParams({
          order_id: response?.newOrder?._id,
        }).toString(),
      })
      enqueueSnackbar(response?.message, { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(error?.message, {
        variant: 'warning',
      })
    } finally {
      setLoading(false)
    }
  }

  return { handleCreateOrder, loading }
}

export const useFetchOrderById = (id) => {
  const [orderDetail, setOrderDetail] = useState([])

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const response = await apiOrder.apiGetOrderById(id)
        setOrderDetail(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchOrderDetail()
  }, [id])

  return orderDetail
}
