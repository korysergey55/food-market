import React, { useEffect } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import ModalAnt from '../../containers/modalAnt/ModalAnt'
import Header from '../../containers/header/Header'
import LoginForm from './loginForm/LoginForm'
import AuthForm from './authForm/AuthForm'
import ResetPasswordPage from './resetPasswordForm/ResetForm'

import styles from './styles.module.scss'

const LoginPage = observer(() => {
  const { AuthStore } = useStore()
  const { antModal, forgotPassword } = AuthStore

  useEffect(() => {
    !antModal && AuthStore.toggleAntModalAction()
  }, [AuthStore])

  return (
    <div className={styles.LoginPage}>
      <div className={styles.hero}></div>
      <div className={styles.container}>
        {antModal && (
          <ModalAnt visible={true} width="">
            <div className={styles.wripper}>
              {!forgotPassword ? (
                <div className={styles.contentWripper}>
                  <AuthForm />
                  <LoginForm />
                </div>
              ) : (
                <ResetPasswordPage />
              )}
            </div>
          </ModalAnt>
        )}
      </div>
    </div>
  )
})

export default LoginPage
