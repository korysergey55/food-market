import React from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router'

import CartItem from './cartItem/CartItem'
import styles from './styles.module.scss'
import { pathes } from '../../../utils/pathes'

const Cart = observer(() => {
  const { ProductsStore } = useStore()
  const { cart,totalPrice } = ProductsStore
  const history = useHistory()

  return (
    <div className={styles.container}>
      {cart.length ? (
        <div className={styles.cart}>
          <h2 className={styles.title}>Корзина</h2>
          <ul className={styles.list}>
            {cart.map(product => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <h2 className={styles.totalPrice}>
              {totalPrice} грн
            </h2>
            <button
              type="button"
              onClick={() => history.push(pathes.order)}
              className={styles.orderButton}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      ) : (
        <h2 className={styles.titleEmpty}>Корзина пуста!</h2>
      )}
    </div>
  )
})
export default Cart


