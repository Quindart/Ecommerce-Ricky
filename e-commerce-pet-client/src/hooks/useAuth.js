import { createAsyncThunk } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import authService from 'services/authService'

export const useUser = () => {
  const userId = useSelector((state) => state?.auth?.user?.user?.id)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await authService.apiGetUserById(userId)
        setUser(response.user)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUser()
  }, [userId])

  return user
}

// register
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, thunkApi) => {
    try {
      return await authService.apiRegister(user)
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)
// login
export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
  try {
    return await authService.apiLogin(user)
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})

// logout
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const useAuth = {
  signUp,
  login,
  logout,
  useUser,
}
