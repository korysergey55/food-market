import React, { useState, useEffect } from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'

import OrderItem from './orderItem/OrderItem'

import styles from './styles.module.scss'
import CartListItem from '../../../cartPage/cart/cartItem/CartItem'

const OrderList = observer(() => {
  const { ProductsStore } = useStore()
  const { cart, products } = ProductsStore
  const [totalPrice, setTotalPrice] = useState(0)

  const findProductCart = () => {
    const cartArr = []
    const unq = Array.from(new Set(cart))
    unq.forEach(key => {
      const item = products.find(v => v.id === key)
      if (item) {
        cartArr.push({
          ...item,
          qantity: cart.filter(product => product === item.id).length,
        })
      }
    })
    return cartArr
  }

  const [cartProducts, setCartProducts] = useState(findProductCart())

  useEffect(() => {
    setCartProducts(findProductCart())
  }, [cart, products])

  useEffect(() => {
    getTotalPrice()
  }, [cartProducts])

  const getTotalPrice = () => {
    const price = cartProducts?.reduce((acc, product) => {
      acc += Number(product?.price * product.qantity)
      return acc
    }, 0)
    setTotalPrice(price)
    ProductsStore.setTotalPrice(price)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ваш заказ:</h2>
      <ul className={styles.orderList}>
        {cartProducts?.map(product => (
          <OrderItem key={product.id} product={product} />
          // <CartListItem key={product.id} product={product} />
        ))}
      </ul>
      {cartProducts.length > 0 && (
        <div className={styles.wripper}>
          <h2 className={styles.total}>Общая стоимость - {totalPrice} грн </h2>
        </div>
      )}
    </div>
  )
})

export default OrderList
