import React from 'react'
import {
  shopLocation,
  shopTel,
  shopEmail,
  shopAdress,
} from '../../../utils/location'

import styles from './styles.module.scss'
import { Tooltip } from 'antd'

const ContactInfo = () => {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}></h3>
      <div className={styles.wripper}>
        <div className={styles.box}>
          <p className={styles.subtitle}>Консультації та замовлення за телефонами:</p>
          <Tooltip title="позвонить">
            <a className={styles.link} href={`tel:${shopTel}`}>
              {shopTel}
            </a>
          </Tooltip>
          <Tooltip title="позвонить">
            <a className={styles.link} href={`tel:${shopTel}`}>
              {shopTel}
            </a>
          </Tooltip>
          <a className={`${styles.link} ${styles.email}`} href={`tel:${shopEmail}`}>
              {shopEmail}
            </a>
        </div>
        <div className={styles.box}>
          <p className={styles.subtitle}>График роботи</p>
          <p className={styles.text}>В будни с 8:00 до 21:00</p>
          <p className={styles.text}>Субота с 9:00 до 20:00</p>
          <p className={styles.text}>Воскресенье с 10:00 до 19:00</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
