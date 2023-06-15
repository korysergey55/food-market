import React from 'react'
import { useEffect } from 'react';
import { useStore } from '../../storeMobx';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

import OrderList from './order/orderList/OrderList'
import OrderForm from './order/orderForm/OrderForm'
import styles from './styles.module.scss'

const OrderPage = observer(() => {
  const { ProductsStore } = useStore()
  const { cartProducts } = ProductsStore
  const history = useHistory()
  const { t } = useTranslation();

  useEffect(() => {
    if (!cartProducts.length) history.push('/cart')
  }, [cartProducts])

  return (
    <section className={styles.orderPage}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('Оформление заказа')}</h2>
        <div className={styles.wripper}>
          <div className={styles.orderForm}>
            <OrderForm />
          </div>
          <OrderList />
        </div>
      </div>
    </section>
  )
})

export default OrderPage
