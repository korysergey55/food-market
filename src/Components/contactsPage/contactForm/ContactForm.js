import React, { useState } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import { Form, Input, Button, Row, Col } from 'antd'
import styles from './styles.module.scss'

const validateMessages = {
  required: '${label} обязательное поле',
  types: {
    email: '${label} Не валидный email!',
    number: '${label} Не валидный номер телефона!',
  },
}
const ContactForm = observer(() => {
  const { AuthStore } = useStore()
  const [form] = Form.useForm()
  const [formData, setFormData] = useState({ name: '', email: '', tel: '', address: '', message: '' })

  const inputChange = (evt) => {
    const { value, name } = evt.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const submitForm = () => {
    AuthStore.setContactForm(formData)
    form.setFieldsValue({ name: '', email: '', tel: '', address: '', message: '' })
  }

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.title}>Связаться с нами</h2>
      <Form
        form={form}
        name="contactForm"
        validateMessages={validateMessages}
        onFinish={submitForm}
      >
        <Row gutter={18}>
          <Col span={12}>
            <Form.Item name={['name']} rules={[{ required: true }]}>
              <Input
                className={styles.input}
                placeholder="Имя"
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
              rules={[{ message: 'Введите Ваш номер телефона!' }]}
            >
              <Input
                className={styles.input}
                placeholder="Телефон"
                name="tel"
                value={formData.tel}
                onChange={inputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={['address']}>
              <Input
                className={styles.input}
                placeholder="Адресс"
                name="address"
                value={formData.address}
                onChange={inputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name={['message']}>
          <Input.TextArea
            className={styles.textarea}
            style={{ height: 181 }}
            placeholder="Сообщение"
            name="message"
            value={formData.message}
            onChange={inputChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.button}
          >
            Связаться
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})

export default ContactForm
