import React, { useState } from 'react'
import Table from '../../../Components/ui/Table/Table'
import { Box, Typography } from '@mui/material'
import Button from '../../../Components/ui/Button/Button'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Stack } from '@mui/material'
import { BadgeWrapper } from '../../../Components/ui/Badge/Badge'
import Rating from '@mui/material/Rating'
import OrderDetails from '../Modal/OrderDetails/index.js'
import Modal from '../../../Components/ui/Modal/Modal.js'

const TableOrder = (props) => {
    const { handleChangePanigation, renderTableOrder, totalPage, page } = props
    const [value, setValue] = React.useState(2)
    const [openOrderModal, setOpenOrderModal] = useState({ isOpen: false, order_id: '' })

    const handleOpenOrderDetails = (id, option) => {
        setOpenOrderModal({ isOpen: true, order_id: id, size: option })
    }

    const handleCloseOrderDetails = () => {
        setOpenOrderModal({ ...openOrderModal, isOpen: false })
    }
    const columns = [
        {
            field: 'detail',
            headerName: 'Order Number',
            flex: 1,
            renderCell: (params) => (
                <Box className="flex gap-3">
                    <Typography className="text-[14px] font-bold text-gray-600">{params.row.code}</Typography>
                </Box>
            ),
        },
        {
            field: 'shipping_detail.fullName',
            headerName: 'Customer',
            headerAlign: 'center',
            align: 'center',
            flex: 2,

            renderCell: (params) => (
                <Box className="text-[14px]  text-gray-600">
                    <span className="font-[600]">FullName : </span>
                    {'  '}
                    <span className="font-500 text-gray-700">{params.row.shipping_detail.fullName} </span>
                    <Box>
                        <span className="font-[600]">Phone : </span>
                        {'  '}
                        <span className="font-500 text-gray-700">{params.row.shipping_detail.phone} </span>
                    </Box>
                </Box>
            ),
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => <Box>{new Date(params.row.dateCreated).toISOString().slice(0, 10)}</Box>,
        },

        {
            field: 'totalOrderItem',
            headerName: 'Total Order Item',
            flex: 1.2,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => <Box>{params.row.totalOrderItem}</Box>,
        },
        {
            field: 'status',
            headerName: 'Status',
            headerAlign: 'center',
            align: 'center',
            flex: 1.2,
            renderCell: (params) => <Box className="font-500">{params.row.status}</Box>,
        },

        {
            field: 'edit',
            headerName: 'Edit',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => (
                <Box>
                    <Button
                        onClick={() => {
                            handleOpenOrderDetails(params.row.id, 'md')
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
                className="w-full"
                totalPage={totalPage}
                pageSize={6}
                currentPage={page}
                hasPanigation
                columns={columns}
                rows={renderTableOrder}
                handleChangePanigation={handleChangePanigation}
            />
            <Modal
                fullwidth={false}
                maxWidth={openOrderModal.size}
                onClose={handleCloseOrderDetails}
                open={openOrderModal.isOpen}
            >
                <OrderDetails
                    order_id={openOrderModal.order_id}
                    handleOpenOrderDetails={handleOpenOrderDetails}
                    handleCloseOrderDetails={handleCloseOrderDetails}
                />
            </Modal>
        </>
    )
}

export default TableOrder
