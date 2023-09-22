import React from 'react'
import {
  shopLocation,
  shopTel,
  shopEmail,
  shopAdress,
} from '../../../utils/shopLocation'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import { Tooltip } from 'antd'

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.info}>
      <div className={styles.wripper}>
        <div className={styles.box}>
          <p className={styles.subtitle}>{t('Tелефоны')}:</p>
          <Tooltip title={t("Позвонить")}>
            <a className={styles.link} href={`tel:${shopTel}`}>
              {shopTel}
            </a>
          </Tooltip>
          <Tooltip title={t("Позвонить")}>
            <a className={styles.link} href={`tel:${shopTel}`}>
              +380 63 056 0488
            </a>
            <p className={styles.subtitle}>Email</p>
          </Tooltip>
          <a
            className={`${styles.link} ${styles.email}`}
            href={`mailto:${shopEmail}`}
          >
            {shopEmail}
          </a>
        </div>
        <div className={styles.box}>
          <p className={styles.subtitle}>{t('График роботи')}</p>
          <p className={styles.text}>{t('Пн-пт')}: 8:00 - 20:00</p>
          <p className={styles.text}>{t('Сб')}: 8:00 - 16:00</p>
          <p className={styles.text}>{t('Вс')}: виходной</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
