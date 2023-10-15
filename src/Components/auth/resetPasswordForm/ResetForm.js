import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next';

import { sendPasswordResetEmail } from '../../../Firebase/firebase'

import styles from './styles.module.scss'
import { Form, Input, Button } from 'antd'

const ResetPasswordPage = () => {
  const history = useHistory()
  const { t } = useTranslation();

  const [form] = Form.useForm()
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
        form={form}
        name="ResetPasswodForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className={styles.title}>{t('resetPasswordPage.reset_password_form')}</h2>
        <Form.Item
          className={styles.label}
          name={["email"]}
          label={t('resetPasswordPage.enter_your_email_please')}
          rules={[{
            required: true,
            message: t('resetPasswordPage.enter_valid_email_please'),
            type: "email",
          }]}
        >
          <Input
            className={styles.input}
            name="email"
            value={userEmail}
            placeholder={t('resetPasswordPage.enter_your_email_please')}
            onChange={e => onChange(e)}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {t('resetPasswordPage.reset_password')}
          </Button>
        </Form.Item>
      </Form>
    </div >
  )
}

export default ResetPasswordPage
