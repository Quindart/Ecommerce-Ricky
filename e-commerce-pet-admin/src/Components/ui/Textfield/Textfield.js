import { Box, IconButton, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import { APP_ICON, COLOR } from '../../../Utils/Constants'
import { useState } from 'react'
import { TextFieldCustomMUI } from './style'

function Textfield(props) {
    const {
        className,
        inputcss,
        type = 'text',
        label,
        variant = 'container',
        helperText,
        error,
        value,
        defaultValue,
        icon,
        size = 'xl',
        ...rest
    } = props
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const helperTextValue = error ? helperText : ''
    return (
        <Box className={`${className}`}>
            <Box className="relative">
                <TextFieldCustomMUI
                    label={label}
                    type={showPassword ? 'text' : type}
                    className={`textfield w-full textfield-${variant} text-${type} textfield-${size} `}
                    error={error}
                    {...rest}
                    value={value}
                    defaultValue={defaultValue}
                />
                {type === 'password' && (
                    <IconButton
                        className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? <Icon icon={APP_ICON.i_eye_open} /> : <Icon icon={APP_ICON.i_eye_off} />}
                    </IconButton>
                )}
            </Box>
            {error && (
                <Typography className="Mui-error mt-3 text-[14px]" sx={{ color: COLOR.pink_900 }}>
                    {helperTextValue}
                </Typography>
            )}
        </Box>
    )
}

export default Textfield
