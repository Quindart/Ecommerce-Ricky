import { Icon } from '@iconify/react'
import { Box, Typography } from '@mui/material'
import React from 'react'

function Title(props) {
    const { className, icon, children, color, ...rest } = props
    return (
        <Box {...rest} className={`flex items-center gap-2 ${className}`}>
            {icon && (
                <Box className="flex h-[40px] w-[40px] items-center justify-center rounded-sm bg-[#e5f3fd]">
                    <Icon className="text-[#2499ef]" width={20} icon={`${icon}`} />
                </Box>
            )}
            <Typography className="font-bold text-gray-700">{children}</Typography>
        </Box>
    )
}

export default Title
