import { APP_ROUTER } from '../Utils/Constants'
import client from './api-context'

export const login = async (data) => {
    return client.post(APP_ROUTER.LOGIN, data)
}
export const register = async (data) => {
    return client.post(APP_ROUTER.REGISTER, data)
}
