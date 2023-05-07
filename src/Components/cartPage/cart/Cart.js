import React, { useState, useEffect } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router'
import { pathes } from '../../../utils/pathes'

import CartItem from './cartItem/CartItem'
import styles from './styles.module.scss'
import { Empty, Button } from 'antd'

const Cart = observer(() => {
  const history = useHistory()
  const { ProductsStore } = useStore()
  const { cart, products, cartProducts, totalPrice } = ProductsStore

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

  useEffect(() => {
    ProductsStore.setCartProducts(findProductCart())
  }, [cart, products])

  useEffect(() => {
    ProductsStore.setTotalPrice()
  }, [cartProducts])

  // const getTotalPrice = () => {
  //   const price = cartProducts?.reduce((acc, product) => {
  //     acc += Number(product?.price * product.qantity)
  //     return acc
  //   }, 0)
  //   setTotalPrice(price)
  //   ProductsStore.setTotalPrice(price)
  // }

  return (
    <div className={styles.container}>
      {cartProducts.length ? (
        <div className={styles.cart}>
          <h2 className={styles.title}>Корзина</h2>
          <ul className={styles.list}>
            {cartProducts.map(product => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <h2 className={styles.totalPrice}>{totalPrice} грн</h2>
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
        <>
          <h2 className={styles.titleEmpty}>Корзина пуста!</h2>
          <Empty description={false} />
        </>
      )}
    </div>
  )
})
export default Cart
