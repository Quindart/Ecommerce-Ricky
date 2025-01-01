import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

function Progress() {
    return (
        <Box className="fixed top-0 z-50" sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    )
}

export default Progress
