import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <Box>
            <main className=" w-full overflow-hidden">
                <Outlet />
            </main>
        </Box>
    )
}

export default AuthLayout
