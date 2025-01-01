import React, { useState, useEffect, useRef } from 'react'
import 'tailwindcss/tailwind.css'
import { APP_ICON } from '../../../Utils/Constants'
import { Box } from '@mui/material'
import { Icon } from '@iconify/react'
import Button from '../Button/Button'

function SearchBar(props) {
    const { placeholder, className, onSearch, handleQuery, query, ...rest } = props
    return (
        <Box {...rest} className={`flex h-auto w-96 items-center rounded-lg border-2 bg-white ${className}`}>
            <Box className="flex items-center pl-2 pr-1">
                <Button size="lg" color="grey" variant="outline" icon>
                    <Icon icon={APP_ICON.i_search} />
                </Button>
            </Box>
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onBlur={(event) => handleQuery(event)}
                onChange={(event) => handleQuery(event)}
                className={`h-full  w-full flex-1 px-2 outline-none`}
            />
            <Box className="flex cursor-pointer items-center pl-1 pr-2">
                <span className="iconify h-6 w-6 text-gray-800" icon={APP_ICON.i_close} />
            </Box>
        </Box>
    )
}

export default SearchBar
