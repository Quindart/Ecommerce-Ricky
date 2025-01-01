import React from 'react'

const Checkbox = (props) => {
  const {
    type,
    name,
    placeholder,
    value,
    onChange,
    disabled,
    color,
    size,
    className,
    checked,
    label,
    ...rest
  } = props

  const validColors = ['green', 'blue', 'black', 'brown', 'purple']
  const colorClass = validColors.includes(color) ? ` checkbox--${color}` : ''
  const checkboxClass = `${'checkbox'}${colorClass}${
    className ? ` ${className}` : ''
  }${size ? ` checkbox--${size}` : ''}`

  return (
    <>
      <div className={className} {...rest}>
        <label htmlFor="custom-checkbox" className="checkbox--label">
          <input
            className={checkboxClass}
            type="checkbox"
            id="custom-checkbox"
            checked={checked}
            onChange={onChange}
          />
          {label}
        </label>
      </div>
    </>
  )
}

export default Checkbox
