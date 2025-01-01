import styled from '@emotion/styled'
import { Dialog } from '@mui/material'

const CustomModal = styled(Dialog)`
    .MuiDialog-container {
        .MuiDialog-paper {
            align-items: center;
            width: 100%;
            margin: auto;
            &::-webkit-scrollbar {
                width: 8px !important;
            }

            &::-webkit-scrollbar-thumb {
                background-color: '#e9ebec';
                border-radius: 10px;
            }
            .modal__body {
                width: 100%;
                padding: 10px;
            }
        }
    }
`

export default CustomModal
