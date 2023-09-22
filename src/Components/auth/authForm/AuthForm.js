import React, { useState } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router'
import { pathes } from '../../../utils/pathes'
import {
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from '../../../Firebase/firebase'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import classNames from 'classnames'
import { Form, Input, Button, Checkbox } from 'antd'

const AuthForm = observer(() => {
  const { AuthStore } = useStore()
  const history = useHistory()
  const { t } = useTranslation();

  const [login, setLogin] = useState(true)
  const [form] = Form.useForm()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const setUser = async () => {
    if (login) {
      const res = await signInWithEmailAndPassword(
        formData.email,
        formData.password
      )
      if (res) {
        AuthStore.toggleModalAction()
        history.push(pathes.home)
      }
    } else {
      registerWithEmailAndPassword(
        formData.name,
        formData.email,
        formData.password
      )
      history.push(pathes.login)
      AuthStore.toggleModalAction()
    }
  }

  const onChange = evt => {
    const { value, name } = evt.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const onFinish = () => {
    setUser()
    setLogin(true)
    form.setFieldsValue({
      name: '',
      email: '',
      password: '',
    })
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.authForm}>
      <Form
        form={form}
        name="AuthForm"
        className={styles.form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className={styles.btnContainer}>
          <Button
            className={classNames(styles.btnChange, { [styles.activ]: login })}
            type="primary"
            onClick={() => setLogin(true)}
          >
            {t('Вход')}
          </Button>

          <Button
            className={classNames(styles.btnChange, { [styles.activ]: !login })}
            type="primary"
            onClick={() => setLogin(false)}
          >
            {t('Регистрация')}
          </Button>
        </div>

        {!login && (
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Введите Ваше Имя!' }]}
          >
            <Input
              name="name"
              value={formData.name}
              onChange={e => onChange(e)}
            />
          </Form.Item>
        )}
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Введите email!' }]}
        >
          <Input name="email" value={formData.email} onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Введите password!' }]}
        >
          <Input.Password
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </Form.Item>
        {login && (
          <p
            className={styles.forgotPassword}
            type="button"
            onClick={() => {
              AuthStore.setForgotPasswordAction()
            }}
          >
            {t('Забыли пароль?')}
          </p>
        )}
        <Form.Item
          className={styles.chekbox}
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>{t('Запомнить меня')}</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {t('Подтвердить')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})

export default AuthForm
