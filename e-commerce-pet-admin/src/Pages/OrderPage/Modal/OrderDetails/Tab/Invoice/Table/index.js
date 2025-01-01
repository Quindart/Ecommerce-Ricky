import React, { useState } from 'react'
import Table from '../../../../../../../Components/ui/Table/Table'
import { COLOR } from '../../../../../../../Utils/Constants'
import { Box } from '@mui/material'

function TableInvoice() {
    const rows = [
        { id: '1', name: 'Nike airmax 270', quantity: 15, price: '$760', total: '850' },
        { id: '2', name: 'Nike airmax 270', quantity: 15, price: '$760', total: '850' },
        { id: '3', name: 'Nike airmax 270', quantity: 15, price: '$760', total: '850' },
    ]
    const columns = [
        {
            field: 'name',
            headerName: 'Product',
            flex: 0.7,
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
        {
            field: 'price',
            headerName: 'Price',
            flex: 0.5,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            flex: 0.5,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
        {
            field: 'total',
            headerName: 'Total',
            flex: 0.5,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => <strong style={{ color: COLOR.dark_indigo }}>{params.value}</strong>,
        },
    ]

    const [page, setPage] = useState(1)
    const handleChangePanigation = (event, value) => {
        setPage(value)
    }
    return (
        <Table
            hasPanigation
            sx={{ width: '100%' }}
            columns={columns}
            rows={rows}
            rowHeight={54}
            totalPage={3}
            pageSize={3}
            currentPage={page}
            handleChangePanigation={handleChangePanigation}
        />
    )
}

export default TableInvoice
