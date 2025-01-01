import React, { Fragment, useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box } from '@mui/material'
import { APP_ICON } from '../../../Utils/Constants'
import Button from '../../../Components/ui/Button/Button'
import { Icon } from '@iconify/react'
import Modal from '../../../Components/ui/Modal/Modal'
import Edit from '../Modal/Edit'
import Delete from '../Modal/Delete'
import Active from '../Modal/Active'

function TableCategory(props) {
    const { handleChangePanigation, page, rows, totalPage } = props
    console.log(rows)
    const [openCategory, setOpenCategory] = useState({ isOpen: false, category_id: '' })
    const [openDelete, setOpenDelete] = useState({ isOpen: false, category_id: '' })
    const [openActive, setOpenActive] = useState({ isOpen: false, category_id: '' })

    const handleOpenEditModal = (id) => {
        setOpenCategory({ isOpen: true, category_id: id })
        console.log('id', id)
    }
    const handleCloseEditModal = () => {
        setOpenCategory({ ...openCategory, isOpen: false })
    }
    const handleOpenDeleteModal = (id) => {
        setOpenDelete({ isOpen: true, category_id: id })
    }
    const handleCloseDeleteModal = () => {
        setOpenDelete({ ...openDelete, isOpen: false })
    }
    const handleOpenActiveModal = (id) => {
        setOpenActive({ isOpen: true, category_id: id })
    }
    const handleCloseActiveModal = () => {
        setOpenActive({ ...openActive, isOpen: false })
    }
    const columns = [
        {
            field: 'name',
            headerName: 'Category name',
            flex: 2,
            renderCell: (params) => <Box className="text-[15px] font-[800] text-slate-600">{params.row.name}</Box>,
        },
        {
            field: 'code',
            headerName: 'Code',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <Box className="rounded-3xl bg-slate-200 px-5 py-1 font-[600] text-slate-500">
                    {params.formattedValue}
                </Box>
            ),
        },
        {
            field: 'total',
            headerName: 'Total',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },

        {
            field: 'description',
            headerName: 'Description',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
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
            field: 'action',
            headerName: 'Action',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => (
                <Box>
                    <Button
                        onClick={() => {
                            handleOpenEditModal(params.id)
                        }}
                        size="lg"
                        color="grey"
                        variant="outline"
                        icon
                    >
                        <Icon icon={APP_ICON.i_pen} className="text-sky-500" />
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
            <Modal open={openCategory.isOpen} onClose={handleCloseEditModal}>
                <Edit
                    sx={{ width: '100%' }}
                    category_id={openCategory.category_id}
                    handleCloseEditModal={handleCloseEditModal}
                />
            </Modal>
            <Modal open={openDelete.isOpen} onClose={handleCloseDeleteModal}>
                <Delete category_id={openDelete.category_id} handleCloseDeleteModal={handleCloseDeleteModal} />
            </Modal>
            <Modal open={openActive.isOpen} onClose={handleCloseActiveModal}>
                <Active category_id={openActive.category_id} handleCloseActiveModal={handleCloseActiveModal} />
            </Modal>
        </Fragment>
    )
}

export default TableCategory
