import React, { useState } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import { Form, Input, Button, Row, Col, Radio, Space, } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTruck,
  faCreditCard,
  faUser,
} from '@fortawesome/free-solid-svg-icons'


const OrderForm = observer(() => {
  const { ProductsStore, AuthStore } = useStore()
  const { cart, cartProducts, totalPrice } = ProductsStore
  const { t } = useTranslation();
  const [form] = Form.useForm()

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      phone: '${label} is not a valid phone number!',
    },
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    ProductsStore.setOrderData(formData)
    ProductsStore.setOrderDataAPI(formData)
    form.setFieldsValue({
      name: '',
      email: '',
      tel: '',
      address: '',
      message: '',
      city: '',
      dilivery: '',
      payment: '',
      products: [],
      totalPrice: '',
    })
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
        {t('orderPage.orderForm.contact_information')}
      </h2>
      <Form
        form={form}
        name="order-form"
        id="order-form"
        validateMessages={validateMessages}
        onFinish={submitForm}
        className={styles.form}
      >
        <Row gutter={18}>
          <Col span={12}>
            <Form.Item
              name={['name']}
              rules={[{ message: t('orderPage.orderForm.enter_yours_name_please'), required: true }]}
            >
              <Input
                className={styles.input}
                placeholder={t("orderPage.orderForm.name")}
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
              rules={[{
                message: t('orderPage.orderForm.enter_valid_email_please'),
                required: true,
                type: "email",
              }]}
            >
              <Input
                className={styles.input}
                placeholder={t("orderPage.orderForm.email")}
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
              name={['phone']}
              rules={[{ message: t('orderPage.orderForm.enter_yours_phone_number_please'), required: true }]}
            >
              <Input
                className={styles.input}
                placeholder={t("orderPage.orderForm.phone")}
                name="phone"
                value={formData.phone}
                onChange={inputChange}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name={['message']}>
          <Input.TextArea
            className={styles.textarea}
            style={{ height: 181 }}
            placeholder={t("orderPage.orderForm.comments")}
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
          {t('orderPage.orderForm.delivery')}
        </h2>
        <Col span={12}>
          <Form.Item
            name={['city']}
            rules={[{ message: t('orderPage.orderForm.enter_yours_city_please'), required: true }]}
          >
            <Input
              className={styles.input}
              placeholder={t("orderPage.orderForm.city")}
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
            <Radio value={'express delivery'}>{t('orderPage.orderForm.express_delivery')}</Radio>
            <Radio value={'new mail'}>{t('orderPage.orderForm.new_mail')}</Radio>
            <Radio value={'pickup from the store'}>{t('orderPage.orderForm.pickup_from_the_store')}</Radio>
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
          {t('orderPage.orderForm.paymant')}
        </h2>
        <Radio.Group
          className={styles.radio}
          onChange={onChangePayment}
          value={formData.payment}
        >
          <Space direction="vertical">
            <Radio value={'payment upon receipt'}>{t('orderPage.orderForm.payment_upon_receipt')}</Radio>
            <Radio value={'card payment'}>{t('orderPage.orderForm.card_payment')}</Radio>
            <Radio value={'pay now'}>{t('orderPage.orderForm.pay_now')}</Radio>
          </Space>
        </Radio.Group>
        <Form.Item>
        </Form.Item>
        {/* <Button
          className={styles.button}
          type="primary"
          htmlType="submit"
          form="order-form"
        >
          {t('Оформить заказ')}
        </Button> */}
      </Form>
    </div>
  )
})

export default OrderForm
