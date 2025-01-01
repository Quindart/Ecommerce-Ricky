import React, { Fragment } from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

function CategoryPage() {
    return (
        <Fragment>
            <Box className="w-full">
                <Outlet />
            </Box>
        </Fragment>
    )
}

export default CategoryPage
