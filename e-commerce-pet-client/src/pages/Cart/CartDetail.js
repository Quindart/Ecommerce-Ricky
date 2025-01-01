import CartItem from './CartItem'

const CartDetail = (props) => {
  const { listCart, user } = props

  return (
    <>
      <table className="section-cart__detail">
        <thead>
          <tr>
            <th className="section-cart__detail-name" colSpan={2}>
              product
            </th>
            <th className="section-cart__detail-quantity">quantity</th>
            <th className="section-cart__detail-subtotal">subtotal</th>
          </tr>
        </thead>
        <tbody>
          {listCart?.map((item, index) => (
            <CartItem itemCart={item} key={index} user={user}/>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default CartDetail
