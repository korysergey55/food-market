import React from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { pathes } from '../../../utils/pathes'
import {
  signInWithGoogle,
  signInWithFacebook,
} from '../../../Firebase/firebase'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const LoginForm = observer(() => {
  const { AuthStore } = useStore()
  const history = useHistory()
  const { t } = useTranslation();

  const loginGoogle = async () => {
    const res = await signInWithGoogle()
    if (res) {
      AuthStore.loginUserAction(res.credential.accessToken)
      history.push(pathes.home)
    }
  }

  const loginFacebook = async () => {
    const res = await signInWithFacebook()
    if (res) {
      AuthStore.loginUserAction(res.credential.accessToken)
      history.push(pathes.home)
    }
  }

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.subtitle}>{t('Вход c помощью')}</h2>
      <ul className={styles.list}>
        <li className={styles.item} name="google" onClick={() => loginGoogle()}>
          <p className={styles.text}> Google</p>
          <button className={styles.loginBtn} type="button">
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGoogle}
              color="white"
              size="2x"
            />
          </button>
        </li>
        <li
          className={styles.item}
          name="facebook"
          onClick={() => loginFacebook()}
        >
          <p className={styles.text}> Facebook</p>
          <button className={styles.loginBtn} type="button">
            <FontAwesomeIcon icon={faFacebookF} color="white" size="2x" />
          </button>
        </li>
      </ul>
    </div>
  )
})

export default LoginForm
