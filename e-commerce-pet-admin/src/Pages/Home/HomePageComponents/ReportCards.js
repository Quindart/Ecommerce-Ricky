import React from 'react'
import { Box } from '@mui/material'
import { APP_ICON } from '../../../Utils/Constants'
import { Icon } from '@iconify/react'
import { Card } from '../styles'
const revenues = [
    {
        title: 'Revenue',
        amount: '$35,800',
        growth: '+10.23%',
        type: 'positive',
    },
    {
        title: 'Repeat Purchase',
        amount: '$12,900',
        growth: '+20.4%',
        type: 'positive',
    },
    {
        title: 'Average Order value',
        amount: '$1,000',
        growth: '-10.23%',
        type: 'negative',
    },
    {
        title: 'New Customers',
        amount: '143',
        growth: '-10.23%',
        type: 'negative',
    },
]

const ReportCards = ({ revenue }) => {
    return (
        <Box className="grid gap-7 sm:col-span-4 sm:row-span-4 lg:col-span-4 lg:grid-cols-2 lg:grid-rows-2 xl:col-span-4 xl:row-span-2 xl:grid-cols-4 xl:grid-rows-1 2xl:col-span-2 2xl:grid-cols-2 2xl:grid-rows-2">
            {revenues.map((revenue, index) => (
                <Box
                    key={index}
                    className="max-h-[134px] sm:col-span-4 sm:row-span-1 lg:col-span-1 xl:col-span-1 xl:row-span-1 2xl:col-span-1 2xl:row-span-1"
                    sx={{ ...Card, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <Box className="mb-2 text-sm  font-[500] text-[#5c6c87]">{revenue.title}</Box>
                    <Box className="my-1 text-2xl font-bold text-[#2f4365]">{revenue.amount}</Box>
                    <Box className="mt-3 flex items-center text-sm font-bold">
                        {revenue.type === 'positive' && (
                            <Box className="mr-1 rounded-full bg-[#e9faf3] p-1">
                                <Icon icon={APP_ICON.i_arrow_up} className="text-[#2acf8a]" />
                            </Box>
                        )}
                        {revenue.type === 'negative' && (
                            <Box className="mr-1 rounded-full bg-[#fff0f4] p-1">
                                <Icon icon={APP_ICON.i_arrow_down} className="text-[#ff7198]" />
                            </Box>
                        )}
                        <span className={revenue.type === 'positive' ? 'text-[#2acf8a]' : 'text-[#ff7198]'}>
                            {revenue.growth}
                        </span>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default ReportCards
