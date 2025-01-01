import { Box, Typography } from '@mui/material'
import React from 'react'
import { Card } from '../styles'
import { UserForm } from './UserForm'
export const SEARCH_ENUM = {
    ADMIN: 'admin',
    USER: 'user',
    WAREHOUSE: 'warehouse',
}

function UserAddPage() {
    return (
        <Box sx={Card} className="mx-auto max-w-[580px] justify-center px-8 py-9" mx={2} mb={3} mt={1}>
            <Typography
                style={{ fontWeight: 'bold', fontSize: '20px', color: '#374151 ' }}
                marginBottom="15px"
                variant="h7"
            >
                Add User
            </Typography>
            <Box>
                <UserForm />
            </Box>
        </Box>
    )
}

export default UserAddPage
