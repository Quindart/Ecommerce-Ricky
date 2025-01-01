import { Box, Icon, Typography } from '@mui/material'
import React from 'react'
import TableInvoice from './Table'
import Button from '../../../../../../Components/ui/Button/Button'
import { COLOR } from '../../../../../../Utils/Constants'

function InvoiceTab(props) {
    const { children, value, order_details, index, ...other } = props
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            m={2}
        >
            <Box>
                <Box alignItems={'center'} display={'flex'} sx={{ fontWeight: 500 }}>
                    <Typography fontWeight="bold" fontSize={20}>
                        Invoice #{'\u00A0'}
                    </Typography>
                    <Typography fontSize={16} fontWeight="bold" color={'gray'}>
                        {order_details?.code}
                    </Typography>
                </Box>
                <Box className="mx-auto max-w-[580px] justify-center px-8 py-9" mx={2} mb={3} mt={1}>
                    <Box sx={{ fontWeight: 500 }} width="100%" display={'flex'} gap={2}>
                        <Box flex={1}>Bill to:</Box>
                        <Box flex={1} sx={{ textAlign: 'right' }}>
                            Bill from:
                        </Box>
                    </Box>
                    <Box width="100%" display={'flex'} gap={2}>
                        <Box sx={{ fontWeight: 500 }} flex={1}>
                            {order_details?.shipping_detail?.fullName}
                        </Box>
                        <Box flex={1} sx={{ textAlign: 'right' }}>
                            {order_details?.shipping_detail?.address?.detail}{' '}
                        </Box>
                    </Box>
                    <Box width="100%" display={'flex'} gap={2}>
                        <Box sx={{ color: COLOR.gray_600 }} flex={1}>
                            {order_details?.shipping_detail?.address?.detail}
                        </Box>
                        <Box flex={1} sx={{ textAlign: 'right' }}>
                            {order_details?.shipping_detail?.address?.district?.districtName}{' '}
                            {order_details?.shipping_detail?.address?.ward?.wardName}
                        </Box>
                    </Box>
                    <Box width="100%" display={'flex'} gap={2}>
                        <Box sx={{ color: COLOR.gray_600 }} flex={1}>
                            {order_details?.shipping_detail?.address?.district?.districtName}
                            {order_details?.shipping_detail?.address?.ward?.wardName}
                            {order_details?.shipping_detail?.address?.province?.provinceName}
                        </Box>
                        <Box flex={1} sx={{ textAlign: 'right' }}>
                            {order_details?.shipping_detail?.address?.province?.provinceName}
                        </Box>
                    </Box>
                    <Box my={1} width="100%" display={'flex'} gap={2}>
                        <Box flex={1}>
                            <Box display={'flex'}>
                                <Box sx={{ fontWeight: 500 }}> Issue Date:{'\u00A0'}</Box>
                                <Box sx={{ color: COLOR.gray_600 }}>
                                    {new Date(order_details?.dateCreated).toISOString().slice(0, 10)}
                                </Box>
                            </Box>
                        </Box>
                        <Box flex={1} sx={{ textAlign: 'right' }}></Box>
                    </Box>
                </Box>
                <TableInvoice />
                <Box display="flex" gap={20}>
                    <Box flex={1}>
                        <Box sx={{ fontWeight: 400 }} flex={1}>
                            <Box my={1} width="100%" display={'flex'} gap={2}>
                                <Box flex={1}>Subtotal</Box>
                                <Box flex={1} sx={{ textAlign: 'right' }}>
                                    $ 20,600
                                </Box>
                            </Box>
                            <Box my={1} width="100%" display={'flex'} gap={2}>
                                <Box flex={1}>Vat 0%</Box>
                                <Box flex={1} sx={{ textAlign: 'right' }}>
                                    $ 00.00
                                </Box>
                            </Box>
                            <Box my={1} width="100%" display={'flex'} gap={2}>
                                <Box flex={1}>Sub total 0%</Box>
                                <Box flex={1} sx={{ textAlign: 'right' }}>
                                    $ 20,600
                                </Box>
                            </Box>
                            <Box my={1} width="100%" display={'flex'} gap={2}>
                                <Box sx={{ fontWeight: 500 }} flex={1}>
                                    Total
                                </Box>
                                <Box flex={1} sx={{ textAlign: 'right' }}>
                                    $ 20,600
                                </Box>
                            </Box>
                            <Box width="100%" display={'flex'} gap={2}>
                                <Box display={'flex'}>
                                    <Box sx={{ fontWeight: 500 }}> Status</Box>
                                </Box>
                                <Box flex={1} sx={{ textAlign: 'right' }}>
                                    <Box sx={{ color: COLOR.gray_600 }}>{order_details?.status}</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        mt={4}
                        flex={1}
                        bgColor="red"
                        height={40}
                        display={'flex'}
                        gap={2}
                        justifyContent={'end'}
                        alignSelf="end"
                    >
                        <Button color="primary" variant="outline">
                            PDF
                        </Button>
                        <Button width="90%" type="submit" color="primary">
                            Print Invoice
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default InvoiceTab
