export function formatTableCategory(list) {
    if (!list) {
        return []
    }
    return list.map((category) => ({
        ...category,
        id: category._id,
    }))
}

export function formatTableUser(list) {
    if (!list) {
        return []
    }
    return list.map((user) => ({
        ...user,
        id: user._id,
    }))
}

export function formatTableProduct(list) {
    if (!list) {
        return []
    }
    return list.map((product) => ({
        ...product,
        id: product._id,
    }))
}

export function formatTableOrder(list) {
    if (!list) return []
    return list.map((order) => ({ ...order, id: order._id }))
}
