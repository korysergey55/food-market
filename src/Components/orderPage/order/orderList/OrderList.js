import React from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'

import OrderItem from './orderItem/OrderItem'
import styles from './styles.module.scss'

const OrderList = observer(() => {
  const { ProductsStore } = useStore()
  const { cart, totalPrice } = ProductsStore

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Товары в Вашем заказе</h2>
      <ul className={styles.orderList}>
        {cart?.map(product => (
          <OrderItem key={product.id} product={product} />
        ))}
      </ul>
      {cart.length > 0 && (
        <div className={styles.wripper}>
          <h2 className={styles.total}>Общая стоимость -  {totalPrice} грн </h2>
        </div>
      )}
    </div>
  )
})

export default OrderList
