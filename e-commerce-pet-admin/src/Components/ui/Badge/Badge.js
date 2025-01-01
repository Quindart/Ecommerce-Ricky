import { ThemeProvider } from '@mui/material/styles'
import { createDynamicTheme, StyledBadge } from './style.js'

export function BadgeWrapper({ border, badgeContent, children, variant, anchorOrigin, type, shape, size }) {
    const theme = createDynamicTheme(type)

    return (
        <ThemeProvider theme={theme}>
            <StyledBadge
                color={type}
                max={999}
                badgeContent={badgeContent}
                overlap="circular"
                anchorOrigin={anchorOrigin}
                variant={variant}
                border={border}
                theme={theme}
                size={size}
            >
                {children}
            </StyledBadge>
        </ThemeProvider>
    )
}
