import { createTheme } from '@mui/material/styles'
import '@fontsource/montserrat'

const color = {
    green_600: '#38a169',
    green_200: '#c6f6d5',

    indigo: '#405189',
    dark_indigo: '#364574',
    white: '#ffffff',
    gray: '#878a99',
    gray_light: '#f3f3f9',
    gray_dark: '#343a40',
    gray_100: '#f3f6f9',
    gray_200: '#eff2f7',
    gray_300: '#e9ebec',
    gray_400: '#ced4da',
    gray_500: '#adb5bd',
    gray_600: '#878a99',
    gray_700: '#495057',
    gray_800: '#343a40',
    gray_900: '#212529',
    black: '#000000',
    green: '#0ab39c',
    dark_green: '#099885',
    light_green: '#dbecf0',
    blue_basic: '#eef7fe',
    blue: '#3577f1',
    light_blue: '#2499EF',
    dark_blue: '#196BA7',
    light_sky: '#abb9e8',
    jade: '#27ce88',
    badge_blue: '#2499ef',
    // red: '#ff316f',
    light_pink: '#ffe8ef',
    purple: '#6559cc',
    pink: '#f672a7',
    pink_900: '#ff316f',
    red: '#f06548',
    dark_red: '#cc563d',
    orange: '#f1963b',
    yellow: '#f7b84b',
    dark_yellow: '#c6933c',
    teal: '#02a8b5',
    cyan: '#299cdb',
}

export const theme = createTheme({
    color: color,
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
})
