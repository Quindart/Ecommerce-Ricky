import { Icon } from '@iconify/react'
import React, { useEffect, useRef, useState } from 'react'

const InputQuantity = (props) => {
    const {
        onChange,
        value,
        style,
        size,
        label,
        id,
        validate,
        errors,
        data,
        register,
        onChangeQuantity,
        ref,
        ...restProps
    } = props
    const inputRef = useRef(null)

    const [amount, setAmount] = useState(data.quantity || 1)
    const decrease = useRef(null)
    const increase = useRef(null)
    const timeoutIdRef = useRef(null)
    const intervalIdRef = useRef(null)

    useEffect(() => {
        //MouseDecrease
        const mouseDown = (action) => {
            let timeOut = setTimeout(() => {
                let interval = setInterval(() => {
                    handleButtonClick(action)
                }, 100)
                intervalIdRef.current = interval
            }, 2000)

            timeoutIdRef.current = timeOut
        }
        const mouseUp = () => {
            clearInterval(intervalIdRef.current)
            clearTimeout(timeoutIdRef.current)
        }

        function isMobileDevice() {
            return /Mobi|Android/i.test(navigator.userAgent)
        }
        if (isMobileDevice()) {
            decrease.current.addEventListener('touchstart', (e) => {
                mouseDown('decrease')
            })
            decrease.current.addEventListener('touchend', mouseUp)
            increase.current.addEventListener('touchstart', (e) => {
                mouseDown('increase')
            })
            increase.current.addEventListener('touchend', mouseUp)
        } else {
            decrease.current.addEventListener('mousedown', (e) => {
                mouseDown('decrease')
            })
            decrease.current.addEventListener('mouseup', mouseUp)
            increase.current.addEventListener('mousedown', (e) => {
                mouseDown('increase')
            })
            increase.current.addEventListener('mouseup', mouseUp)
        }
    }, [])

    const handleButtonClick = (action) => {
        if (Number(amount) === Number(data.maxQuantity)) {
            if (action === 'decrease' && amount > 0) {
                return setAmount((prevAmount) => {
                    const newAmount = prevAmount - 1
                    onChangeQuantity(newAmount)
                    return newAmount
                })
            }
            setAmount(Number(data.maxQuantity))
            onChangeQuantity(Number(data.maxQuantity))
        } else if (Number(amount) > Number(data.maxQuantity)) {
            setAmount(Number(data.maxQuantity))
            onChangeQuantity(Number(data.maxQuantity))
        } else {
            if (action === 'increase') {
                setAmount((prevAmount) => {
                    const newAmount = prevAmount + 1
                    onChangeQuantity(newAmount)
                    return newAmount
                })
            } else if (action === 'decrease') {
                setAmount((prevAmount) => {
                    if (Number(prevAmount) <= 0) {
                        onChangeQuantity(0)
                        return 0
                    }
                    const newAmount = prevAmount - 1
                    onChangeQuantity(newAmount)
                    return newAmount
                })
            }
        }
    }

    const handleInputChange = (event) => {
        const value = event.target.value || ''
        if (value === '') {
            function resetQuantity() {
                onChangeQuantity(Number(0))
                setAmount(Number(0))
            }
            return resetQuantity()
        }
        if (String(value).charAt(0) === '0') {
            const formatValue = parseInt(String(value), 10)
            function resetQuantity() {
                onChangeQuantity(String(formatValue))
                setAmount(String(formatValue))
            }
            return resetQuantity()
        }
        const validateValue = validate.pattern.value.test(value)
        if (validateValue) {
            if (Number(value) > data.maxQuantity) {
                // alert('Quá giới hạn')
                onChangeQuantity(Number(data.maxQuantity))
                setAmount(Number(data.maxQuantity))
            } else {
                onChangeQuantity(Number(value))
                setAmount(Number(value))
            }
        } else {
            // alert(validate.required)
        }
    }

    const sizeInput = ['large', 'medium', 'small']
    const sizeClass = sizeInput.includes(size)
        ? `input__quantity input__quantity--${size}`
        : ''
    return (
        <div className={`${sizeClass}`}>
            <label htmlFor="quantity">{label}</label>
            <input
                ref={inputRef}
                id={id}
                type="number"
                inputMode="numeric"
                className="no-spin-button"
                value={amount}
                {...register(id, validate)}
                onChange={handleInputChange}
                {...restProps}
            />
            <button
                type="submit"
                ref={decrease}
                className="minus h-cb"
                onClick={() => handleButtonClick('decrease')}
            >
                <Icon icon="typcn:minus" />
            </button>
            <button
                type="submit"
                ref={increase}
                className="plus h-cb "
                onClick={() => handleButtonClick('increase')}
            >
                <Icon icon="typcn:plus" />
            </button>
            {errors && errors[id] && <small>{errors[id]?.message}</small>}
        </div>
    )
}
export default InputQuantity
