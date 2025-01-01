import axios from 'axios'

export const baseURL =
  'https://e-commerce-pet-server-git-dev-quindarts-projects.vercel.app'

const axiosConfig = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})
axiosConfig.defaults.headers.common['Content-Type'] = 'application/json'
axiosConfig.interceptors.request.use(
  (config) => {
    const userToken = JSON.parse(localStorage.getItem('tokenList'))
    const accessToken = userToken?.accessToken

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosConfig.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    const userToken = JSON.parse(localStorage.getItem('tokenList'))

    const originalRequest = error.config

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = userToken.refreshToken
        const response = await axiosConfig.post('/auth/accessToken-generate', {
          refreshToken,
        })
        const accessToken = response.accessToken

        // Update the token in localStorage
        userToken.accessToken = accessToken
        localStorage.setItem('tokenList', JSON.stringify(userToken))

        // Update the Authorization header with the new token
        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        // Retry the original request with the updated token
        return axiosConfig(originalRequest)
      } catch (error) {
        return Promise.reject(error)
      }
    }

    return Promise.reject(error.response.data)
  }
)

export default axiosConfig
