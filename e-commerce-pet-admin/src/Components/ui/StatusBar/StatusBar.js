import { useLayoutEffect, useRef } from 'react'
import { theme } from '../../../Theme/theme'
import { StatusBarStyle } from './style.js'
import { Box } from '@mui/material'

const StatusBar = (props) => {
    const { status, className, variant = 'green', style = 'row', ...rest } = props
    const statusRef = useRef()

    useLayoutEffect(() => {
        if (status < 40) {
            statusRef.current.style.background = theme.color.red
        } else if (status < 70) {
            statusRef.current.style.background = theme.color.yellow
        } else {
            if (variant === 'green') statusRef.current.style.background = theme.color.green
            if (variant === 'blue') statusRef.current.style.background = theme.color.blue
        }
        statusRef.current.style.width = `${status}%`

        return () => {}
    }, [status])

    return (
        <StatusBarStyle {...rest} className={`status-bar ${className} status-bar-${variant} `}>
            <Box
                ref={statusRef}
                className={`status-bar-fill rounded-2 h-full rounded-[0.7rem] transition-[width] duration-500 ease-in-out  `}
            ></Box>
        </StatusBarStyle>
    )
}

export default StatusBar
