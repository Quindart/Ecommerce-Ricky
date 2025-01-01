import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { Card } from './styles.js'
import Button from '../../Components/ui/Button/Button'
import { PopularProduct } from './HomePageComponents/PopularProducts.js'
import ProjectStatus from './HomePageComponents/ProjectStatus.js'
import EarningsReport from './HomePageComponents/EarningsReport.js'
import RecentOrders from './HomePageComponents/RecentOrders.js'
import ReportCards from './HomePageComponents/ReportCards.js'

function HomePage() {
    return (
        <Box className="box-border grid h-full max-h-max gap-7 2xl:grid-rows-5">
            <Box className="row-span-1 grid gap-7 sm:grid-rows-6 lg:grid-rows-2 xl:grid-rows-6 2xl:row-span-2 2xl:grid-cols-4 2xl:grid-rows-1 2xl:gap-y-0">
                <ReportCards></ReportCards>
                <Box
                    sx={Card}
                    className="max-h-[296px] sm:col-span-4 sm:row-span-2 lg:col-span-4 xl:col-span-4 xl:row-span-4 2xl:col-span-2 2xl:row-span-1"
                >
                    <Box className="text-sm font-bold text-gray-700"> Earnings Report</Box>
                    <EarningsReport></EarningsReport>
                </Box>
            </Box>
            <Box className="min-h-6 max-h-auto row-span-1 grid grid-cols-5 gap-7 2xl:row-span-3 2xl:grid-cols-3">
                <Box sx={Card} className="p-7 sm:col-span-5 lg:col-span-5 xl:col-span-3 2xl:col-span-2">
                    <PopularProduct />
                </Box>
                <Box sx={Card} className=" p-7 sm:col-span-5 lg:col-span-5 xl:col-span-2 2xl:col-span-1">
                    <ProjectStatus />
                </Box>
            </Box>
            <Box className="min-h-6 max-h-auto row-span-1 grid grid-cols-5 gap-7 2xl:row-span-3 2xl:grid-cols-3">
                <Box sx={Card} className="p-7 sm:col-span-5 lg:col-span-5 xl:col-span-3 2xl:col-span-2">
                    <PopularProduct />
                </Box>
                <Box sx={Card} className=" relative p-7 sm:col-span-5 lg:col-span-5 xl:col-span-2 2xl:col-span-1">
                    <Typography className="text-sm font-bold text-gray-700">Recent Orders</Typography>
                    <Box className="absolute right-0 top-6">
                        <Link to="/orders" className="no-underline">
                            <Button>View all</Button>
                        </Link>
                    </Box>
                    <RecentOrders></RecentOrders>
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage
