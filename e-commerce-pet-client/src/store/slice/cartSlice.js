import { cartService } from '../../services/cartService'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { productService } from '../../services/productService'
import { useAuth } from '../../hooks/useAuth'
import { enqueueSnackbar } from 'notistack'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
}

export const getAllCartItems = createAsyncThunk(
  'cart/getAllProducts',
  async (_, thunkApi) => {
    try {
      let currentUser = thunkApi.getState().auth?.user?.user

      const data = {
        user: currentUser,
      }

      const products = await cartService.getAllProductCart(data)
      const { cartTotalQuantity, cartTotalAmount } =
        cartService.countCart(products)
      return {
        cartItems: products,
        cartTotalQuantity: cartTotalQuantity,
        cartTotalAmount: cartTotalAmount,
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const updateQuantityCartItem = createAsyncThunk(
  'cart/updateQuantityById',
  async (data, thunkApi) => {
    try {
      let currentCart = thunkApi.getState().cart.cartItems

      let payloadCart = await cartService.updateProductCartById(
        data.userId,
        data.productId,
        data.quantity
      )

      const updatedCart = currentCart.map((cartItem) => {
        const foundPayloadItem = payloadCart.find(
          (payloadItem) => payloadItem.product_id === cartItem._id
        )
        return { ...cartItem, quantity: foundPayloadItem.quantity }
      })

      const { cartTotalQuantity, cartTotalAmount } =
        cartService.countCart(updatedCart)

      return {
        cartItems: updatedCart,
        cartTotalQuantity: cartTotalQuantity,
        cartTotalAmount: cartTotalAmount,
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const deleteCartItem = createAsyncThunk(
  'cart/deleteOneProduct',
  async (data, thunkApi) => {
    try {
      let currentCart = thunkApi.getState().cart.cartItems

      let payloadCart = await cartService.deleteProductCartById(
        data.userId,
        data.productId
      )

      const updatedCart = currentCart.filter((cartItem) =>
        payloadCart.some(
          (payloadItem) => payloadItem.product_id === cartItem._id
        )
      )

      const { cartTotalQuantity, cartTotalAmount } =
        cartService.countCart(updatedCart)

      return {
        cartItems: updatedCart,
        cartTotalQuantity: cartTotalQuantity,
        cartTotalAmount: cartTotalAmount,
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const addToCart = createAsyncThunk(
  'cart/add-to-cart',
  async (data, thunkApi) => {
    try {
      let currentUser = thunkApi.getState().auth?.user?.user
      let currentCart = thunkApi.getState().cart.cartItems

      console.log(currentCart)

      if (!currentUser) {
        return thunkApi.rejectWithValue("Bạn cần đăng nhập để tiếp tục") 
      }

      const product = await productService.getProductById(data.productId)

      if (product) {
        await cartService.addToCartByProductID(
          currentUser.id,
          data.productId,
          data.quantity
        )

        let updatedCart = [...currentCart]

        const existingProductIndex = updatedCart.findIndex(item => item._id === data.productId);
        if (existingProductIndex !== -1) {
          updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            quantity: updatedCart[existingProductIndex].quantity + data.quantity.quantity
          };
        } else {
          updatedCart.push({
            ...product,
            quantity: data.quantity.quantity
          });
        }

        const { cartTotalQuantity, cartTotalAmount } =
          cartService.countCart(updatedCart)

        return {
          message: "Add product to cart successfully",
          cartItems: updatedCart,
          cartTotalQuantity: cartTotalQuantity,
          cartTotalAmount: cartTotalAmount,
        }
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.cartItems = action.payload.cartItems
        state.cartTotalQuantity = action.payload.cartTotalQuantity
        state.cartTotalAmount = action.payload.cartTotalAmount
      })
      .addCase(getAllCartItems.rejected, (state, action) => {
        enqueueSnackbar(action.payload, {
          variant: 'error',
        })
        state.isError = true
        state.isLoading = false
        state.isSuccess = false
        state.message = action.payload
      })
      .addCase(updateQuantityCartItem.pending, (state) => {
        state.isSuccess = false
        state.isLoading = true
        state.message = ''
      })
      .addCase(updateQuantityCartItem.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.message = 'Update cart successfully'
        state.cartItems = action.payload.cartItems
        state.cartTotalQuantity = action.payload.cartTotalQuantity
        state.cartTotalAmount = action.payload.cartTotalAmount
      })
      .addCase(updateQuantityCartItem.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.error
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.isSuccess = false
        state.isLoading = true
        state.message = ''
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.message = 'Delete product successfully'
        state.cartItems = action.payload.cartItems
        state.cartTotalQuantity = action.payload.cartTotalQuantity
        state.cartTotalAmount = action.payload.cartTotalAmount
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.error
      })
      .addCase(addToCart.pending, (state) => {
        state.isSuccess = false
        state.isLoading = true
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        enqueueSnackbar(action.payload.message, {
          variant: 'success',
        })
        state.isSuccess = true
        state.isLoading = false
        state.message = action.payload.message
        state.cartItems = action.payload.cartItems
        state.cartTotalQuantity = action.payload.cartTotalQuantity
        state.cartTotalAmount = action.payload.cartTotalAmount
      })
      .addCase(addToCart.rejected, (state, action) => {
        enqueueSnackbar(action.payload, {
          variant: 'error',
        })
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
  },
})
export default cartSlice.reducer
