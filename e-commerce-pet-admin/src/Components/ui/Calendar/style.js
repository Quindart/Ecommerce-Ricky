import { styled } from '@mui/material/styles'
import { COLOR } from '../../../Utils/Constants'
import { PickersLayout } from '@mui/x-date-pickers'
import { TextField } from '@mui/material'

export const StyledTextField = styled(TextField)(({ theme }) => ({
    color: '#1565c0',
    borderRadius: '6px',
    borderWidth: '1px',
    borderColor: '#2196f3',
    border: '0px solid',
    marginTop: '0',

    '.MuiFormHelperText-contained': {
        margin: '0rem',
        fontSize: '1rem',
        color: COLOR.pink_900,
        lineHeight: '1.5',
    },
    '.Mui-error': {
        color: COLOR.pink_900,
    },
    '.AUP & .MuiFormHelperText-contained': {
        fontSize: '14px',
        color: COLOR.pink_900,
        lineHeight: '1.5',
        marginTop: '0.75rem',
    },
    '& .MuiInputLabel-root': {
        color: '#9cb0c4',
        fontSize: '1.1rem',
        '&.Mui-focused': {
            fontWeight: 'bold',
            color: COLOR.light_blue,
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: COLOR.light_blue,
            },
        },
        '&.Mui-error': {
            color: COLOR.pink_900,
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: COLOR.pink_900,
            },
        },
    },
    '& .MuiInputLabel-shrink': {
        color: COLOR.gray_600,
        fontWeight: 'bold',
    },
    '& .MuiInputBase-root': {
        fontWeight: 500,
        borderRadius: '0.4rem',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#9cb0c4',
        },
        '&.Mui-disabled': {
            backgroundColor: COLOR.gray_300,
            '-webkit-text-fill-color': COLOR.light_blue,
        },
        '&.Mui-error': {
            color: COLOR.pink_900,
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: COLOR.pink_900,
            },
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: COLOR.light_blue,
            },
        },
    },
    '& p': {
        color: COLOR.pink_900,
    },
    '&-icon': {
        '& .MuiButtonBase-root svg': {
            color: '#9cb0c4',
        },
        '& .MuiInputBase-root': {
            paddingLeft: '2rem',
            '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#b0c0d0',
                    borderWidth: '1px',
                },
            },
            '&:hover fieldset': {
                borderColor: '#b0c0d0',
            },
        },
    },
    '&-sm .MuiInputBase-root': {
        height: '2.5em',
        padding: '5px',
    },
    '&-md .MuiInputBase-root': {
        height: '3.5em',
        padding: '5px',
    },
    '&-lg .MuiInputBase-root': {
        height: '4.5em',
        padding: '15px',
    },
}))

export const StyledPickersLayout = styled(PickersLayout)({
    '.MuiDateCalendar-root': {
        color: COLOR.light_blue,
        borderRadius: '40px',
        borderColor: COLOR.light_blue,
        backgroundColor: COLOR.white,
    },
    '.MuiPickersCalendarHeader-root': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.MuiPickersCalendarHeader-label': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.MuiPickersCalendarHeader-labelContainer': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.MuiPickersCalendarHeader-switchViewButton': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        borderColor: '#2196f3',
        backgroundColor: COLOR.white,
    },
    '.MuiPickersCalendarHeader-switchViewIcon': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.MuiDayCalendar-root': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.MuiDayCalendar-weekDayLabel': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.MuiDayCalendar-weekContainer': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.MuiDayCalendar-weekNumberLabel': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.MuiDayCalendar-weekNumber': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.MuiSvgIcon-root': {
        color: COLOR.light_blue,
    },
    '.MuiPickersDay-root': {
        color: COLOR.light_blue,
    },
    '.MuiPickersDay-today': {
        color: COLOR.white,
        borderRadius: '20px',
        border: '0px solid',
        backgroundColor: COLOR.blue,
    },
    '.MuiPickersMonth-root': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.MuiPickersMonth-monthButton': {
        color: COLOR.light_blue,
        borderRadius: '20px',
        backgroundColor: COLOR.white,
    },
    '.Mui-selected MuiPickersDay-dayWithMargin': {
        color: COLOR.white,
        borderRadius: '20px',
        backgroundColor: COLOR.light_blue,
    },
})
