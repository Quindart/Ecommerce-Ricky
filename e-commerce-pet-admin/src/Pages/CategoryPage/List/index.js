import React, { Fragment, useEffect, useState } from 'react'
import TableCategory from '../Table'
import { Box, CircularProgress } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import SearchBar from '../../../Components/ui/Search/SearchBar'
import { CustomListCategory } from './style'
import { formatTableCategory } from '../../../Utils/helper'
import { useNavigate } from 'react-router-dom'
import { APP_ICON, APP_ROUTER } from '../../../Utils/Constants'
import Title from '../../../Components/ui/Title/Title'
import useCategory from '../../../hook/api/category'
import { Icon } from '@iconify/react'
import { TYPE_OF_RENDER } from '../../../store/category.slice'

export const SEARCH_ENUM = {
    NAME: 'name',
    CODE: 'code',
}
const RENDER_LIST_CATEGORY_ENUM = {
    ALL: 'all',
    FILTER: 'filter',
    SEARCH: 'search',
}
const list = [
    { title: 'Name', value: SEARCH_ENUM.NAME },
    { title: 'Code', value: SEARCH_ENUM.CODE },
]
function ListCategoryPage() {
    const [page, setPage] = useState(1)
    const [keywords, setKeywords] = useState('')
    const [typeRender, setTypeRender] = useState(RENDER_LIST_CATEGORY_ENUM.ALL)
    const [typeSearch, setTypeSearch] = useState(SEARCH_ENUM.NAME)
    const navigate = useNavigate()
    const { renderTableCategory, isFetch, totalPage, handleGetAllCategoryByParams, handleSearchCategory } =
        useCategory()

    useEffect(() => {
        switch (typeRender) {
            case RENDER_LIST_CATEGORY_ENUM.SEARCH:
                console.log('searching ...')
                handleSearchCategory(keywords, typeSearch, 6, page)
                break
            case RENDER_LIST_CATEGORY_ENUM.ALL:
                handleGetAllCategoryByParams(6, page)
                break
            default:
                console.log('hi')
                break
        }
    }, [typeRender, page, keywords, typeSearch])

    const hanldeClearChoiceSearchQuery = () => {
        setKeywords('')
        setTypeRender(RENDER_LIST_CATEGORY_ENUM.ALL)
        setTypeSearch(SEARCH_ENUM.NAME)
        setPage(1)
    }
    const handleChangePanigation = (event, value) => {
        setPage(value)
    }
    const handleQuery = (event) => {
        setTypeRender(TYPE_OF_RENDER.SEARCH)
        setKeywords(event.target.value)
    }
    return (
        <Fragment>
            <CustomListCategory className="flew w-full flex-wrap text-gray-700">
                <Title icon="maki:warehouse">Category Table Manager</Title>
                <Box className="contain my-3 flex flex-wrap">
                    <Box className="contain__left h-[2.5rem] ">
                        <SearchBar
                            handleQuery={handleQuery}
                            query={keywords}
                            className=" p-[2px] lowercase"
                            placeholder={`Search by ${typeSearch} `}
                        />
                    </Box>
                    <Box className="contain__right flex h-[2.5rem] flex-wrap justify-end gap-2">
                        <Dropdown
                            className="w-[6rem]"
                            size="sm"
                            list={list}
                            onChange={(e) => setTypeSearch(e.target.value)}
                        />
                        <Button color="primary">
                            Filter
                            <Icon className="mx-1" width={20} icon="fluent-mdl2:filter-descending" />
                        </Button>
                        <Button color="yellow" onClick={hanldeClearChoiceSearchQuery}>
                            Clear
                            <Icon className="mx-1" width={20} icon="ant-design:clear-outlined" />
                        </Button>
                        <Button onClick={() => navigate(APP_ROUTER.CATEGORY_ADD)} color="red">
                            Add
                            <Icon className="mx-[2px]" width={20} icon={APP_ICON.i_plus} />
                        </Button>
                        <Button color="green" disabled>
                            Export
                            <Icon className="mx-1" width={20} icon="ph:export" />
                        </Button>
                    </Box>
                </Box>
                <Box className="my-5 w-full">
                    {isFetch ? (
                        <Box display="flex" alignItems="center" justifyContent="center" height={500}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <TableCategory
                            className="w-97"
                            page={page}
                            totalPage={totalPage}
                            rows={formatTableCategory(renderTableCategory)}
                            handleChangePanigation={handleChangePanigation}
                        />
                    )}
                </Box>
            </CustomListCategory>
        </Fragment>
    )
}

export default ListCategoryPage
