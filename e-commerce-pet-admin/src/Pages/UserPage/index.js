import { Box } from '@mui/material'
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

function UserPage() {
    return (
        <Fragment>
            <Box className="w-full">
                <Outlet />
            </Box>
        </Fragment>
    )
}

export default UserPage
