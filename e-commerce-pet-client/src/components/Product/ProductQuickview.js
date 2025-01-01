import demo from '../../assets/img/ricky-118-460x373.jpg'
import ProductContext from './ProductContext'

const ProductQuickview = (props) => {
  const { data } = props
  console.log(data)

  return (
    <div
      className="modal__layout-product"
    >
      <div className="modal__product">
        <div className="modal__product-col--1">
          <div className="modal__product-image">
            <img src={data?.images[0]?.url} alt="" />
          </div>
        </div>
        <div className="modal__product-col--2">
          <ProductContext
            data={data}
          />
        </div>
      </div>
    </div>
  )
}
export default ProductQuickview
