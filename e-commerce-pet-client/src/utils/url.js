export const getNewUrlByParams = (currentParams, filterParam) => {
    let newParams = { ...currentParams, ...filterParam }; 
    const paramSearch = new URLSearchParams(newParams);
    const pageShopUrl = "";
    const url = pageShopUrl + "?" + paramSearch;
    return url;
};

export const getNewUrlByRemovingParam = (currentParams, paramRemoved) => {
    const { [paramRemoved]: _, ...rest } = currentParams;
    const newParams = rest; 
    const paramSearch = new URLSearchParams(newParams);
    const pageShopUrl = "";
    const url = pageShopUrl + "?" + paramSearch;
    return url;
}

export const getNewUrlByPagination = (currentParams, pageIndex) => {
    const pageShopUrl = "/shop/page/";
    if (Object.keys(currentParams).length > 0) {
        const paramSearch = new URLSearchParams(currentParams);
        const url = pageShopUrl + pageIndex + "?" + paramSearch;
        return url;
    } else {
        return pageShopUrl + pageIndex;
    }
};

