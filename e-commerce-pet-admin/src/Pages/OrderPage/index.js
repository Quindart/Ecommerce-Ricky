import React, { Fragment } from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

function OrderPage() {
    return (
        <Fragment>
            <Box className="w-full">
                <Outlet />
            </Box>
        </Fragment>
    )
}

export default OrderPage
