import React, { Fragment, useEffect, useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON, COLOR } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import Avatar from '../../../Components/ui/Avatar/Avatar'
import EditRole from '../Modal/EditRole'
import Delete from '../Modal/Delete'
import EditUser from '../Modal/EditUser'
import Modal from '../../../Components/ui/Modal/Modal'
import Active from '../Modal/Active'
import client from '../../../services/api-context'

function TableUserManager(props) {
    const {
        handleChangePanigation,
        handleGetUsersByParams,
        currentPage,
        className = '',
        rows,
        totalPage,
        hasPanigation,
    } = props
    // console.log(rows)
    const [openEditRole, setOpenEditRole] = useState({ isOpen: false, role: '' })
    const [openEditUser, setOpenEditUser] = useState({ isOpen: false, user_id: '' })
    const [openDelete, setOpenDelete] = useState({ isOpen: false, user_id: '' })
    const [openActive, setOpenActive] = useState({ isOpen: false, user_id: '' })

    const handleOpenEditUserModal = (userId, addressId) => {
        setOpenEditUser({ isOpen: true, user_id: userId, address_id: addressId })
    }
    const handleCloseEditUserModal = () => {
        setOpenEditUser({ ...openEditUser, isOpen: false })
    }
    const handleOpenEditRoleModal = (role) => {
        setOpenEditRole({ isOpen: true, role: role })
    }
    const handleCloseEditRoleModal = () => {
        setOpenEditRole({ ...openEditRole, isOpen: false })
    }
    const handleOpenDeleteModal = (id) => {
        setOpenDelete({ isOpen: true, user_id: id })
    }
    const handleCloseDeleteModal = () => {
        setOpenDelete({ ...openDelete, isOpen: false })
    }
    const handleOpenActiveModal = (id) => {
        setOpenActive({ isOpen: true, user_id: id })
    }
    const handleCloseActiveModal = () => {
        setOpenActive({ ...openActive, isOpen: false })
    }

    const columns = [
        {
            field: 'details',
            headerName: 'User detail',
            flex: 1.3,
            renderCell: (params) => {
                let color
                switch (params.row.role) {
                    case 'admin':
                        color = 'purple-500'
                        break
                    case 'owner':
                        color = 'sky-600'
                        break
                    case 'warehouse':
                        color = 'orange-400'
                        break
                    default:
                        color = 'gray-500'
                }
                return (
                    <Box className="flex gap-2">
                        <Box>
                            <Avatar size="md" src={params.row.avatar?.url} />
                        </Box>
                        <Box>
                            <Typography className="text-sm font-[700] text-slate-600">
                                {params.row.first_name} {params.row.last_name}
                            </Typography>

                            <button className={`rounded-xl text-sm font-[500] text-${color}`}>
                                {params?.row?.role}
                            </button>
                        </Box>
                    </Box>
                )
            },
        },
        {
            field: 'gender',
            headerName: 'Gender',
            flex: 1,
            headerAlign: 'center',
            align: 'center',

            renderCell: (params) => {
                let color
                switch (params.row.gender) {
                    case 'MALE':
                        color = 'sky'
                        break
                    case 'FEMALE':
                        color = 'red'
                        break
                    case 'OTHER':
                        color = 'purple'
                        break
                    default:
                        color = 'gray'
                }
                return <Box className={`text-[14px] font-[500] text-${color}-500`}>{params.row.gender}</Box>
            },
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1.3,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => <Box className=" text-[14px] font-[500] text-slate-500">{params.row.email}</Box>,
        },
        {
            field: 'address',
            headerName: 'Address',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => <Box className="text-sm font-[500] text-slate-500">{params.row.address}</Box>,
        },

        {
            field: 'date',
            headerName: 'Date',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => <Box className="text-sm font-[500] text-slate-500">{params.row.dateOfBirth}</Box>,
        },

        {
            field: 'number',
            headerName: 'Phone Number',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => <Box className="text-sm font-[500] text-slate-500">{params.row.phone}</Box>,
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <Button
                    onClick={() => handleOpenActiveModal(params.id)}
                    className={`cursor-pointer rounded-[20px] ${
                        params.row.active
                            ? 'bg-emerald-100 px-3 py-1 text-green-600'
                            : 'bg-red-100 px-3 py-1 text-red-600'
                    }`}
                >
                    {params.row.active ? 'active' : 'unactive'}
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
                            handleOpenEditRoleModal(params?.row?.role)
                        }}
                        size="md"
                        color="grey"
                        variant="outline"
                        icon
                    >
                        <Icon icon="bytesize:user" className="text-purple-500" />
                    </Button>
                    <Button
                        onClick={() => handleOpenEditUserModal(params.id)}
                        size="md"
                        color="grey"
                        variant="outline"
                        icon
                    >
                        <Icon icon={APP_ICON.i_pen} className="text-sky-500" />
                    </Button>
                    <Button
                        onClick={() => handleOpenDeleteModal(params.id)}
                        size="md"
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
                    className={`${className}`}
                    page={currentPage}
                    totalPage={totalPage}
                    rows={rows}
                    handleChangePanigation={handleChangePanigation}
                    hasPanigation
                    pageSize={6}
                    columns={columns}
                />
            </Box>

            <Modal open={openEditRole.isOpen} onClose={handleCloseEditRoleModal}>
                <EditRole
                    handleGetUsersByParams={handleGetUsersByParams}
                    handleCloseEditRoleModal={handleCloseEditRoleModal}
                    role={openEditRole.role}
                />
            </Modal>
            <Modal open={openDelete.isOpen} onClose={handleCloseDeleteModal}>
                <Delete
                    handleGetUsersByParams={handleGetUsersByParams}
                    handleCloseDeleteModal={handleCloseDeleteModal}
                    id={openDelete.user_id}
                />
            </Modal>
            <Modal open={openEditUser.isOpen} onClose={handleCloseEditUserModal}>
                <EditUser
                    handleGetUsersByParams={handleGetUsersByParams}
                    handleCloseEditUserModal={handleCloseEditUserModal}
                    id={openEditUser.user_id}
                />
            </Modal>
            <Modal open={openActive.isOpen} onClose={handleCloseActiveModal}>
                <Active
                    currentPage={currentPage}
                    totalPage={totalPage}
                    handleGetUsersByParams={handleGetUsersByParams}
                    handleCloseActiveModal={handleCloseActiveModal}
                    id={openActive.user_id}
                />
            </Modal>
        </Fragment>
    )
}

export default TableUserManager
