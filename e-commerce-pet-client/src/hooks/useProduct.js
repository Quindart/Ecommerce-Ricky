import { useEffect, useState } from 'react'
import { productService } from '../services/productService'

export const useFetchTopProductByPrams = (offset, limit) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const handleFetchProductByParams = async () => {
      try {
        const response = await productService.getTopProductByParams(
          offset,
          limit
        )
        setProducts(response.list)
      } catch (error) {
        console.log(error.message)
      }
    }
    handleFetchProductByParams()
  }, [offset, limit])
  return products
}
export const useFetchProductByTagName = (offset, limit, keywords) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const handleFetchProductByParams = async () => {
      try {
        const response = await productService.getProductByTagName(
          offset,
          limit,
          keywords
        )
        setProducts(response.products)
      } catch (error) {
        console.log(error.message)
      }
    }
    handleFetchProductByParams()
  }, [offset, limit, keywords])
  return products
}

export const useFetchProductById = (categoryId) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const handleFetchProductByCategoryId = async () => {
      try {
        const response = await productService.getProductByCategoryId(categoryId)
        setProducts(response.list_product)
      } catch (error) {
        console.log(error.message)
      }
    }
    handleFetchProductByCategoryId()
  }, [categoryId])
  return products
}
