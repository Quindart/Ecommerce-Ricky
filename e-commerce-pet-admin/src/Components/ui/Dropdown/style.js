import { makeStyles } from 'tss-react/mui'
import { theme } from '../../../Theme/theme'

export default makeStyles()(() => ({
    root: {
        width: '100%',
    },
    label: {
        fontSize: '1.2rem',
        fontWeight: '600',
        // marginTop: theme.spacing(2),
    },
    dropdown: {
        fontSize: '1rem',
        borderColor: '#9cb0c4',
        borderRadius: 6,
        width: '100%',
        textAlign: 'start',
        '&.Mui-focused .MuiOutlinedInput-notchedOutline ': {
            borderColor: theme.color.light_blue,
            label: { color: 'black' },
        },
    },
    sm: {
        '.MuiSelect-select': { height: '1.2rem', padding: '12px' },
    },
    md: {
        height: '3.5em',
        padding: '5px',
    },
    lg: {
        height: '4.5em',
        padding: '15px',
    },
}))
