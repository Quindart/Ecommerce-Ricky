import { Icon } from '@iconify/react'
import { Box, DialogActions, DialogTitle } from '@mui/material'
import { Fragment } from 'react'
import CustomModal from './style'
import { APP_ICON } from '../../../Utils/Constants'
import Button from '../Button/Button'
function Modal(props) {
    const { onClose, fullWidth, maxWidth, open, children, className, ...restProps } = props

    return (
        <Fragment>
            <CustomModal
                className={`${className}`}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={onClose}
                {...restProps}
            >
                <Box className="modal__body relative">
                    <Box sx={{ position: 'absolute', right: 5, top: 5, cursor: 'pointer' }} onClick={onClose}>
                        <Icon width={20} icon={APP_ICON.i_close} />
                    </Box>
                    {children}
                </Box>
            </CustomModal>
        </Fragment>
    )
}

export default Modal
