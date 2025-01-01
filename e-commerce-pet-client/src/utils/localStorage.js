export const getFromLocalStorage = (key) => {
    return localStorage.getItem(`${key}`);
}

export const setLocalStorage = (key, value) => {
    return localStorage.setItem(`${key}`, value);
}