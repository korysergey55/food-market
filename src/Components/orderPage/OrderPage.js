import React from 'react'
import { useTranslation } from 'react-i18next';
import OrderList from './order/orderList/OrderList'
import OrderForm from './order/orderForm/OrderForm'
import styles from './styles.module.scss'

const OrderPage = () => {
  const { t } = useTranslation();
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
}

export default OrderPage
