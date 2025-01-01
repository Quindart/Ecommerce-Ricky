import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Avatar from '../../../../../../Components/ui/Avatar/Avatar'
import useUser from '../../../../../../hook/api/user'

function DetailOrderTab(props) {
    const { children, value, order_details, index, ...other } = props
    const { user, handleGetUserById } = useUser()
    const userId = order_details?.user_id
    useEffect(() => {
        handleGetUserById(userId)
    }, [])

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box ml={2} display={'flex'} mt={2} mb={1} alignItems={'center'} gap={1}>
                <Typography fontWeight="bold" fontSize={20}>
                    Order Info
                </Typography>
                <Typography fontSize={16} fontWeight="bold" color={'gray'}>
                    # {order_details?.code}
                </Typography>
            </Box>
            <Box>
                <Box minHeight={160} width={'100%'} justifyContent={'center'} display={'flex'} gap={5} px={4}>
                    <Box display="flex" gap={2}>
                        <Box>
                            <Avatar size="lg" alt="User Avatar" border={true} src={user?.user_detail?.avatar?.url} />
                        </Box>
                        <Box>
                            <Typography fontSize={14} fontWeight="600">
                                {order_details?.shipping_detail?.fullName}
                            </Typography>{' '}
                            <Typography fontSize={12} color="gray">
                                {order_details?.shipping_detail?.email}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: 'left' }} width="w-1/4-gap-5">
                        <Typography mb={2} fontSize={14} fontWeight="bold">
                            Order From
                        </Typography>
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            {order_details?.shipping_detail?.fullName}
                        </Typography>
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            {order_details?.shipping_detail?.address?.country}
                        </Typography>{' '}
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            + {order_details?.shipping_detail?.phone}
                        </Typography>
                    </Box>
                    <Box sx={{ justifyContent: 'center', textAlign: 'left' }} width="w-1/4-gap-5">
                        <Typography mb={2} fontSize={14} fontWeight="bold">
                            Payment Method
                        </Typography>
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            VNPAY
                        </Typography>{' '}
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            Total Order : {order_details?.totalOrderItem}
                        </Typography>{' '}
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            Status: {order_details?.status}
                        </Typography>
                    </Box>
                    <Box sx={{ justifyContent: 'center', textAlign: 'left' }} width="w-1/4-gap-5">
                        <Typography mb={2} fontSize={14} fontWeight="bold">
                            Billing Address
                        </Typography>
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            ZipCode : {'   '} {order_details?.shipping_detail?.address?.zipCode},
                        </Typography>{' '}
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            Detail: {order_details?.shipping_detail?.address?.detail},
                        </Typography>{' '}
                        <Typography fontSize={14} mb={1} fontWeight="500">
                            Country:{'   '} {order_details?.shipping_detail?.address?.country}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DetailOrderTab
