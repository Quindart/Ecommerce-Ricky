import React, { useState, useEffect } from 'react'
import { Box, CircularProgress } from '@mui/material'
import Button from '../../../Components/ui/Button/Button.js'
import SearchBar from '../../../Components/ui/Search/SearchBar.js'
import { APP_ICON, APP_ROUTER } from '../../../Utils/Constants.js'
import { useNavigate } from 'react-router-dom'
import TableProductList from '../Table/index.js'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown.js'
import { Icon } from '@iconify/react'
import { CustomListProduct } from './style.js'
import Title from '../../../Components/ui/Title/Title.js'
import useProduct from '../../../hook/api/product.js'
import { formatTableProduct } from '../../../Utils/helper.js'
import useDebounce from '../../../hook/ui/useDebounce.js'
import { TYPE_OF_RENDER } from '../../../store/product.slice.js'

export const SEARCH_ENUM = {
    NAME: 'name',
    CODE: 'code',
}

const RENDER_LIST_PRODUCT_ENUM = {
    ALL: 'all',
    FILTER: 'filter',
    SEARCH: 'search',
}
export const FILTER_ENUM = {
    HIGH_PRICE: 'high_price',
    LOW_PRICE: 'low_price',
    NAME_A_Z: 'a_z',
    NAME_Z_A: 'z_a',
    BEST_RATING: 'best_rating',
    LOWER_RATING: 'lower_rating',
    MOST_AVAIABLE: 'most_avaiable',
}
const listSearch = [
    { title: 'Name', value: SEARCH_ENUM.NAME },
    { title: 'Code', value: SEARCH_ENUM.CODE },
]
const listFilter = [
    { title: 'Name A-Z', value: FILTER_ENUM.NAME_A_Z },
    { title: 'Name Z-A', value: FILTER_ENUM.NAME_Z_A },
    { title: 'High Price', value: FILTER_ENUM.HIGH_PRICE },
    { title: 'Lower Price', value: FILTER_ENUM.LOW_PRICE },
    {
        title: 'Best Rating',
        value: FILTER_ENUM.BEST_RATING,
    },
    {
        title: 'Lower Rating',
        value: FILTER_ENUM.LOWER_RATING,
    },
    {
        title: 'Most Avaiable',
        value: FILTER_ENUM.MOST_AVAIABLE,
    },
]

const ListProductPage = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [keywords, setKeywords] = useState('')
    const [typeRender, setTypeRender] = useState(RENDER_LIST_PRODUCT_ENUM.ALL)
    const [typeSearch, setTypeSearch] = useState(SEARCH_ENUM.NAME)
    const [typeFilter, setTypeFilter] = useState(FILTER_ENUM.NAME_A_Z)

    const {
        renderTableProduct,
        isFetch,
        totalPage,
        handleGetAllProductByParams,
        handleSearchProduct,
        handleFilterProduct,
    } = useProduct()
    const debounceKeywords = useDebounce(keywords, 800)
    const filterParams = {
        offset: page,
        limit: 6,
        sortField: '',
        sortType: '',
        categoryId: '',
        brand: '',
        distancePrice: '',
        tags: '',
        keywords: '',
        searchType: '',
        color: '',
    }

    useEffect(() => {
        switch (typeRender) {
            case RENDER_LIST_PRODUCT_ENUM.SEARCH:
                handleSearchProduct(keywords, typeSearch, 6, page)
                break
            case RENDER_LIST_PRODUCT_ENUM.ALL:
                handleGetAllProductByParams(page, 6)
                break
            case RENDER_LIST_PRODUCT_ENUM.FILTER:
                if (typeFilter === FILTER_ENUM.NAME_A_Z) {
                    filterParams.sortField = 'name'
                    handleFilterProduct(filterParams)
                } else if (typeFilter === FILTER_ENUM.NAME_Z_A) {
                    filterParams.sortField = 'name'
                    filterParams.sortType = 'desc'
                    handleFilterProduct(filterParams)
                } else if (typeFilter === FILTER_ENUM.HIGH_PRICE) {
                    filterParams.sortField = 'price'
                    filterParams.sortType = 'desc'
                    handleFilterProduct(filterParams)
                } else if (typeFilter === FILTER_ENUM.LOW_PRICE) {
                    filterParams.sortField = 'price'
                    handleFilterProduct(filterParams)
                } else if (typeFilter === FILTER_ENUM.BEST_RATING) {
                    filterParams.sortField = 'rating'
                    filterParams.sortType = 'desc'
                    handleFilterProduct(filterParams)
                } else if (typeFilter === FILTER_ENUM.LOWER_RATING) {
                    filterParams.sortField = 'rating'
                    handleFilterProduct(filterParams)
                } else if (typeFilter === FILTER_ENUM.MOST_AVAILABLE) {
                }
                break
            default:
                console.log('hi')
                break
        }
    }, [debounceKeywords, page, typeSearch, typeRender, typeFilter])

    const handleClearChoiceSearchQuery = () => {
        setKeywords('')
        setTypeRender(RENDER_LIST_PRODUCT_ENUM.ALL)
        setTypeSearch(SEARCH_ENUM.NAME)
        setTypeFilter(FILTER_ENUM.NAME_A_Z)
        setPage(1)
    }

    const handleChangePanigation = (event, value) => {
        setPage(value)
    }

    const handleQuery = (event) => {
        setTypeRender(TYPE_OF_RENDER.SEARCH)
        setKeywords(event.target.value)
    }
    const handleFilterChange = (event) => {
        setTypeRender(RENDER_LIST_PRODUCT_ENUM.FILTER)
        setTypeFilter(event.target.value)
    }
    return (
        <CustomListProduct>
            <Title icon={APP_ICON.i_bell}>Product Table Manager</Title>
            <Box className="contain mb-5 flex flex-wrap items-end">
                <Box className="contain__left flex">
                    <SearchBar
                        handleQuery={handleQuery}
                        query={keywords}
                        className="h-[47px] p-[2px] lowercase"
                        placeholder={`Search by ${typeSearch} `}
                    />
                </Box>

                <Box className="contain__right flex flex-wrap items-end justify-end gap-2">
                    <Dropdown
                        label="Search type"
                        className="w-[10rem]"
                        size="sm"
                        list={listSearch}
                        onChange={(e) => setTypeSearch(e.target.value)}
                    />
                    <Dropdown
                        label="Filter by"
                        className="w-[10rem]"
                        size="sm"
                        list={listFilter}
                        onChange={handleFilterChange}
                    />

                    <Button className=" h-[47px]" color="primary">
                        Filter
                        <Icon className="mx-1" width={20} icon="fluent-mdl2:filter-descending" />
                    </Button>
                    <Button className=" h-[47px]" color="yellow" onClick={handleClearChoiceSearchQuery}>
                        Clear
                        <Icon className="mx-1" width={20} icon="ant-design:clear-outlined" />
                    </Button>
                    <Button className=" h-[47px]" onClick={() => navigate(APP_ROUTER.ADD_PRODUCT)} color="red">
                        Add
                        <Icon className="mx-[2px]" width={20} icon={APP_ICON.i_plus} />
                    </Button>
                    <Button className=" h-[47px]" color="green" disabled>
                        Export
                        <Icon className="mx-1" width={20} icon="ph:export" />
                    </Button>
                </Box>
            </Box>
            {isFetch ? (
                <Box display="flex" alignItems="center" justifyContent="center" height={500}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box className="my-5 w-full">
                    <TableProductList
                        page={page}
                        totalPage={totalPage}
                        rows={formatTableProduct(renderTableProduct)}
                        handleChangePanigation={handleChangePanigation}
                    />
                </Box>
            )}
        </CustomListProduct>
    )
}

export default ListProductPage
