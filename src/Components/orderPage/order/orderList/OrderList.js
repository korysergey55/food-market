import React, { useState, useEffect } from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next';
import OrderItem from './orderItem/OrderItem'
import styles from './styles.module.scss'

const OrderList = observer(() => {
  const { ProductsStore } = useStore()
  const { totalPrice, cartProducts } = ProductsStore
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('Ваш заказ')}:</h2>
      <ul className={styles.orderList}>
        {cartProducts?.map(product => (
          <OrderItem key={product.id} product={product} />
        ))}
      </ul>
      {cartProducts.length > 0 && (
        <div className={styles.wripper}>
          <p className={styles.total}>{t('Общая стоимость')} - </p><p className={styles.price}>{totalPrice} {t('грн')}</p>
        </div>
      )}
    </div>
  )
})

export default OrderList
