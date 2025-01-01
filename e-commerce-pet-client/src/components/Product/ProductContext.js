import { Icon } from '@iconify/react'
import Button from '../Button'
import formatter from '../../utils/formatterMoney'
import QuantityTextField from '../QuantityTextField'
import { useState } from 'react'
import Spin from 'components/Spin'
import { useDispatch } from 'react-redux'
import { addToCart } from 'store/slice/cartSlice'

const ProductContext = (props) => {
  const [hideText, setHideText] = useState(true)
  const [isBuying, setIsBuying] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [isBuyingNow, setIsBuyingNow] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const { data, type } = props

  if (!data) {
    return <div>No data available</div>;
  }

  const { _id, name, description, price, brand, code, avaiable, dimensions } = data

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity)
  }
  const totalPrice = formatter(price * quantity)

  const handleAddToCart = (e) => {
    e.preventDefault()
    setIsBuying(true)
    setIsAdding(true)
    const data = {
      productId: _id,
      quantity: {
        product_id: _id,
        quantity: quantity,
      },
    }
    dispatch(addToCart(data)).finally(() => {
      setIsBuying(false)
      setIsAdding(false)
    })
  }

  const handleBuyNow = (e) => {
    e.preventDefault()
    setIsBuying(true)
    setIsBuyingNow(true)
    const data = {
      productId: _id,
      quantity: {
        product_id: _id,
        quantity: quantity,
      },
    }
    dispatch(addToCart(data))
    .unwrap()
    .then(() => {
      window.location.href="/checkout"
    })
    .catch((error) =>{})
    .finally(() => {
      setIsBuying(false)
      setIsBuyingNow(false)
    })
  }

  return (
    <>
      <div className="context-product">
        <a href="/" className="context-product__brand">
          {brand}
        </a>
        <h1
          className={`context-product__title context-product__title--${type}`}
        >
          {name}
        </h1>
        <span className="context-product__sku">
          SKU: <span>{code}</span>
        </span>
        <p
          className={`context-product__description ${
            hideText ? 'hide-text' : ''
          }`}
        >
          {description}
        </p>
        <span
          onClick={() => setHideText(!hideText)}
          className="context-product__read-more"
        >
          {!hideText ? 'hide less' : 'Read More...'}
        </span>
        <div className="context-product__label">
          <span className="context-product__weight">Weight</span>
          <span
            className="context-product__reset"
            // onClick={handleReset}
          >
            x Clear
          </span>
        </div>
        <div className="product-card__options">
          {/* {weight.map((item, i) => (
            <span
              key={i}
              className={
                i === selectedWeight
                  ? `product-card__weight product-card__weight--active`
                  : `product-card__weight`
              }
              onClick={() => handleClick(i)}
            >
              {item} lbs
            </span>
          ))} */}
          <span className="product-card__weight product-card__weight--active">
            {dimensions?.weight} lbs
          </span>
        </div>
        {/* {selectedPrice && (
          <div className="context-product__price product-card__price">
            ${selectedPrice}.00
          </div>
        )} */}
        <div className="context-product__price product-card__price">
          {totalPrice}
        </div>
        {/* {selectedStock < 1 && (
          <div className="context-product__stockless">Out of stock</div>
        )} */}
        <div className='context-product__bottom'>
          <div className="context-product__wrap">
            <QuantityTextField
              value={quantity}
              onChange={handleQuantityChange}
              size="large"
              max={avaiable}
            />
            <Button
              type="primary"
              onClick={handleAddToCart}
              disabled={isBuying}
              className="btn__add-to-cart"
              // disabled={selectedStock < 1 || selectedWeight === null}
            >
              {isBuying && isAdding ? (
                <Spin />
              ) : (
                <>
                  <span>
                    <Icon icon="pepicons-pop:cart" />
                  </span>
                  <span className='btn__add-to-cart--text'>Add to cart</span>
                </>
              )}
            </Button>
            <Button
              className="product-card__overlay-btn"
              type="icon"
              color="white"
              style={{
                width: '50px',
                height: '50px',
                minWidth: "50px"
              }}
            >
              <Icon icon="tabler:heart" />
            </Button>
          </div>
          <Button
            style={{ fontSize: '11px' }}
            className="w-100 text-center"
            type="primary"
            ghost
            disabled={isBuying}
            onClick={handleBuyNow}
          >
            {isBuying && isBuyingNow ? <Spin /> : 'Buy now'}
          </Button>
        </div>
        {type === 'page' && (
          <>
            <div className="context-product__features">
              <div className="context-product__features--item">
                <Icon width={20} height={20} icon="eva:car-outline" />
                <span>
                  Free delivery for first order and every next over $100
                </span>
              </div>
            </div>
            <div className="context-product__custom">
              <ul>
                <li>
                  <Icon icon="bi:check" /> 100% Money Back Warranty
                </li>
                <li>
                  <Icon icon="bi:check" /> All Items Top Best Quality
                </li>
                <li>
                  <Icon icon="bi:check" />
                  Free and Fast Delivery
                </li>
                <li>
                  <Icon icon="bi:check" /> 24/7 Support
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  )
}
export default ProductContext
