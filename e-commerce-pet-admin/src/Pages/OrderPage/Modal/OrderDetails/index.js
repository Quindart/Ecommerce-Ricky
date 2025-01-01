import React, { useEffect, useState } from 'react'
import { apiGetOrderById } from '../../../../services/api-order'
import TabOrder from './Tab'
import { Box, CircularProgress } from '@mui/material'

function OrderDetails({ handleOpenOrderDetails, handleCloseOrderDetails, order_id }) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        apiGetOrderById(order_id).then((res) => {
            setData(res.order)
            setLoading(false)
            console.log(res)
        })
    }, [])

    return (
        <Box>
            {loading ? (
                <Box display="flex" alignItems="center" justifyContent="center" height={100}>
                    <CircularProgress />
                </Box>
            ) : (
                <TabOrder order_details={data} />
            )}
        </Box>
    )
}

export default OrderDetails
