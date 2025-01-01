import React, { useState, useEffect } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import { BadgeWrapper } from '../../../Components/ui/Badge/Badge'
import Rating from '@mui/material/Rating'
import Modal from '../../../Components/ui/Modal/Modal'
import SearchBar from '../../../Components/ui/Search/SearchBar'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTER } from '../../../Utils/Constants'
import { CircularProgress } from '@mui/joy'
import Dropdown from '../../../Components/ui/Dropdown/Dropdown'
import Title from '../../../Components/ui/Title/Title'
import { CustomListAttribute } from './style'
import Edit from '../Modal/Edit'
import Add from '../Modal/Add'
export const SEARCH_ENUM = {
    NAME: 'name',
    CODE: 'code',
}
const RENDER_LIST_ATTRIBUTE_ENUM = {
    ALL: 'all',
    FILTER: 'filter',
    SEARCH: 'search',
}
const list = [
    { title: 'Name', value: SEARCH_ENUM.NAME },
    { title: 'Code', value: SEARCH_ENUM.CODE },
]
export const    AttributeList = () => {
    const navigate = useNavigate()
    const [openEdit, setOpenEdit] = useState({ isOpen: false, attribute_id: '' })

    const [value, setValue] = React.useState(2)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isActiveModalOpen, setIsActiveModalOpen] = useState(false)

    const handleOpenEditModal = (id, option) => {
        setOpenEdit({ isOpen: true, attribute_id: id, size: option })
    }

    const handleCloseEditModal = () => {
        setOpenEdit({ isOpen: false })
    }

    const handleOpenActiveModal = () => {
        setIsActiveModalOpen(true)
    }

    const handleCloseActiveModal = () => {
        setIsActiveModalOpen(false)
    }
    const [attributes, setAttributes] = useState([])
    const [loading, setLoading] = useState(false)
    console.log('attributes', attributes)
    const fetchAttributes = async () => {
        setLoading(true)
        try {
            const response = await fetch(
                'https://e-commerce-pet-server-quindarts.vercel.app/attributeProducts?limit=100&offset=1',
            )
            const json = await response.json()
            setAttributes(json.list.map((attribute) => ({ ...attribute, id: attribute._id })))
        } catch (error) {
            console.error('Failed to fetch attributes:', error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchAttributes()
    }, [])

    const columns = [
        {
            field: 'detail',
            headerName: 'Product',
            headerAlign: 'center',
            align: 'center',
            flex: 1.2,

            renderCell: (params) => (
                <Box className="flex">
                    <Box>
                        <Typography>{params.row.name}</Typography>
                    </Box>
                </Box>
            ),
        },

        {
            field: 'stock',
            headerName: 'Stock',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },

        {
            field: 'code',
            headerName: 'SKU',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },

        {
            field: 'value',
            headerName: 'Value',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },

        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <Button
                    onClick={() => {
                        handleOpenActiveModal(params.id, 'lg')
                    }}
                    className={`cursor-pointer rounded-[20px] ${
                        params.row.stock > 0
                            ? 'bg-emerald-100 px-3 py-1 text-green-600'
                            : 'bg-red-100 px-3 py-1 text-red-600'
                    }`}
                >
                    {params.row.stock > 0 ? 'Available' : 'Out of stock'}
                </Button>
            ),
        },
        {
            field: 'edit',
            headerName: 'Edit',
            headerAlign: 'center',
            align: 'center',
            flex: 0.7,
            renderCell: (params) => (
                <Box>
                    <Button
                        onClick={() => {
                            handleOpenEditModal(params.row.id)
                        }}
                        size="lg"
                        color="grey"
                        variant="outline"
                        icon
                    >
                        <Icon icon={APP_ICON.i_pen} className="text-sky-500" />
                    </Button>
                </Box>
            ),
        },
    ]
    return (
        <>
            <Table
                className="h-auto w-full"
                pageSize={6}
                hasCheckbox
                hasPanigation
                columns={columns}
                rows={attributes.map((attribute) => ({
                    id: attribute._id,
                    name: attribute.name,

                    code: attribute.code,
                    value: attribute.value,
                    stock: attribute.avaiable,

                    active: attribute.isActive,
                    // status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,

                    // edit: (
                    //     <Stack direction="row">
                    //         <Button
                    //             onClick={(handleOpenEditModal, 'md')}
                    //             className=""
                    //             size="md"
                    //             variant="outline"
                    //             color="grey"
                    //             icon
                    //         >
                    //             <Icon icon={APP_ICON.i_pen} />
                    //         </Button>
                    //     </Stack>
                    // ),
                }))}
            />
            <Modal open={openEdit.isOpen} onClose={handleCloseEditModal}>
                <Edit
                    attribute_id={openEdit.attribute_id}
                    fetchAttributes={fetchAttributes}
                    handleCloseEditModal={handleCloseEditModal}
                />
            </Modal>
        </>
    )
}

const AttributePage = () => {
    const navigate = useNavigate()
    const [isFetch, setIsFetch] = useState(false)
    const [query, setQuery] = useState('')
    const [keywords, setKeywords] = useState('')
    const [typeRender, setTypeRender] = useState(RENDER_LIST_ATTRIBUTE_ENUM.ALL)
    const [typeSearch, setTypeSearch] = useState(SEARCH_ENUM.NAME)
    const [page, setPage] = useState(1)
    const [openAdd, setOpenAdd] = useState({ isOpen: false })

    const handleQuery = (event) => {
        setQuery(event.target.value)
    }
    const hanldeClearChoiceSearchQuery = () => {
        setKeywords('')
        setTypeRender(RENDER_LIST_ATTRIBUTE_ENUM.ALL)
        setTypeSearch(SEARCH_ENUM.NAME)
        setPage(1)
    }
    const handleOpenAddModal = (option) => {
        setOpenAdd({ isOpen: true, size: option })
    }

    const handleCloseAddModal = () => {
        setOpenAdd({ isOpen: false })
    }

    return (
        <>
            <CustomListAttribute className="flew w-full flex-wrap text-gray-700">
                <Title icon="maki:warehouse">Attribute Table Manager</Title>
                <Box className="mb-5 flex w-full flex-wrap justify-between ">
                    <SearchBar
                        handleQuery={handleQuery}
                        query={keywords}
                        className=" p-[2px] lowercase"
                        placeholder={`Search by ${typeSearch} `}
                    />
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
                        <Button
                            onClick={() => {
                                handleOpenAddModal('lg')
                            }}
                            color="red"
                        >
                            Add
                            <Icon className="mx-[2px]" width={20} icon={APP_ICON.i_plus} />
                        </Button>
                        <Button color="green" disabled>
                            Export
                            <Icon className="mx-1" width={20} icon="ph:export" />
                        </Button>
                    </Box>
                    <Modal maxWidth={openAdd.size} open={openAdd.isOpen} onClose={handleCloseAddModal}>
                        <Add handleCloseAddModal={handleCloseAddModal} />
                    </Modal>
                </Box>

                {isFetch ? (
                    <Box>
                        <CircularProgress></CircularProgress>
                    </Box>
                ) : (
                    <AttributeList></AttributeList>
                )}
            </CustomListAttribute>
        </>
    )
}

export default AttributePage
