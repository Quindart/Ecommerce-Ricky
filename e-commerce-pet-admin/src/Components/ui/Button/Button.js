import React from 'react'
import CustomButton from './styles.js'

function Button(props) {
    const { children, size = 'sm', className, icon, color = '', variant = 'container', ...rest } = props
    return (
        <CustomButton
            {...rest}
            className={`btn ${className} btn-${variant} btn-${variant}-${color} ${
                icon && `btn-${variant}-${color}-icon`
            }   btn-${size}`}
        >
            {children}
        </CustomButton>
    )
}

export default Button
