import React, { Fragment } from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

function AttributePage() {
    return (
        <Fragment>
            <Box className="w-full">
                <Outlet />
            </Box>
        </Fragment>
    )
}

export default AttributePage
