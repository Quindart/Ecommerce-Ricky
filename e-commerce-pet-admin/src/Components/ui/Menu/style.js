import { COLOR } from '../../../Utils/Constants'
export const listItemButtonStyles = {
    padding: '0.6rem 1.5rem',
    fontSize: '12px',
    '&.Mui-selected, &:hover': {
        color: COLOR.light_blue,
        backgroundColor: '#eef7fe',
        position: 'relative',
        lineHeight: '1.75', // Corrected line-height value
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '4px',
            borderRadius: '16px',
            backgroundColor: COLOR.light_blue,
        },
        '&.Mui-selected::before': {
            display: 'none', // Hide the ::before pseudo-element for selected items
        },
    },
}

export const Card = {
    backgroundColor: 'white',
    color: '#121F43',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '282px',
    padding: '16px 0px',
}
