export const tokenService = () => {
    function getLocalRefreshToken() {
        const tokenList = JSON.parse(localStorage.getItem('tokenList'))
        return tokenList?.refreshToken
    }

    function getLocalAccessToken() {
        const tokenList = JSON.parse(localStorage.getItem('tokenList'))
        return tokenList?.accessToken
    }

    function updateLocalAccessToken(token) {
        let tokenList = JSON.parse(localStorage.getItem('tokenList'))
        tokenList.accessToken = token
        localStorage.setItem('tokenList', JSON.stringify(tokenList))
    }

    function removetokenList() {
        localStorage.removeItem('tokenList')
    }
    function setTokenList(tokenList) {
        localStorage.setItem('tokenList', JSON.stringify(tokenList))
    }
    function getTokenList() {
        localStorage.getItem('tokenList')
    }
    return {
        getLocalRefreshToken,
        getLocalAccessToken,
        updateLocalAccessToken,
        removetokenList,
        setTokenList,
        getTokenList,
    }
}
