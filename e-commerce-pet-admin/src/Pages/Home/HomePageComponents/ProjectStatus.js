import React from 'react'
import { Box, Typography } from '@mui/material'
import Chart from 'react-apexcharts'

const data = [50, 30, 20, 40]
const labels = ['Transactions', 'Payouts', 'Sales', 'Reports']
const colors = ['#2499EF', '#8C8DFF', '#FFC675', '#8CA3BA']

const options = {
    tooltip: {
        enabled: true,
        fillSeriesColor: true,
    },
    responsive: [
        {
            breakpoint: 440,
            options: {
                chart: {
                    width: 300,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
        {
            breakpoint: 500,
            options: {
                chart: {
                    width: 400,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },

        {
            breakpoint: 600,
            options: {
                chart: {
                    width: 400,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
        {
            breakpoint: 900,
            options: {
                chart: {
                    width: 400,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },

        {
            breakpoint: 1200,
            options: {
                chart: {
                    width: 400,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
        {
            breakpoint: 1367,
            options: {
                chart: {
                    width: 400,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
        {
            breakpoint: 1536,
            options: {
                chart: {
                    width: 400,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
        {
            breakpoint: 1921,
            options: {
                chart: {
                    width: 400,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
    ],
    chart: {
        type: 'donut',
    },
    labels: labels,
    colors: colors,
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '65%',
            },
        },
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        onItemHover: {
            highlightDataSeries: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
}

const ProjectStatus = () => {
    return (
        <Box className="relative flex h-full w-full flex-col items-center justify-center">
            <Typography className="font-semibold">Project Status</Typography>
            <Box className="mt-4">
                <Chart options={options} series={data} type="donut" className="mx-auto" />
            </Box>
            <Box className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <Typography className="sm:text-md mb-2 font-semibold text-gray-400 lg:text-sm">Avg Range</Typography>
                <Typography className="ml-3 font-semibold sm:text-3xl lg:text-3xl">140</Typography>
            </Box>
        </Box>
    )
}

export default ProjectStatus
