import formatter from '../../utils/formatterMoney'

const InputRadio = (props) => {
    const {
        errors,
        register,
        options = [],
        className,
        label,
        id,
        validate,
        type = 'radio',
        placeholder,
        children,
        ...rest
    } = props

    return (
        <div className={className} {...rest}>
            <div className="input__radio">
                {label && (
                    <label className="input__radio--title" htmlFor={id}>
                        {label}
                    </label>
                )}
                {options?.map((option) => (
                    <div className="input__radio--item" key={option.value}>
                        <input
                            type={type}
                            value={option.value}
                            name={id}
                            id={id}
                            className="input__radio--item-radio"
                            {...register(id, validate)}
                            placeholder={placeholder}
                            // defaultChecked={option.value}
                        />
                        <label
                            className="input__radio--item-value"
                            htmlFor={option.value}
                        >
                            {option.label}
                            <span className="input__radio--item-amount">
                                {option.amount ? formatter(option.amount) : ''}
                            </span>
                        </label>
                        <div>{children}</div>
                    </div>
                ))}
                {/* {errors?.[id] && <small>{errors[id].message}</small>} */}
            </div>
        </div>
    )
}

export default InputRadio
