import axiosConfig from './axiosConfig'
import { productService } from './productService'

const getCartByUserId = async (userId) => {
  const response = await axiosConfig.get(`/carts/${userId}`)
  return response
}

const getCart = async (userId) => {
  const response = await axiosConfig.get(`/carts/${userId}`)
  if (response) {
    return response.cart.cart_details
  }
  return null
}

const getAllProductCart = async (data) => {
  const { user } = data;
  
  if (!user || !user.id) {
    return [];
  }

  const cart = await getCart(user.id)
  const promises = cart.map(async (item) => {
    const product = await productService.getProductById(item.product_id)
    return { ...product, quantity: item.quantity }
  })
  const listProduct = await Promise.all(promises)
  return listProduct
}

const updateProductCartById = async (userId, productId, data) => {
  const response = await axiosConfig.put(
    `/carts/${userId}/products/${productId}`,
    data
  )
  if (response) {
    return response.cart.cart_details
  }
  return null
}

const deleteProductCartById = async (userId, productId) => {
  const response = await axiosConfig.delete(
    `/carts/${userId}/products/${productId}`
  )
  if (response) {
    return response.cart.cart_details
  }
}
const addToCartByProductID = async (userId, productId, data) => {
  const response = await axiosConfig.post(
    `/carts/${userId}/products/${productId}`,
    data
  )

  if (response) {
    return response.cart.cart_details
  }
}

const countCart = (cartItems) => {
  let cartTotalQuantity = 0
  let cartTotalAmount = 0
  cartItems.forEach((product) => {
    cartTotalQuantity += product.quantity
    cartTotalAmount += product.quantity * product.price
  })
  return { cartTotalQuantity, cartTotalAmount }
}

export const cartService = {
  getCart,
  getAllProductCart,
  updateProductCartById,
  countCart,
  deleteProductCartById,
  addToCartByProductID,
  getCartByUserId,
}
