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
        <div className={styles.scheduleBox}>
          <p className={styles.subtitle}>{t('contactPage.contactInfo.schedule')}</p>
          <p className={styles.text}>{t('contactPage.contactInfo.mon_fri')}: 8:00 - 20:00</p>
          <p className={styles.text}>{t('contactPage.contactInfo.sat')}: 8:00 - 16:00</p>
          <p className={styles.text}>{t('contactPage.contactInfo.sun')}: {t('contactPage.contactInfo.day_off')}</p>
        </div>
        <div className={styles.contactsBox}>
          <p className={styles.subtitle}>{t('contactPage.contactInfo.phones')}:</p>
          <Tooltip title={t("contactPage.contactInfo.call")}>
            <a className={styles.link} href={`tel:${shopTel}`}>
              {shopTel}
            </a>
          </Tooltip>
          <Tooltip title={t("contactPage.contactInfo.call")}>
            <a className={styles.link} href={`tel:${shopTel}`}>
              +380 63 056 0488
            </a>
          </Tooltip>
        </div>
        <div><p className={styles.subtitle}>{t("contactPage.contactInfo.email")}</p>
          <a className={`${styles.link} ${styles.email}`} href={`mailto:${shopEmail}`}>
            {shopEmail}
          </a>
        </div>

      </div>
    </div>
  )
}

export default ContactInfo
