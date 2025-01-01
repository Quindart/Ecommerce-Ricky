import { redirect } from 'react-router'
import { APP_ROUTER } from '../../Utils/Constants'

export const loaderUser = () => {
    if (!localStorage.getItem('tokenList')) {
        throw redirect(APP_ROUTER.LOGIN)
    }
    if (localStorage.getItem('tokenList')) {
        throw redirect(APP_ROUTER.HOME)
    }
    return null
}
