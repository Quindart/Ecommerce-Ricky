import React from 'react'
import { useSnackbar, SnackbarContent } from 'notistack'
import { Box } from '@mui/material'

function CustomVariantSnackbar(props, ref) {
    const { closeSnackbar } = useSnackbar()
    const handleCloseSnackbar = () => closeSnackbar(id)
    const { id, message, allowDownload, image, ...other } = props
    return (
        <SnackbarContent ref={ref} role="alert" {...other}>
            <Box className="flex w-full items-center justify-between rounded-lg border-black bg-orange-400 p-2 text-black">
                {message}
                <button className="cursor-pointer text-xl text-white" onClick={handleCloseSnackbar}>
                    Close
                </button>
            </Box>
        </SnackbarContent>
    )
}

export default React.forwardRef(CustomVariantSnackbar)
