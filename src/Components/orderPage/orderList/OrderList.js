import React, { useState, useEffect } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next';
import OrderItem from './orderItem/OrderItem'
import styles from './styles.module.scss'

const OrderList = observer(() => {
  const { ProductsStore } = useStore()
  const { totalPrice, cartProducts, cart, products, } = ProductsStore
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
  }, [cartProducts])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('orderPage.orderList.yours_order')} </h2>
      <ul className={styles.orderList}>
        {cartProducts?.map(product => (
          <OrderItem key={product.id} product={product} />
        ))}
      </ul>
      {cartProducts.length > 0 && (
        <div className={styles.wripper}>
          <p className={styles.total}>
            {t('orderPage.orderList.total_price')} - {totalPrice} {t('orderPage.orderList.uan')}
          </p>
        </div>
      )}
    </div>
  )
})

export default OrderList
