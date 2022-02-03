import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { sendPasswordResetEmail } from '../../../containers/Utils/Firebase/firebase'

import styles from './styles.module.scss'
import { Form, Input, Button } from 'antd'

const ResetPassword = () => {
  const history = useHistory()
  const [userEmail, setUserEmail] = useState('')

  const onChange = e => {
    const { value } = e.target
    setUserEmail(value)
  }
  const onFinish = () => {
    sendPasswordResetEmail(userEmail, history)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.formContainer}>
      <Form
        name="ResetPassvorfForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className={styles.title}>Страница сброса пароля!</h2>
        <Form.Item
         className={styles.label}
          label="Введите Ваш email"
          rules={[{ required: true, message: 'Введите Ваш email!' }]}
        >
          <Input
            className={styles.input}
            name="email"
            value={userEmail}
            placeholder="Введите Ваш email"
            onChange={e => onChange(e)}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Сбросить пароль
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ResetPassword
