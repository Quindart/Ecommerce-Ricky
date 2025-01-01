import Accordin from '../../components/Accordin/Accordin'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import Radio from '../../components/Radio'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { SHIPPING_FLAT_RATE } from '../../utils/constants'
import formatter from '../../utils/formatterMoney'
import { Link } from 'react-router-dom'

const CartTotal = (props) => {
  const { register } = useForm()
  const { cartTotalAmount } = props
  const [totalCost, setTotalCost] = useState(cartTotalAmount)

  const handleChange = (e) => {
    const method = e.target.value
    if (method === 'flat-rate') {
      setTotalCost(totalCost + SHIPPING_FLAT_RATE)
    } else {
      setTotalCost(cartTotalAmount)
    }
  }

  useEffect(() => {
    setTotalCost(cartTotalAmount)
  }, [cartTotalAmount])

  console.log(totalCost)

  return (
    <>
      <div className="section-cart__collateral">
        <div className="section-cart__total">
          <div className="section-cart__coupon">
            <Accordin className="w-100" message="Coupon code">
              <div className="section-cart__coupon-wrap">
                <TextField
                  type="form"
                  placeholder="Coupon code"
                  color="blue"
                  register={register}
                  id="coupon"
                />
                <Button htmlType="submit" type="primary" ghost size="medium">
                  Apply
                </Button>
              </div>
            </Accordin>
          </div>
          <div className="section-cart__subtotal">
            <div className="flex justify-between items-center">
              <span className="section-cart__collateral-title">Subtotal</span>
              <span className="section-cart__collateral-price">
                {formatter(cartTotalAmount)}
              </span>
            </div>
          </div>
          <div className="section-cart__collateral-hr"></div>
          <div className="section-cart__shipping">
            <span className="section-cart__collateral-title">Shipping</span>
            <ul className="section-cart__shipping-methods">
              <li className="section-cart__shipping-methods-item">
                <Radio
                  id="flat-rate"
                  name="shipping-method"
                  value="flat-rate"
                  onChange={handleChange}
                >
                  <div className="flex justify-between items-center flex-1">
                    <label
                      className=""
                      style={{
                        display: 'inline-block',
                        fontSize: '14px',
                      }}
                      htmlFor="flat-rate"
                    >
                      Flat rate:
                    </label>
                    <span className="section-cart__collateral-price">
                      {formatter(SHIPPING_FLAT_RATE)}
                    </span>
                  </div>
                </Radio>
              </li>
              <li className="section-cart__shipping-methods-item">
                <Radio
                  id="free-shipping"
                  name="shipping-method"
                  value="free-shipping"
                  onChange={handleChange}
                >
                  <div className="flex justify-between items-center flex-1">
                    <label
                      htmlFor="free-shipping"
                      className="section-cart__shipping-methods-label"
                    >
                      Free shipping
                    </label>
                  </div>
                </Radio>
              </li>
            </ul>
          </div>
          <div className="section-cart__collateral-hr"></div>
          <div className="section-cart__subtotal">
            <div className="flex justify-between items-center">
              <span className="section-cart__collateral-title">Total</span>
              <span className="section-cart__collateral-price section-cart__collateral-price-total">
                {formatter(totalCost)}
              </span>
            </div>
          </div>
          <Link to="/checkout">
            <Button
              htmlType="submit"
              type="primary"
              className="w-100 text-center"
              style={{ marginTop: '20px' }}
            >
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default CartTotal
