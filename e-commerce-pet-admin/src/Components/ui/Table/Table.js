import React from 'react'
import { CustomNoRowsOverlay, CustomTable } from './style'
import { Box, Pagination, Typography } from '@mui/material'

function Table(props) {
    const {
        hasCheckbox,
        hasPanigation,
        onChangeCol,
        onChangeRow,
        pageSize,
        currentPage = 1,
        totalPage,
        className,
        height,
        label,
        rowHeight = 80,
        handleChangePanigation,
        ...rest
    } = props
    return (
        <Box className="w-full">
            {label && <Typography className="text-[1rem] font-bold text-[#464f6c]">{label}</Typography>}
            <CustomTable
                {...rest}
                rowHeight={rowHeight}
                className={`${className} border-none`}
                checkboxSelection={hasCheckbox}
                // autoHeight={true}
                sx={{ height: rowHeight * (pageSize + 2) }}
                slots={{ noRowsOverlay: CustomNoRowsOverlay }}
                hideFooter
            />

            <Box display={'flex'} width={'full'} justifyContent={'end'} sx={{ mt: 2 }}>
                {hasPanigation && (
                    <Pagination
                        count={totalPage}
                        shape="rounded"
                        color="primary"
                        page={currentPage}
                        onChange={handleChangePanigation}
                    />
                )}
            </Box>
        </Box>
    )
}

export default Table
