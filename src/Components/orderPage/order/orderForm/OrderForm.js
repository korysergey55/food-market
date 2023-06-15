import React, { useState } from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import { Form, Input, Button, Row, Col, Radio, Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTruck,
  faCreditCard,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
}
const OrderForm = observer(() => {
  const { ProductsStore, AuthStore } = useStore()
  const { cart, cartProducts, totalPrice } = ProductsStore
  const { t } = useTranslation();
  const [form] = Form.useForm()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
    city: '',
    dilivery: '',
    payment: '',
    products: [...cartProducts],
    totalPrice,
  })

  const inputChange = evt => {
    const { value, name } = evt.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const onChangeDelivery = evt => {
    setFormData(prev => ({
      ...prev,
      dilivery: evt.target.value,
    }))
  }

  const onChangePayment = evt => {
    setFormData(prev => ({
      ...prev,
      payment: evt.target.value,
    }))
  }

  const submitForm = () => {
    AuthStore.setOrderData(formData)
    ProductsStore.setOrderDataAPI(formData)
    // form.setFieldsValue({
    //   name: '',
    //   email: '',
    //   tel: '',
    //   address: '',
    //   message: '',
    //   city: '',
    //   dilivery: '',
    //   payment: '',
    //   products: [],
    //   totalPrice: '',
    // })
  }

  return (
    <div className={styles.orderForm}>
      <h2 className={styles.title}>
        {' '}
        <FontAwesomeIcon
          className={styles.icon}
          icon={faUser}
          color="black"
          size="1x"
        />{' '}
        - {t('Контактная информация')}
      </h2>
      <Form
        form={form}
        name="OrderForm"
        validateMessages={validateMessages}
        onFinish={submitForm}
      >
        <Row gutter={18}>
          <Col span={12}>
            <Form.Item name={['name']} rules={[{ required: true }]}>
              <Input
                className={styles.input}
                placeholder={t("Имя")}
                minLength={3}
                name="name"
                value={formData.name}
                onChange={inputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['email']}
              rules={[{ type: 'email', required: true }]}
            >
              <Input
                className={styles.input}
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={inputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={18}>
          <Col span={12}>
            <Form.Item
              name={['tel']}
              rules={[{ message: 'Пожалуйста введите номер телефона!', required: true }]}
            >
              <Input
                className={styles.input}
                placeholder={t("Телефон")}
                name="tel"
                value={formData.tel}
                onChange={inputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name={['message']}>
          <Input.TextArea
            className={styles.textarea}
            style={{ height: 181 }}
            placeholder={t("Коментарии")}
            name="message"
            value={formData.message}
            onChange={inputChange}
          />
        </Form.Item>

        <h2 className={styles.title}>
          {' '}
          <FontAwesomeIcon
            className={styles.icon}
            icon={faTruck}
            color="black"
            size="1x"
          />{' '}
          - {t('Доставка')}
        </h2>
        <Col span={12}>
          <Form.Item name={['city']} rules={[{ required: true }]}>
            <Input
              className={styles.input}
              placeholder={t("Город")}
              minLength={3}
              name="city"
              value={formData.city}
              onChange={inputChange}
            />
          </Form.Item>
        </Col>
        <Radio.Group
          className={styles.radio}
          onChange={onChangeDelivery}
          value={formData.dilivery}
        >
          <Space direction="vertical">
            <Radio value={'Курьерская доставка'}>{t('Курьерская доставка')}</Radio>
            <Radio value={'Новая почта'}>{t('Новая почта')}</Radio>
            <Radio value={'Самовывоз из магазина'}>{t('Самовывоз из магазина')}</Radio>
          </Space>
        </Radio.Group>

        <h2 className={styles.title}>
          {' '}
          <FontAwesomeIcon
            className={styles.icon}
            icon={faCreditCard}
            color="black"
            size="1x"
          />{' '}
          - {t('Оплата')}
        </h2>
        <Radio.Group
          className={styles.radio}
          onChange={onChangePayment}
          value={formData.payment}
        >
          <Space direction="vertical">
            <Radio value={'Оплата при получении'}>{t('Оплата при получении')}</Radio>
            <Radio value={'Оплата на карту'}>{t('Оплата на карту')}</Radio>
            <Radio value={'Оплатить сейчас'}>{t('Оплатить сейчас')}</Radio>
          </Space>
        </Radio.Group>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button}>
            {t('Оформить заказ')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})

export default OrderForm
