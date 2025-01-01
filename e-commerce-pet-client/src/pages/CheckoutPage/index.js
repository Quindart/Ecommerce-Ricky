import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import CheckoutField from './CheckoutField'
import CheckoutCollaterals from './CheckoutCollaterals'
const CheckoutPage = () => {
  return (
    <div className="checkout">
      <header className="account__header">
        <Breadcrumb
          className="account__header--breadcrumb"
          targetFormat="snake"
        />
        <h1
          style={{ textTransform: 'capitalize' }}
          className="account__header--title mx-auto"
        >
          Checkout
        </h1>
      </header>
      <section className="checkout__container">
        <div className="checkout__content">
          <div className="checkout__wrap">
            <div className="checkout__col-left">
              <div className="checkout__sub-header">Billing details</div>
              <CheckoutField />
            </div>
            <div className="checkout__col-right">
              <CheckoutCollaterals />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CheckoutPage
