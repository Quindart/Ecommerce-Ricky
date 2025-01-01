import React from 'react'
import { BarChart } from '@mui/x-charts'
import { useMediaQuery } from '@mui/material'

const EarningsReport = () => {
    const chartSetting = {
        sx: {
            pb: 2,
            '& .MuiChartsAxis-root > .MuiChartsAxis-line': {
                stroke: 'none',
            },
            ' & .MuiChartsAxis-tickContainer > .MuiChartsAxis-tick': {
                stroke: 'none',
            },
        },
    }
    const dataset = [
        {
            data: 15000,
            month: 'Jan',
        },
        {
            data: 4500,
            month: 'Feb',
        },
        {
            data: 12000,
            month: 'Mar',
        },
        {
            data: 5000,
            month: 'Apr',
        },
        {
            data: 7500,
            month: 'May',
        },
        {
            data: 13000,
            month: 'Jun',
        },
        {
            data: 3000,
            month: 'Jul',
        },
        {
            data: 12000,
            month: 'Aug',
        },
        {
            data: 7500,
            month: 'Sep',
        },
        {
            data: 10000,
            month: 'Oct',
        },
        {
            data: 5500,
            month: 'Nov',
        },
        {
            data: 15000,
            month: 'Dec',
        },
    ]

    const isSmallScreen = useMediaQuery('(max-width:600px)')

    return (
        <BarChart
            dataset={dataset}
            {...(isSmallScreen
                ? {
                      yAxis: [{ scaleType: 'band', dataKey: 'month', categoryGapRatio: 0.7, barGapRatio: 7 }],
                  }
                : {
                      xAxis: [{ scaleType: 'band', dataKey: 'month', categoryGapRatio: 0.7, barGapRatio: 7 }],
                  })}
            series={[{ dataKey: 'data', color: '#2499EF' }]}
            layout={isSmallScreen ? 'horizontal' : 'vertical'}
            {...chartSetting}
        />
    )
}

export default EarningsReport
