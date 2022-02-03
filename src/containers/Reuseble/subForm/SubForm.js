import React, { useState } from 'react';
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import styles from './styles.module.scss'

const SubForm = observer(() => {
  const { AuthStore } = useStore()
  const [state, setState] = useState('')
  
  const handleChange = (evt) => {
    setState(evt.target.value)
  }

  const onFinish = (evt) => {
    evt.preventDefault()
    AuthStore.setSubscribeForm(state)
    setState('')
  }
  
  return (
    <div className={styles.containerSubForm}>
      <form className={styles.form} onSubmit={(evt) => onFinish(evt)}>
        <h2 className={styles.title}>Подпишись и получи 150 грн!</h2>
        <div className={styles.wripper}>
          <input
            className={styles.input}
            placeholder="Введите Ваш еmail"
            type='email'
            name='subscribe'
            value={state}
            onChange={(evt) => handleChange(evt)}
          ></input>
          <button className={styles.button} type="submit">
            Подписаться
          </button>
        </div>
      </form>
    </div>
  );
})

export default SubForm;