import { Icon } from '@iconify/react'
import { useState } from 'react'
import Button from '../../components/Button'
import Badge from '../Badge'
import ProductProgress from '../ProductProgress'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slice/cartSlice'
import formatter from '../../utils/formatterMoney'
import Spin from '../Spin'
import { openModal } from 'store/slice/modalSlice'

const CardProduct = (props) => {
  const { sale, data, className, handleProductModal, children, ...rest } = props

  const [isBuying, setIsBuying] = useState(false)

  const {
    _id,
    name,
    description,
    category,
    brand,
    dimensions,
    available,
    price,
    images,
    ...restData
  } = data

  const classValue = `product-card${className ? ` ${className}` : ''}`

  const cateName = category ? category.name : 'no category'

  const tag = [cateName, brand]

  const weight = dimensions?.weight

  const image = images?.map((img) => {
    return img?.url
  })

  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    setIsBuying(true)
    const data = {
      productId: _id,
      quantity: {
        product_id: _id,
        quantity: 1,
      },
    }
    dispatch(addToCart(data)).finally(() => {
      setIsBuying(false)
    })
  }

  const handleShowModal = (e) => {
    e.preventDefault();
    dispatch(openModal(data));
  }

  return (
    <div {...rest} className={classValue}>
      <a className="product-card__image" href={`/product-detail/${_id}`}>
        <img
          src={
            image
              ? image
              : 'http://www.annavape.com/user/img/no-product-found.png'
          }
          alt={name}
        />
        <div className="product-card__overlay">
          <div className="product-card__overlay-btn-list">
            <Button
              className="product-card__overlay-btn"
              type="icon"
              onClick={handleShowModal}
            >
              <Icon icon="radix-icons:eye-open" />
            </Button>
            <Button className="product-card__overlay-btn" type="icon">
              <Icon icon="tabler:heart" />
            </Button>
          </div>
        </div>
      </a>
      <div className="product-card__center">
        <div className="product-card__info">
          {sale && <ProductProgress />}
          <a className="product-card__title" href={`/product-detail/${_id}`}>
            {name}
          </a>
          <div className="product-card__desc">{description}</div>
        </div>
        <div className="product-card__category">
          {tag.map((cate, i) => (
            <a key={i} className="product-card__tag" href="/">
              {cate}
            </a>
          ))}
        </div>
      </div>
      <div className="product-card__bottom">
        <div className="product-card__options">
          <span className="product-card__weight product-card__weight--active">
            {weight} lbs
          </span>
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
        </div>
        {available < 1 && (
          <div className="product-card__available">OUT OF STOCK</div>
        )}
        <div className="product-card__wrap">
          <div className="product-card__price">{formatter(price)}</div>
          <div className="product-card__icon">
            <Button
              className={`${available < 1 ? ' disabled' : ''}`}
              htmlType="submit"
              type="icon"
              disabled = {isBuying}
              onClick={handleAddToCart}
            >
              {isBuying ? <Spin /> : <Icon icon="pepicons-pop:cart" />}
            </Button>
          </div>
        </div>
      </div>
      <div className="badge__list">
        <Badge badges={'featured'} message="top"></Badge>
        <Badge badges={'new'} message="new"></Badge>
        <Badge badges={'sale'} message="-11%"></Badge>
        <Badge badges={'outofstock'} message="out of stock"></Badge>
      </div>
    </div>
  )
}
export default CardProduct
