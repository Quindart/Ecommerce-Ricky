import React from 'react'
import Table from '../../../Components/ui/Table/Table'
import { BadgeWrapper } from '../../../Components/ui/Badge/Badge'
import { Box, Typography } from '@mui/material'

const rows = [
    {
        id: '1',
        date: 'Jan 10, 2024',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Beef Dog Food',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Amazon lins',
        },
        price: 60000,
        brand: 'Jolly Pet',
        category: 'Food',
        status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
    },
    {
        id: '2',
        date: 'Jan 10, 2024',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Beef Dog Food',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Amazon lins',
        },
        price: 60000,
        brand: 'Jolly Pet',
        category: 'Food',
        status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
    },
    {
        id: '3',
        date: 'Jan 10, 2024',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Beef Dog Food',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Amazon lins',
        },
        price: 60000,
        brand: 'Jolly Pet',
        category: 'Food',
        status: <BadgeWrapper badgeContent={'Available'} shape="square" type="green_text"></BadgeWrapper>,
    },
    {
        id: '4',
        date: 'Jan 10, 2024',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Beef Dog Food',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Amazon lins',
        },
        price: 60000,
        brand: 'Jolly Pet',
        category: 'Food',
        status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
    },
    {
        id: '5',
        date: 'Jan 10, 2024',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Beef Dog Food',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Amazon lins',
        },
        price: 60000,
        brand: 'Jolly Pet',
        category: 'Food',
        status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
    },
    {
        id: '6',
        date: 'Jan 10, 2024',
        code: 'HLNBCKHJ',
        detail: {
            name: 'Beef Dog Food',
            img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
            desc: 'Amazon lins',
        },
        price: 60000,
        brand: 'Jolly Pet',
        category: 'Food',
        status: <BadgeWrapper badgeContent={'Out of Stock'} shape="square" type="red_text"></BadgeWrapper>,
    },
]
const columns = [
    {
        field: 'detail',
        headerName: 'Product',
        flex: 2,
        renderCell: (params) => (
            <Box className="flex gap-3">
                <img className="h-[50px] w-[50px]" src={params.formattedValue.img} alt="" />
                <Box>
                    <Typography className="text-[14px] font-bold text-gray-600">
                        {params.formattedValue.name}
                    </Typography>
                    <Typography variant="h10" className="font-500 text-gray-[#5f748d]">
                        {params.formattedValue.desc}
                    </Typography>
                </Box>
            </Box>
        ),
    },
    {
        field: 'date',
        headerName: 'Date',
        flex: 1,
    },
    {
        field: 'category',
        headerName: 'Category',
        flex: 1,

        renderCell: (params) => (
            <Box className="font-500 rounded-3xl bg-[#f6f6f8] px-5 py-1">{params.formattedValue}</Box>
        ),
    },
    {
        field: 'brand',
        headerName: 'Brand',
        flex: 1,
    },

    {
        field: 'price',
        headerName: 'Price',
        flex: 1,
    },
    {
        field: 'status',
        headerName: 'Status',

        flex: 1,
        renderCell: (params) => <Box className="font-500 px-7 py-1">{params.row.status}</Box>,
    },
]

export const PopularProduct = () => {
    return <Table label="Popular Products" className="h-80 w-auto" columns={columns} rows={rows} />
}
