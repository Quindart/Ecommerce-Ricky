import React from 'react'
import { useSnackbar, SnackbarContent } from 'notistack'
import { Icon } from '@iconify/react'

const StyledMaterialDesignContent = React.forwardRef((props, ref) => {
    const { closeSnackbar } = useSnackbar()
    const handleCloseSnackbar = () => closeSnackbar(props.id)

    const {
        id,
        message,
        allowDownload,
        image,
        anchorOrigin,
        autoHideDuration,
        hideIconVariant,
        iconVariant,
        variant,
        ...other
    } = props

    // Define styles based on the variant
    const styles = {
        success: { color: '#73be2f' },
        warning: { color: '#ffc107' },
        error: { color: '#dc3545' },
        info: { color: '#17a2b8' },
    }

    // Define icon based on the variant
    const icons = {
        success: 'lets-icons:check-fill',
        warning: 'typcn:warning',
        error: 'fluent:error-circle-24-filled',
        info: 'lets-icons:info-alt-fill',
    }

    const color = styles[variant] || styles.success

    const icon = icons[variant] || icons.success

    return (
        <SnackbarContent
            ref={ref}
            role="alert"
            style={{ ...color, minWidth: 'auto' }}
            {...other}
        >
            <div className="snackbar">
                <Icon
                    style={{ ...color }}
                    icon={icon}
                    color="#fff"
                    width="20"
                    height="20"
                />
                <span className="snackbar__message">{message}</span>
                <Icon
                    className="snackbar__close"
                    onClick={handleCloseSnackbar}
                    icon="mingcute:close-fill"
                    color="#0052b1"
                />
            </div>
        </SnackbarContent>
    )
})

export default StyledMaterialDesignContent
