import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import Textfield from '../Textfield/Textfield'
import Box from '@mui/material/Box'

export default function TagsInput(props) {
    const {
        onTagsChange,
        className,
        inputcss,
        type = 'text',
        label,
        variant = 'container',
        helperText,
        error,
        defaultValue,
        icon,
        value = [],
        onTagRemove,
        size = 'xl',
        ...rest
    } = props

    const handleChange = (event, newValue) => {
        console.log('Current tags:', newValue)
        if (onTagsChange) {
            onTagsChange(newValue)
        }
        const previouslyAddedTags = value.filter((tag) => !newValue.includes(tag))
        previouslyAddedTags.forEach((tag) => {
            if (onTagRemove) {
                onTagRemove(tag)
            }
        })
    }

    return (
        <Box className={`${className}`}>
            <Autocomplete
                multiple
                id="tags-filled"
                options={[]}
                defaultValue={defaultValue || []}
                freeSolo
                value={value} // Use value from props
                onChange={handleChange}
                renderInput={(params) => (
                    <Textfield
                        {...params}
                        variant="filled"
                        label={label || 'Tags'}
                        placeholder="Tags"
                        error={error}
                        helperText={helperText}
                    />
                )}
            />
        </Box>
    )
}
