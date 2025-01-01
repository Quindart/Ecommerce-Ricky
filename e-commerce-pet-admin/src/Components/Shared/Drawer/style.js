import styled from '@emotion/styled'
import { Box, Drawer } from '@mui/material'

export const CustomDrawer = styled(Box)`
    & {
        min-width: 86px;
        .drawer__menu .btn__openNav,
        .drawer__menu .group__title .title {
            display: none;
        }

        .drawer__menu--hover {
            background-color: white;
            width: 86px;
            overflow: hidden;
            transition: 0.2s all;

            .drawer__menu h6 {
                display: none;
            }

            &:hover {
                width: 280px;
                position: fixed;
                z-index: 1200;
                transform: scaleX(1);
            }
            &:hover .btn__openNav {
                display: block;
            }
            &:hover .group__title .title {
                display: block;
            }
        }
        .drawer__menu--open {
            position: relative;
            background-color: white;
            width: 280px;
            z-index: 1200;
            transition: 0.2s all;
            .btn__openNav,
            .group__title .title {
                display: block;
            }
        }
        .MuiModal-backdrop {
            background-color: rgba(0, 0, 0, 0);
        }
    }
`
