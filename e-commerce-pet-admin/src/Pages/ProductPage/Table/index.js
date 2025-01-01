import React, { Fragment, useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import { BadgeWrapper } from '../../../Components/ui/Badge/Badge'
import Rating from '@mui/material/Rating'
import Edit from '../Modal/Edit'
import Delete from '../Modal/Delete'
import Active from '../Modal/Active'
import Modal from '../../../Components/ui/Modal/Modal'
const TableProductList = (props) => {
    const [openEdit, setOpenEdit] = useState({ isOpen: false, product_id: '' })
    const [openDelete, setOpenDelete] = useState({ isOpen: false, product_id: '' })
    const [openActive, setOpenActive] = useState({ isOpen: false, product_id: '' })

    const handleOpenEditModal = (id, option) => {
        setOpenEdit({ isOpen: true, product_id: id, size: option })
    }
    const handleCloseEditModal = () => {
        setOpenEdit({ ...openEdit, isOpen: false })
    }
    const handleOpenDeleteModal = (id) => {
        setOpenDelete({ isOpen: true, product_id: id })
    }
    const handleCloseDeleteModal = () => {
        setOpenDelete({ ...openDelete, isOpen: false })
    }
    const handleOpenActiveModal = (id) => {
        setOpenActive({ isOpen: true, product_id: id })
    }
    const handleCloseActiveModal = () => {
        setOpenActive({ ...openActive, isOpen: false })
    }

    const { handleChangePanigation, page, rows, totalPage } = props
    console.log(rows)
    const [value, setValue] = React.useState(5)

    const columns = [
        {
            field: 'detail',
            headerName: 'Product',
            flex: 1.5,
            renderCell: (params) => (
                <Box className="group flex cursor-pointer gap-2 transition-colors">
                    <img className="h-[50px] w-[50px] object-cover" src={params.row.images[0].url} alt="" />
                    <Box>
                        <Typography className="text-[13px] font-[600] text-gray-600  group-hover:text-sky-600">
                            {params.row?.name}
                        </Typography>
                        <Typography className="text-[11px] font-[500] text-gray-500 group-hover:text-sky-600">
                            {params.row?.description}
                        </Typography>
                    </Box>
                </Box>
            ),
        },
        {
            field: 'tags',
            headerName: 'Tags',
            flex: 0.8,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'brand',
            headerName: 'Brand',
            flex: 0.8,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1.1,
            renderCell: (params) => (
                <Typography className="text-[13px] text-gray-600  group-hover:text-sky-600">
                    {params.row?.category?.name}
                </Typography>
            ),
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'avaiable',
            headerName: 'Stock',
            flex: 0.5,
            headerAlign: 'center',
            align: 'center',
        },

        {
            field: 'code',
            headerName: 'SKU',
            flex: 0.8,
            headerAlign: 'center',
            align: 'center',
        },

        {
            field: 'price',
            headerName: 'Price',
            flex: 0.5,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'rating',
            headerName: 'Rating',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => (
                <Rating
                    readOnly
                    name="read-only"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                />
            ),
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
                        handleOpenActiveModal(params.id)
                    }}
                    className={`cursor-pointer rounded-[20px] ${
                        params.row.isActive
                            ? 'bg-emerald-100 px-3 py-1 text-green-600'
                            : 'bg-red-100 px-3 py-1 text-red-600'
                    }`}
                >
                    {params.row.isActive ? 'active' : 'unactive'}
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
                            handleOpenEditModal(params.id, 'lg')
                        }}
                        size="lg"
                        color="grey"
                        variant="outline"
                        icon
                    >
                        <Icon icon={APP_ICON.i_eye_open} className="text-sky-500" />
                    </Button>
                    <Button
                        onClick={() => handleOpenDeleteModal(params.id)}
                        size="lg"
                        color="grey"
                        variant="outline"
                        icon
                    >
                        <Icon icon="mdi:bin-outline" className="text-red-400" />
                    </Button>
                </Box>
            ),
        },
    ]
    const defaultImageUrl = ''
    return (
        <Fragment>
            <Box>
                <Table
                    hasPanigation
                    className="w-full"
                    columns={columns}
                    rows={rows}
                    totalPage={totalPage}
                    pageSize={6}
                    currentPage={page}
                    handleChangePanigation={handleChangePanigation}
                />
            </Box>

            <Modal maxWidth={openEdit.size} open={openEdit.isOpen} onClose={handleCloseEditModal}>
                <Edit product_id={openEdit.product_id} handleCloseEditModal={handleCloseEditModal} />
            </Modal>
            <Modal open={openDelete.isOpen} onClose={handleCloseDeleteModal}>
                <Delete product_id={openDelete.product_id} handleCloseDeleteModal={handleCloseDeleteModal} />
            </Modal>
            <Modal open={openActive.isOpen} onClose={handleCloseActiveModal}>
                <Active product_id={openActive.product_id} handleCloseActiveModal={handleCloseActiveModal} />
            </Modal>
        </Fragment>
    )
}

export default TableProductList
