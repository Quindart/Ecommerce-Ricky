import styled from '@emotion/styled'
import { List } from '@mui/material'

export const CustomListMenu = styled(List)`
    & {
        .MuiButtonBase-root {
            border-radius: 8px;
            span {
                font-size: 13px;
                font-weight: 500;
            }
            .MuiListItemIcon-root {
                min-width: 30px;
            }
            &:hover,
            &:focus,
            &:hover svg,
            &:focus svg {
                color: #2a9cf0;
                background: #f2f9fe;
            }
        }
    }
`
