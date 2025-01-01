import { COLOR } from '../../../Utils/Constants'
import { StyledPickersLayout } from './style'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { Typography, Box, TextField, Button } from '@mui/material'
import { TextFieldCustomMUI } from '../Textfield/style'
import { StyledTextField } from './style'
import React, { useEffect } from 'react'

function Calendar(props) {
    const {
        onChange,
        className,
        inputcss,
        type = 'date',
        label,
        helperText,
        value,
        defaultValue,
        icon,
        ...rest
    } = props

    const [selectedDate, setSelectedDate] = React.useState(value || defaultValue)
    const [hasError, setHasError] = React.useState(false)

    useEffect(() => {
        setSelectedDate(value || defaultValue)
    }, [value, defaultValue])

    const handleDateChange = (date) => {
        setSelectedDate(date)
        const eighteenYearsAgo = new Date()
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18)
        setHasError(date < eighteenYearsAgo)
        onChange(date)
    }

    return (
        <Box className={`${className}`}>
            <Box className="relative">
                <DesktopDatePicker
                    error={hasError}
                    label={label}
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            {...(hasError ? { error: true } : {})}
                            {...(hasError ? { helperText: 'You must be at least 18 years old' } : {})}
                            disabled={hasError}
                        />
                    )}
                    {...rest}
                    slots={{
                        layout: StyledPickersLayout,
                        textField: StyledTextField,
                    }}
                    defaultValue={defaultValue}
                />
            </Box>
            {hasError && <Typography>{helperText}</Typography>}
        </Box>
    )
}

export default Calendar
