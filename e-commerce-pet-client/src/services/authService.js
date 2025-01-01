import axiosConfig from './axiosConfig'
// api register
const apiRegister = async (data) => {
  const response = await axiosConfig.post('/auth/register', data)
  return response
}
// api login

const apiLogin = async (data) => {
  const response = await axiosConfig.post('/auth/login', data)
  if (response) {
    localStorage.setItem('tokenList', JSON.stringify(response.tokenList))
  }
  return response
}

const apiGetUserById = (userId, accessToken) =>
  axiosConfig.get(`users/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
// api logout
const logout = () => {
  localStorage.removeItem('tokenList')
}

const authService = {
  apiRegister,
  logout,
  apiLogin,
  apiGetUserById,
}
export default authService
