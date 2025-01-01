import { useSelector } from 'react-redux'

const { useState, useEffect } = require('react')
const { cartService } = require('services/cartService')

const GetCartByUserId = () => {
  const userId = useSelector((state) => state?.auth?.user?.user?.id)

  const [cart, setCart] = useState([])

  useEffect(() => {
    const handleGetCartByUserId = async () => {
      try {
        const response = await cartService.getCartByUserId(userId)
        setCart(response.cart)
      } catch (error) {
        console.log(error)
      }
    }
    handleGetCartByUserId()
  }, [userId])

  return cart
}

const AddToCart = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isSuccess, setIsSuccess] = useState(null)
  const addToCart = async (userId, productId, data) => {
    if (!userId || !productId) {
      setError('User ID and Product ID are required')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await cartService.addToCartByProductID(
        userId,
        productId,
        data
      )
      setIsSuccess(response)
    } catch (err) {
      setError(err.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, addToCart, isSuccess }
}

export const useCart = {
  GetCartByUserId,
  AddToCart,
}
