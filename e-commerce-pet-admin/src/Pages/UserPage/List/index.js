import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { useNavigate } from 'react-router-dom'
import TableUserManager from '../Table'
import Title from '../../../Components/ui/Title/Title'
import SearchBar from '../../../Components/ui/Search/SearchBar'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON, APP_ROUTER } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { CustomListUser } from './style'
import client from '../../../services/api-context'
import { formatTableUser } from '../../../Utils/helper'
import { CircularProgress } from '@mui/material'
const SEARCH_ENUM_USER = {
    NAME: 'name',
    CODE: 'code',
    EMAIL: 'email',
    PHONE: 'phone number',
}
const list = [
    { title: 'Name', value: SEARCH_ENUM_USER.NAME },
    { title: 'Code', value: SEARCH_ENUM_USER.CODE },
    { title: 'Email', value: SEARCH_ENUM_USER.EMAIL },
    { title: 'Phone', value: SEARCH_ENUM_USER.PHONE },
]
function ListUserPage() {
    const [totalPage, setTotalPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [keywords, setKeywords] = useState('')
    const [typeRender, setTypeRender] = useState('')
    const [typeSearch, setTypeSearch] = useState('')
    const navigate = useNavigate()
    const handleChangePanigation = (event, value) => {
        setCurrentPage(value)
    }
    const handleQuery = (event) => {
        setKeywords(event.target.value)
    }
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const handleGetUsersByParams = async () => {
        setLoading(true)
        try {
            const response = await client.get(`/users?limit=${totalPage}&offset=${currentPage}`)
            console.log(response)
            setUsers(formatTableUser(response.listUser))
        } catch (error) {
            console.error('Failed to fetch users:', error)
            if (error.response) {
                console.error('Response data:', error.response.data)
                console.error('Response status:', error.response.status)
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleGetUsersByParams()
    }, [currentPage])

    return (
        <CustomListUser className="flew w-full flex-wrap">
            <Title icon="simple-line-icons:user">User Table Manager</Title>
            <Box className="contain my-3 flex w-full flex-wrap">
                <Box className="contain__left flex h-[2.5rem] justify-between">
                    <SearchBar
                        handleQuery={handleQuery}
                        query={keywords}
                        className=" p-[2px] lowercase"
                        placeholder={`Search by ${typeSearch} `}
                    />
                </Box>
                <Box className="contain__right flex h-[2.5rem] flex-wrap justify-end gap-2">
                    <Dropdown
                        className="w-[7rem]"
                        size="sm"
                        list={list}
                        onChange={(e) => setTypeSearch(e.target.value)}
                    />
                    <Button color="primary">
                        Filter
                        <Icon className="mx-1" width={19} icon="fluent-mdl2:filter-descending" />
                    </Button>
                    <Button color="yellow">
                        Clear
                        <Icon className="mx-1" width={19} icon="ant-design:clear-outlined" />
                    </Button>
                    <Button onClick={() => navigate(APP_ROUTER.USER_ADD)} color="red">
                        Add
                        <Icon className="mx-[2px]" width={19} icon={APP_ICON.i_plus} />
                    </Button>
                    <Button color="green" disabled>
                        Export
                        <Icon className="mx-1" width={19} icon="ph:export" />
                    </Button>
                </Box>
            </Box>
            <Box className="my-5 w-full">
                {loading ? (
                    <Box display="flex" alignItems="center" justifyContent="center" height={500}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <TableUserManager
                        rows={users.map((user) => ({
                            id: user.id,
                            first_name: user.first_name,
                            last_name: user.last_name,
                            email: user.email,
                            address: user.address[0]?.province?.provinceName,
                            active: user.isActive,
                            avatar: user.avatar,
                            role: user.role,
                            number: user.number,
                            gender: user.gender ? user.gender : 'Unknown',
                            dateOfBirth: new Date(user.dateOfBirth).toISOString().slice(0, 10),
                            phone: user.phone,
                            edit: (
                                <Button className="" size="md" variant="outline" color="grey" icon>
                                    <Icon icon={APP_ICON.i_pen} />
                                </Button>
                            ),
                        }))}
                        totalPage={totalPage}
                        currentPage={currentPage}
                        handleGetUsersByParams={handleGetUsersByParams}
                        handleChangePanigation={handleChangePanigation}
                    />
                )}
            </Box>
        </CustomListUser>
    )
}

export default ListUserPage
