import styled from '@emotion/styled'
import Box from '@mui/material/Box'

export const StyledBox = styled(Box)`
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(243, 244, 249, 0.5);
        backdrop-filter: blur(4px);
        z-index: -1;
    }
`
