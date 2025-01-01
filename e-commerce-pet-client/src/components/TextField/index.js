const TextField = (props) => {
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
    label,
    errors,
    id,
    register,
    validate,
    require,
    children,
    ...restProps
  } = props
  // Danh sách màu hợp lệ
  const validColors = ['green', 'blue', 'black', 'brown', 'purple']

  // Kiểm tra màu hợp lệ
  const colorClass = validColors.includes(color) ? ` input--${color}` : ''

  // Kiểm tra type hợp lệ
  const typeClass =
    type === 'search-type' ||
    type === 'form' ||
    type === 'checkbox' ||
    type === 'password'
      ? ` input--${type}`
      : ''

  // Tạo class dựa trên các điều kiện
  const inputClass = `input${typeClass}${colorClass}${
    className ? ` ${className}` : ''
  }${size ? ` input--${size}` : ''}`

  const labelClass = `label${colorClass}`

  const errorClass = `error`
  const requireClass = `require`

  return (
    <div className={`textfield ${className}`}>
      {label && (
        <label className={labelClass} htmlFor={id}>
          {label} {require && <span className={requireClass}>*</span>}
        </label>
      )}
      <div className="textfield__input-wrap">
        <input
          type={type}
          className={inputClass}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...register(id, validate)}
          {...restProps}
        />
        {children}
      </div>
      {errors && errors[id] && (
        <small className={errorClass}>{errors[id]?.message}</small>
      )}
    </div>
  )
}

export default TextField
