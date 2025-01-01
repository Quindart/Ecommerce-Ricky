import styled from '@emotion/styled'
import { Button as MuiButton } from '@mui/material'
import { theme } from '../../../Theme/theme'
const CustomButton = styled(MuiButton)`
    &.btn {
        color: ${theme.color.light_blue};
        text-transform: none;
        background-color: ${theme.color.white};
        font-size: 1rem;
        min-width: 6.376rem;
        min-height: 1.3125rem;
        padding: 10px 1.5rem;
        border-radius: 5px;
        transition: none;
        text-align: center;
        transition: 0.3s ease-in;
        &-none {
            min-width: auto;
            min-height: auto;
        }
        &-container-primary {
            color: ${theme.color.white};
            background-color: ${theme.color.light_blue};
            border: 2px solid ${theme.color.light_blue};
            &:hover {
                background-color: ${theme.color.dark_blue};
                border: 2px solid ${theme.color.dark_blue};
            }
        }
        &-container-yellow {
            color: ${theme.color.white};
            background-color: ${theme.color.orange};
            border: 2px solid ${theme.color.yellow};
            &:hover {
                background-color: ${theme.color.yellow};
                border: 2px solid ${theme.color.yellow};
            }
        }
        &-outline-primary {
            color: ${theme.color.gray_600};
            background-color: ${theme.color.white};
            border: 2px solid ${theme.color.gray_400};
            &:hover {
                border: 2px solid ${theme.color.light_blue};
                background-color: ${theme.color.gray_100};
            }
        }
        &-container-green {
            color: ${theme.color.white};
            background-color: ${theme.color.green};
            border: 2px solid ${theme.color.green};
            &:hover {
                background-color: ${theme.color.dark_green};
                border: 2px solid ${theme.color.dark_green};
            }
        }
        &-outline-green {
            color: ${theme.color.green};
            background-color: ${theme.color.white};
            border: 2px solid ${theme.color.green};
            &:hover {
                border: 2px solid ${theme.color.white};
                background-color: ${theme.color.green};
            }
        }
        &-container-grey {
            color: ${theme.color.gray_700};
            background-color: ${theme.color.blue_basic};
        }
        &-outline-grey {
            color: ${theme.color.gray_700};
            background-color: ${theme.color.white};
        }
        &-container-red {
            background-color: ${theme.color.pink_900};
            color: white;
        }
        &-outline-red {
            color: ${theme.color.pink_900};
            background-color: ${theme.color.white};
            transition: none !important;
        }
        &-sm {
            font-size: 0.75rem;
        }
        &-md {
            font-size: 1.2rem;
        }
        &-lg {
            font-size: 1.3rem;
            min-width: 304px;
            min-height: 21px;
            padding: 9.6px 24px;
        }
        &-container-grey-icon {
            background-color: ${theme.color.gray_500};
            color: white;
            min-width: 1em;
            min-height: 1em;
            display: inline-block;
            padding: 0.5rem;
            border-radius: 50%;
        }
        &-outline-grey-icon {
            color: ${theme.color.gray_600};
            background: none;
            min-width: 1em;
            min-height: 1em;
            display: inline-block;
            padding: 10px;
            border-radius: 50%;
            &:hover {
                background-color: ${theme.color.gray_300};
            }
        }
        &-container-primary-icon {
            background-color: ${theme.color.light_blue};
            color: white;
            min-width: 1em;
            min-height: 1em;
            display: inline-block;
            padding: 0.5rem;
            border-radius: 50%;
        }
        &-container-red-icon {
            background-color: ${theme.color.pink_900};
            color: ${theme.color.white};
            min-width: 1em;
            min-height: 1em;
            display: inline-block;
            padding: 0.5rem;
            border-radius: 50%;
        }
    }
`

export default CustomButton
