import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import TextField from '../TextField'
// import Button from '../Button'
// import { useForm } from 'react-hook-form'

const Accordion = (props) => {
  const { className, color, message, children, ...res } = props
  const [isOpen, setIsOpen] = useState(false)
  // const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  //     reset,
  // } = useForm()

  // const onSubmit = (value) => {
  //     console.log(value)
  //     reset()
  // }

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={className} {...res}>
        <div className="cart__color">
          <div style={{ padding: '0' }}>
            <div className="cart__coupon">
              <Link
                onClick={() => handleOpen()}
                className="cart__coupon-header"
              >
                <div className="cart__coupon-title">{message}</div>
                <Icon
                  className={`icon${isOpen ? '--active' : ''} `}
                  icon="mingcute:down-fill"
                />
              </Link>
              <div className={`cart__coupon-form ${isOpen ? 'open' : ''}`}>
                {children}
                {/* <form
                                    className="cart__coupon-content"
                                    style={{ width: '100%' }}
                                >
                                    <TextField
                                        className="mt-2"
                                        // label="Your phone number *"
                                        type="form"
                                        placeholder="Coupon code"
                                        disabled={false}
                                        color="blue"
                                        id="phone"
                                        register={register}
                                        validate={{
                                            required: 'This field can not empty.',
                                            pattern: {
                                                value: /[^\\$] [A-Z0-9]{2,}/,
                                                message: 'Coupon is valid',
                                            },
                                        }}
                                        // errors={errors}
                                    />
                                    <Button
                                        onClick={handleSubmit(onSubmit)}
                                        htmlType="submit"
                                        type="primary"
                                        size="small"
                                        ghost
                                        className="cc"
                                    >
                                        Apply
                                    </Button>
                                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordion
