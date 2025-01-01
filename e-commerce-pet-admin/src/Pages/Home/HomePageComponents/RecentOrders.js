import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const orders = [
    {
        id: '1',
        product: 'Nike Air',
        time: '10 min ago',
        price: '$654',
        img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
    },
    {
        id: '2',
        product: 'Cactus Plant',
        time: '10 min ago',
        price: '$654',
        img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
    },
    {
        id: '3',
        product: 'Minimal Pot',
        time: '10 min ago',
        price: '$654',
        img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
    },
    {
        id: '4',
        product: 'Adidas Blaze',
        time: '10 min ago',
        price: '$654',
        img: 'https://uko-react.vercel.app/static/products/shoe-3.png',
    },
]

const RecentOrders = () => {
    return (
        <Grid className="mt-5" container direction="column" spacing={2}>
            {orders.map((order, index) => (
                <Grid item key={index}>
                    <Box className="grid gap-2 sm:grid-cols-4 md:grid-cols-4 md:text-xs lg:grid-cols-10 xl:grid-cols-5 2xl:grid-cols-5">
                        <Box className="col-span-1 row-span-2">
                            <img
                                src={order.img}
                                alt={order.product}
                                className="h-full w-full rounded-full object-cover"
                            />
                        </Box>
                        <Box className="sm:col-span-2 md:col-span-2 md:text-xs lg:col-span-8 xl:col-span-3 2xl:col-span-3">
                            <Typography className=" text-sm font-semibold text-gray-600" variant="body1">
                                {order.product}
                            </Typography>
                            <Typography className=" text-xs text-gray-400" variant="caption">
                                {order.time}
                            </Typography>
                        </Box>
                        <Box className="col-span-1">
                            <Typography className="text-sm font-semibold text-gray-600" variant="body1">
                                {order.price}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default RecentOrders
