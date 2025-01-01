import Axios from 'axios'
import { APP_ROUTER } from '../Utils/Constants'
import { tokenService } from './token.services'

// DEBUG
const isDebug = process.env.NODE_ENV !== 'production'

const client = Axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 3000,
})

client.interceptors.request.use(
    (config) => {
        if (config.headers) {
            const service = tokenService()
            const refreshToken = service.getLocalRefreshToken()

            config.headers['Authorization'] = `Bearer ${refreshToken}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

client.interceptors.response.use(
    function (response) {
        if (response && response.data) {
            return response.data
        }
    },
    async (error) => {
        const originalConfig = error.config
        if (originalConfig.url !== APP_ROUTER.LOGIN && error.response) {
            if (error.response.status === 403 && !originalConfig._retry) {
                originalConfig._retry = true
                try {
                    const serviceToken = tokenService()
                    const rs = await client.post(APP_ROUTER.REFRESH_TOKEN, {
                        refreshToken: serviceToken.getLocalRefreshToken,
                    })
                    const { accessToken } = rs.data
                    serviceToken.updateLocalAccessToken(accessToken)
                    return client(originalConfig)
                } catch (error) {
                    Promise.reject(error)
                }
            }
        }
        return Promise.reject(error.response.data)
    },
)

export default client
