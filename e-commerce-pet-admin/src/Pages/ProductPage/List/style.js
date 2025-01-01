import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const CustomListProduct = styled(Box)`
    & .contain {
        width: 100%;
        &__left {
            @media (min-width: 1024px) {
                width: 30%;
            }
        }
        &__right {
            width: 100%;
            @media (min-width: 1024px) {
                width: 70%;
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
