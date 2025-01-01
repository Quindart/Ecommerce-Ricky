import * as React from 'react'
import MuiTabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

export default function Tabs({ tabs, className }) {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: '100%' }} className={className}>
            <Box>
                <MuiTabs variant="scrollable" value={value} onChange={handleChange} aria-label="tabs">
                    {tabs.map((tab, index) => (
                        <Tab sx={{ textTransform: 'none' }} disableRipple label={tab.label} key={index} />
                    ))}
                </MuiTabs>
            </Box>
            {tabs.map((tab, index) => (
                <CustomTabPanel value={value} index={index} key={index}>
                    {tab.component}
                </CustomTabPanel>
            ))}
        </Box>
    )
}
