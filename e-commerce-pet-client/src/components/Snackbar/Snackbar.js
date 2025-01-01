import React from 'react'
import { useSnackbar, SnackbarContent } from 'notistack'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

function CustomVariantSnackbar(props, ref) {
  const { closeSnackbar } = useSnackbar()
  const handleCloseSnackbar = () => closeSnackbar(id)
  const {
    id,
    message,
    allowDownload,
    image,
    anchorOrigin,
    autoHideDuration,
    hideIconVariant,
    iconVariant,
    ...other
  } = props
  return (
    <SnackbarContent ref={ref} role="alert" {...other}>
      <div className="snackbar">
        <Icon
          icon="lets-icons:check-fill"
          color="#73be2f"
          width="20"
          height="20"
        />
        <span className="snackbar__message">{message}</span>

        <Link className="snackbar__link" href={'/'}>
          View Cart
        </Link>
        <Icon
          className="snackbar__close"
          onClick={handleCloseSnackbar}
          icon="mingcute:close-fill"
          color="#0052b1"
        />
      </div>
    </SnackbarContent>
  )
}

export default React.forwardRef(CustomVariantSnackbar)
