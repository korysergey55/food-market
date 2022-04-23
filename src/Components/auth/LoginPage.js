import React, { useEffect } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import ModalAnt from '../../containers/modalAnt/ModalAnt'
import Header from '../../containers/header/Header'
import LoginForm from './loginForm/LoginForm'
import AuthForm from './authForm/AuthForm'
import ResetPassword from './resetForm/ResetForm'

import styles from './styles.module.scss'

const LoginPage = observer(() => {
  const { AuthStore } = useStore()
  const { antModal, forgotPassword } = AuthStore

  useEffect(() => {
    AuthStore.toggleAntModalAction()
  }, [])

  return (
    <div className={styles.LoginPage}>
      <div className={styles.hero}></div>
      <div className={styles.hero}></div>
      <div className={styles.container}>
        {antModal && (
          <ModalAnt visible={true} width="700px">
            <div className={styles.wripper}>
              {!forgotPassword ? (
                <>
                  <AuthForm />
                  <LoginForm />
                </>
              ) : (
                <ResetPassword />
              )}
            </div>
          </ModalAnt>
        )}
      </div>
    </div>
  )
})

export default LoginPage
