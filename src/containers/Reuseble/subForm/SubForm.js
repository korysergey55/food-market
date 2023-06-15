import React, { useState } from 'react';
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'

const SubForm = observer(() => {
  const { t } = useTranslation();
  const { AuthStore, ProductsStore } = useStore()
  const [state, setState] = useState('')

  const handleChange = (evt) => {
    setState(evt.target.value)
  }

  const onFinish = (evt) => {
    evt.preventDefault()
    AuthStore.setSubscribeForm(state)
    ProductsStore.setSubscribeFormAPI(state)
    setState('')
  }

  return (
    <div className={styles.containerSubForm}>
      <form className={styles.form} onSubmit={(evt) => onFinish(evt)}>
        <h2 className={styles.title}>{t('Подпишись и получи 150 грн на покупки!')}</h2>
        <div className={styles.wripper}>
          <input
            className={styles.input}
            placeholder={t("Введите Ваш еmail")}
            type='email'
            name='subscribe'
            value={state}
            onChange={(evt) => handleChange(evt)}
          ></input>
          <button className={styles.button} type="submit">
            {t('Подписаться')}
          </button>
        </div>
      </form>
    </div>
  );
})

export default SubForm;