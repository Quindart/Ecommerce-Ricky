import React from 'react'

const OptionsDropdown = (props) => {
  const {
    options = [],
    className,
    id,
    register,
    label,
    validate,
    errors,
    defaultValue,
    ...rest
  } = props

  return (
    <div className={className} {...rest}>
      {label && <label htmlFor={id}>{label}</label>}
      <select className="options__size" {...register(id, validate)}>
        <option value="">{defaultValue}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[id] && <small>{errors[id]?.message}</small>}
    </div>
  )
}

export default OptionsDropdown
