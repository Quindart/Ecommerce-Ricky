import React from 'react'
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material'
import DetailOrderTab from './Detail'
import InvoiceTab from './Invoice'

const ENUM_VALUE = {
    DETAILS: 'DETAILS',
    INVOICE: 'INVOICE',
}

function TabOrder({ order_details }) {
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const [value, setValue] = React.useState(0)
    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Order Details" />
                <Tab label="Invoice" /> 
            </Tabs>
            <DetailOrderTab value={value} index={0} order_details={order_details} />
            <InvoiceTab value={value} index={1} order_details={order_details} />
        </>
    )
}

export default TabOrder
