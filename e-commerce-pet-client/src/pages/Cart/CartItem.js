import { Link } from 'react-router-dom'
import demo from '../../assets/img/ricky-118-460x373.jpg'
import Button from '../../components/Button'
import { Icon } from '@iconify/react'
import QuantityTextField from '../../components/QuantityTextField'
import { useContext, useEffect, useRef, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { cartService } from '../../services/cartService'
import { useDispatch } from 'react-redux'
import { deleteCartItem, updateQuantityCartItem } from '../../store/slice/cartSlice'
import formatter from '../../utils/formatterMoney'
import { useSnackbar } from 'notistack'

const CartItem = (props) => {
  const { itemCart, user } = props;

  const dispatch = useDispatch();

  const [quantityItem, setQuantityItem] = useState(itemCart.quantity);

  const [subtotal, setSubtotal] = useState(itemCart.quantity * itemCart.price);

  const refQuantity = useRef(false);

  const { enqueueSnackbar } = useSnackbar()

  const debouncedQuantity = useDebounce(quantityItem, 2000);

  const handleQuantityChange = (newQuantity) => {
    refQuantity.current = true;
    setQuantityItem(newQuantity)
    setSubtotal(newQuantity * itemCart.price);
  }

  useEffect(() => {
    if (refQuantity.current === true) {
      const data = {
        userId: user.id,
        productId: itemCart._id,
        quantity: {
          "quantity": quantityItem
        }
      };
      dispatch(updateQuantityCartItem(data))
      .then(() => {
        const message = "Update product quantity successfully"
        enqueueSnackbar(message, {
          variant: 'success',
        })
      })
    }
  }, [debouncedQuantity]);

  const handleRemoveCartItem = () => {
    const data = {
      userId: user.id,
      productId: itemCart._id,
    };
    dispatch(deleteCartItem(data))
    .then(() => {
      const message = "Delete product successfully"
      enqueueSnackbar(message, {
        variant: 'success',
      })
    })
  }

  return (
    <>
      <tr className="section-cart__item">
        <td className="section-cart__item-thumbnail">
          <Link to={`/product-detail/${itemCart._id}`}>
            <img src={itemCart.images[0].url} alt={itemCart.name} />
          </Link>
          <Button
            className="section-cart__item-btnClose"
            htmlType="submit"
            type="icon"
            border={false}
            onClick={handleRemoveCartItem}
          >
            <Icon icon="ant-design:close-outlined" />
          </Button>
        </td>
        <td className="section-cart__item-name">
          <div>
            <Link className="section-cart__item-title" to={`/product-detail/${itemCart._id}`}>
              {itemCart.name} - {itemCart.dimensions?.weight} lbs
            </Link>
            <div className="section-cart__item-brand">{itemCart.brand}</div>
            <div className="section-cart__item-price">{formatter(itemCart.price)}</div>
          </div>
        </td>
        <td className="section-cart__item-quantity">
          <QuantityTextField
            value={quantityItem}
            onChange={handleQuantityChange}
            size="medium"
            max={itemCart.avaiable}
          />
        </td>
        <td className="section-cart__item-subtotal">
          {formatter(subtotal)}
        </td>
      </tr>
    </>
  )
}
export default CartItem
