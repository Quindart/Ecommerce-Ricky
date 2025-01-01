import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const CustomListAttribute = styled(Box)`
    & .contain {
        width: 100%;
        &__left,
        &__right {
            width: 100%;
            @media (min-width: 1024px) {
                width: 50%;
            }
        }
        &__right {
            margin: 1rem 0;
            @media (min-width: 1024px) {
                margin: 0;
            }
        }
    }
`
