import React from 'react'
import { useEffect } from 'react';
import { useStore } from '../../storeMobx';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

import OrderList from './order/orderList/OrderList'
import OrderForm from './order/orderForm/OrderForm'

import { Button } from 'antd'
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
      <h2 className={styles.title}>{t('Оформление заказа')}</h2>
      <div className={styles.container}>
        <div className={styles.wripper}>
          <div className={styles.orderForm}>
            <OrderForm />
          </div>
          <OrderList />
        </div>
        <Button
          className={styles.button}
          type="primary"
          htmlType="submit"
          form="order-form"
        >
          {t('Оформить заказ')}
        </Button>
      </div>
    </section>
  )
})

export default OrderPage
