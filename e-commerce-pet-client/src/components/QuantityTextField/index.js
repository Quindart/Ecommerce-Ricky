import { Icon } from '@iconify/react'
import { useSnackbar } from 'notistack'

function QuantityTextField(props) {
    const { enqueueSnackbar } = useSnackbar()
    const {
        quantity,
        onChange,
        size = 'large',
        style,
        className,
        label,
        errors,
        id,
        value,
        max,
        ...rest
    } = props

    const handleClick = (change) => {
        const newQuantity = change + value
        if (max && newQuantity > max) {
            onChange(max)
            enqueueSnackbar('Maximum number reached.', {
                variant: 'warning',
            })
            return
        }
        if (newQuantity < 0) {
            onChange(0)
            enqueueSnackbar('The smallest number is 0.', {
                variant: 'warning',
            })
            return
        }
        onChange(newQuantity)
    }

    const entryQuantity = (newValue) => {
        if (max && newValue > max) {
            onChange(max)
            enqueueSnackbar('Maximum number reached.', {
                variant: 'warning',
            })
            return
        }
        if (newValue < 0) {
            onChange(0)
            enqueueSnackbar('he smallest number is 0.', {
                variant: 'warning',
            })
            return
        }
        onChange(newValue)
    }

    const handleInputChange = (e) => {
        const inputValue = e.target.value
        if (inputValue === '' || inputValue === '0') {
            onChange(0)
            return
        }
        if (!isNaN(parseFloat(inputValue))) {
            const roundedValue = Math.round(parseFloat(inputValue))
            entryQuantity(roundedValue)
        }
    }

    return (
        <div {...rest} className={className}>
            <div
                className={`input__quantity input__quantity--${size}`}
                style={style}
            >
                {label && <label htmlFor={id}>{label}</label>}
                <button className="minus h-cb" onClick={() => handleClick(-1)}>
                    <Icon icon="typcn:minus" />
                </button>
                <input
                    id={id}
                    className="input__quantity-input"
                    pattern="[0-9]"
                    onChange={handleInputChange}
                    value={value}
                />
                <button className="plus h-cb " onClick={() => handleClick(1)}>
                    <Icon icon="typcn:plus" />
                </button>
                {/* {errors && errors[id] && <small>{errors[id]?.message}</small>} */}
            </div>
        </div>
    )
}

export default QuantityTextField
