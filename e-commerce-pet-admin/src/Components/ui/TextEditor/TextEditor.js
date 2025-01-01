import { FormHelperText, InputLabel } from '@mui/material'
import JoditEditor from 'jodit-react'
import { config } from './config'
import { Fragment } from 'react'

const TextEditor = (props) => {
    const { label, id, helperText, error, placeholder, ...rest } = props
    return (
        <Fragment>
            {label && (
                <InputLabel
                    htmlFor={id}
                    className="mb-2 text-sm font-semibold"
                    sx={{
                        '& span': {},
                    }}
                >
                    {label}
                </InputLabel>
            )}
            <JoditEditor {...rest} config={{ ...config, placeholder: placeholder || 'Nhập mô tả sản phẩm' }} />
            <FormHelperText error={error} className="my-2 ml-1 text-xs">
                {helperText}
            </FormHelperText>
        </Fragment>
    )
}

export default TextEditor
