import clsx from 'clsx'
import useStyles from './style'
import { InputLabel, Box, MenuItem, Select } from '@mui/material'

function Dropdown(props) {
    const { className = '', list, size = 'xl', label, ...rest } = props
    const { classes } = useStyles({})
    return (
        <Box className={clsx(classes['root'], className)}>
            {label && (
                <InputLabel className={clsx(classes['label'])} shrink>
                    {label}
                </InputLabel>
            )}
            <Select
                {...rest}
                className={clsx(classes['dropdown'], classes[size], className)}
                defaultValue={list[0].value}
            >
                {list.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.title}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    )
}

export default Dropdown
