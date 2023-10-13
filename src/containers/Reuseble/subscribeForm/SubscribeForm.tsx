import React, { useState } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'

const SubscribeForm = observer(() => {
  const { t } = useTranslation()
  const { AuthStore } = useStore()
  const [state, setState] = useState('')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setState(evt.target.value)
  }

  const onFinish = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    AuthStore.setSubscribeOperationAPI(state)
    setState('')
  }

  return (
    <div className={styles.containerSubForm}>
      <form className={styles.form} onSubmit={evt => onFinish(evt)}>
        <h2 className={styles.title}>{t('subscribe_Form.subscribe_and_get_150_uan_on_purchases')}</h2>
        <div className={styles.wripper}>
          <input
            className={styles.input}
            placeholder={t('subscribe_Form.enter_yours_email')}
            type="email"
            name="subscribe"
            value={state}
            onChange={evt => handleChange(evt)}
          ></input>
          <button className={styles.button} name="subscribe-btn" type="submit">
            {t('subscribe_Form.subscribe')}
          </button>
        </div>
      </form>
    </div>
  )
})

export default SubscribeForm
