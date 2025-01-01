import styled from '@emotion/styled'
import { theme } from '../../../Theme/theme'
import { TextField } from '@mui/material'

export const TextFieldCustomMUI = styled(TextField)`
    &.textfield {
        width: 100%;
        .MuiInputLabel-root {
            color: #9cb0c4;
            font-size: 1.1rem;
            &.Mui-focused {
                font-weight: bold;
                color: ${theme.color.light_blue};
                .MuiOutlinedInput-notchedOutline {
                    border-color: ${theme.color.light_blue};
                }
                &.Mui-error {
                    color: ${theme.color.pink_900};
                    .MuiOutlinedInput-notchedOutline {
                        border-color: ${theme.color.pink_900};
                    }
                }
            }
            &.Mui-error {
                color: ${theme.color.pink_900};
                .MuiOutlinedInput-notchedOutline {
                    border-color: ${theme.color.pink_900};
                }
            }
        }
        .MuiInputLabel-shrink {
            color: ${theme.color.gray_600};
            font-weight: bold;
        }
        .MuiInputBase-root {
            font-weight: 500;
            border-radius: 0.4rem;
            .MuiOutlinedInput-notchedOutline {
                border-color: #9cb0c4;
            }
            &.Mui-disabled {
                background-color: ${theme.color.gray_300};
                -webkit-text-fill-color: ${theme.color.light_blue};
            }
            &.Mui-error {
                color: ${theme.color.pink_900};
                .MuiOutlinedInput-notchedOutline {
                    border-color: ${theme.color.pink_900};
                }
            }
            &.Mui-focused {
                .MuiOutlinedInput-notchedOutline {
                    border-color: ${theme.color.light_blue};
                }
                &.Mui-error {
                    color: ${theme.color.pink_900};
                    .MuiOutlinedInput-notchedOutline {
                        border-color: ${theme.color.pink_900};
                    }
                }
            }
        }
        p {
            color: ${theme.color.pink_900};
        }
        &-icon {
            .MuiButtonBase-root svg {
                color: #9cb0c4;
            }
            .MuiInputBase-root {
                padding-left: 2rem;
                &.Mui-focused {
                    .MuiOutlinedInput-notchedOutline {
                        border-color: #b0c0d0;
                        border-width: 1px;
                    }
                }
                &:hover fieldset {
                    border-color: #b0c0d0;
                }
            }
        }
        &-sm .MuiInputBase-root {
            height: 2.5em;
            padding: 5px;
        }
        &-md .MuiInputBase-root {
            height: 3.5em;
            padding: 5px;
        }
        &-lg .MuiInputBase-root {
            height: 4.5em;
            padding: 15px;
        }
    }
`
