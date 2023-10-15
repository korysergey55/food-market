import React from 'react'
import {
  shopLocation,
  shopTel,
  shopEmail,
  shopAdress,
} from '../../../utils/shopLocation'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const ReachUs = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wripper}>
      <div className={styles.reachUs}>
        <h3 className={styles.title}>{t('contactPage.reach_us')}</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faMapMarkerAlt}
                color="#ffffff"
                size="2x"
              />
            </a>
            <div className={styles.liContainer}>
              {/* <h4 className={styles.subtitle}>Адрес</h4> */}
              <a className={styles.text}>{shopAdress}</a>
            </div>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href={`tel:${shopTel}`}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faPhoneAlt}
                color="#ffffff"
                size="2x"
              />
            </a>
            <div className={styles.liContainer}>
              {/* <h4 className={styles.subtitle}>Телефон</h4> */}
              <a className={styles.text} href={`tel:${shopTel}`}>
                {shopTel}
              </a>
            </div>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href={`mailto:${shopEmail}`}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faEnvelope}
                color="#ffffff"
                size="2x"
              />
            </a>
            <div className={styles.liContainer}>
              {/* <h4 className={styles.subtitle}>Email</h4> */}
              <a className={styles.text} href={`mailto:${shopEmail}`}>
                {shopEmail}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ReachUs
