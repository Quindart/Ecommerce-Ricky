import { Box } from '@mui/material'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ProductContext from './context'

function ProductPage() {
    //category
    //attribute product
    const [context, setContext] = useState('default')

    const handleContext = useCallback((value) => {
        setContext(value)
    }, [])
    const contextProduct = useMemo(() => ({ handleContext, context }), [handleContext, context])
    return (
        <ProductContext.Provider value={contextProduct}>
            <Box>
                <Outlet />
            </Box>
        </ProductContext.Provider>
    )
}

export default ProductPage
