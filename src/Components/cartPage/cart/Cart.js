import React, { useState, useEffect } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory, useLocation } from 'react-router'
import { pathes } from '../../../utils/pathes'

import { useTranslation } from 'react-i18next';

import CartItem from './cartItem/CartItem'
import styles from './styles.module.scss'
import { Empty, Button } from 'antd'

const Cart = observer(() => {
  const { ProductsStore } = useStore()
  const { cart, products, cartProducts, totalPrice } = ProductsStore
  const history = useHistory()
  const location = useLocation()
  const { t } = useTranslation();

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
  }, [cartProducts, location.pathname])

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
          <h2 className={styles.title}>{t('cart.cart')}</h2>
          <ul className={styles.list}>
            {cartProducts.map(product => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <h2 className={styles.totalPrice}>{totalPrice} {t('cart.uan')}</h2>
            <button
              className={styles.orderButton}
              type="button"
              onClick={() => history.push(pathes.order)}
            >
              {t('cart.make_order')}
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className={styles.titleEmpty}>{t('cart.cart_is_empty')}!</h2>
          <Empty description={'Time to start shopping!'} />
        </>
      )}
    </div>
  )
})
export default Cart
