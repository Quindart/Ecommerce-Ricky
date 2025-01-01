import { Link } from 'react-router-dom'

const Button = (props) => {
    const {
        children,
        type,
        ghost,
        color,
        htmlType,
        className,
        size,
        border = true,
        disabled,
        ...restProps
    } = props

    // Kiểm tra type hợp lệ
    const typeValue =
        type === 'primary' || type === 'icon' ? ` btn--${type}` : ''

    // Kiểm tra size hợp lệ
    const sizeValue = size === 'small' || 'medium' ? ` btn--${size}` : ''

    // Danh sách màu hợp lệ
    const validColors = ['green', 'white']

    // Kiểm tra màu hợp lệ
    const colorValue = [...validColors].includes(color) ? ` btn--${color}` : ''

    const unbordered = border ? "" : " btn--unbordered";

    const isDisabled = disabled ? " disabled" :""

    const classValue = `btn${typeValue}${
        ghost ? ' btn--ghost' : ''
    }${colorValue}${isDisabled}${unbordered}${sizeValue}${className ? ` ${className}` : ''}`

    return (
        <>
            {htmlType === 'link' ? (
                <Link className={classValue} {...restProps}>
                    {children}
                </Link>
            ) : (
                <button className={classValue} {...restProps}>
                    {children}
                </button>
            )}
        </>
    )
}
export default Button
