import React, { useState } from 'react'
import Accordion from '../../components/Accordin/Accordin'
import Button from '../../components/Button'
import Radio from '../../components/Radio'
import { useForm } from 'react-hook-form'
import { useFetchOrderById } from '../../hooks/useCreateOrder'

import { useParamsFilter } from '../../hooks/useParams'
import formatter from '../../utils/formatterMoney'
import { apiPayment } from '../../services/api-payment'
import TextField from '../../components/TextField'

const CheckoutCollaterals = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const { order_id } = useParamsFilter()
  const orderDetail = useFetchOrderById(order_id)
  const transportFee = 30000
  const {
    register,
    formState: { errors },
  } = useForm()

  const handlePlaceOrder = () => {
    if (paymentMethod === 'pay-with-vnpay') {
      const sendDataPaymentOnline = async () => {
        const dataPayment = {
          amount: orderDetail?.order?.totalOrderItem,
          bankCode: '',
          language: 'vn',
        }

        try {
          const response = await apiPayment.apiPaymentOnline(
            order_id,
            dataPayment
          )
          const vpnUrl = response?.vpnUrl
          if (vpnUrl) {
            window.location.href = vpnUrl
          } else {
            console.error('VPN URL not found in response')
          }
        } catch (error) {
          console.error('Error occurred during online payment:', error)
        }
      }
      sendDataPaymentOnline()
    }
  }

  const handleSelectedPaymentMethod = (e) => {
    setPaymentMethod(e.target.value)
  }

  return (
    <div className="checkout__collaterals">
      <Accordion message="Coupon code">
        <form className="cart__coupon-content" style={{ width: '100%' }}>
          <TextField
            type="form"
            placeholder="Coupon code"
            disabled={false}
            color="blue"
            id="coupon"
            name="coupon"
            register={register}
            validate={{
              pattern: {
                value: /[^\\$] [A-Z0-9]{2,}/,
                message: 'Coupon is valid',
              },
            }}
            errors={errors}
          />
          <Button htmlType="submit" type="primary" size="medium" ghost>
            Apply
          </Button>
        </form>
      </Accordion>
      <div className="checkout__sub-header">Your order</div>
      <div className="checkout__order">
        <div className="checkout__order-table">
          <div className="checkout__order-space"></div>
          <div>
            {orderDetail?.order?.orderDetails?.map((item, index) => (
              <div key={index} className="checkout__order-name">
                {item?.product?.name} x <strong>{item?.quantity}</strong>
              </div>
            ))}
            <div className="checkout__order-price">
              Price :{' '}
              <span>{formatter(orderDetail?.order?.totalOrderItem || 0)}</span>
            </div>
          </div>
          <div className="checkout__order-space"></div>
          <div className="checkout__order-price">
            <h4>Transport fee :</h4>
            <div style={{ color: '#F63E04' }}>{formatter(transportFee)}</div>
          </div>

          <div>
            <div>
              <div className="checkout__order-space2"></div>
            </div>
            <div>
              {/* <div>
                <div className="checkout__sub-header">Shipping</div>
                <ul>
                  <li className="checkout__order-shipping-method">
                    <Radio
                      id="flat-rate"
                      name="shipping-method"
                      value="flat-rate"
                    >
                      <div className="flex justify-between items-center flex-1">
                        <label
                          className=""
                          style={{
                            display: 'inline-block',
                            fontSize: '14px',
                          }}
                          for="flat-rate"
                        >
                          Flat rate:
                        </label>
                        <span className="section-cart__collateral-price">
                          $30.00
                        </span>
                      </div>
                    </Radio>
                  </li>
                  <li className="section-cart__shipping-methods-item">
                    <Radio
                      id="free-shipping"
                      name="shipping-method"
                      value="free-shipping"
                    >
                      <div className="flex justify-between items-center flex-1">
                        <label
                          for="free-shipping"
                          className="section-cart__shipping-methods-label"
                        >
                          Free shipping
                        </label>
                      </div>
                    </Radio>
                  </li>
                </ul>
              </div> */}
              {/* <div className="section-cart__collateral-hr"></div> */}
              <div className="section-cart__subtotal">
                <div className="flex justify-between items-center">
                  <span className="section-cart__collateral-title">Total</span>
                  <span className="section-cart__collateral-price section-cart__collateral-price-total">
                    {formatter(
                      orderDetail?.order?.totalOrderItem + transportFee ||
                        transportFee
                    )}
                  </span>
                </div>
              </div>
              <div className="section-cart__collateral-hr"></div>
            </div>
          </div>
        </div>
        <div className="checkout__payment">
          <div className="checkout__sub-header">Payment Method</div>
          <div className="checkout__order-shipping-method">
            <Radio
              id="cash-on-delivery"
              name="payment-method"
              value="cash-on-delivery"
              checked={paymentMethod === 'cash-on-delivery'}
              onChange={handleSelectedPaymentMethod}
            >
              <div className="flex justify-between items-center flex-1">
                <label
                  for="cash-on-delivery"
                  className="section-cart__shipping-methods-label"
                >
                  Cash on delivery
                </label>
              </div>
            </Radio>
          </div>
          <div className="checkout__order-shipping-method">
            <Radio
              id="direct-bank-transfer"
              name="payment-method"
              value="pay-with-vnpay"
              checked={paymentMethod === 'pay-with-vnpay'}
              onChange={handleSelectedPaymentMethod}
            >
              <div className="flex justify-between items-center flex-1">
                <label
                  for="pay-with-vnpay"
                  className="section-cart__shipping-methods-label"
                >
                  Pay with vnpay
                </label>
              </div>
            </Radio>
          </div>
        </div>
        <Button
          htmlType="submit"
          type="primary"
          className="w-100 text-center mt-2"
          onClick={handlePlaceOrder}
        >
          Place order
        </Button>
      </div>
    </div>
  )
}

export default CheckoutCollaterals
