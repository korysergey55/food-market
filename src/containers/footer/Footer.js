import * as React from 'react'
import { useHistory } from 'react-router'
import {
  shopLocation,
  shopTel,
  shopEmail,
  shopAdress,
} from '../../utils/location'
import SotialList from '../Reuseble/sotialList/SotialList'
import { pathes } from '../../utils/pathes'
import visa from '../../sourses/images/footer/visamaster.png'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Tooltip } from 'antd'

const Footer = () => {
  const { t } = useTranslation();
  const history = useHistory()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h4 className={styles.title}>{t('Наши контакты')}</h4>
            <div className={styles.wripper}>
              <h3
                className={styles.link}
                onClick={() => history.push(pathes.contacts)}
              >
                <Tooltip title={t("Показать адрес")}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faMapMarkerAlt}
                    color="#ffffff"
                    size="2x"
                  />
                  {shopAdress}
                </Tooltip>
              </h3>
            </div>
            <div className={styles.wripper}>
              <Tooltip title={t("Позвонить")}>
                <a className={styles.link} href={`tel:${shopTel}`}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faPhoneAlt}
                    color="#ffffff"
                    size="2x"
                  />
                  {shopTel}
                </a>
              </Tooltip>
            </div>
            <div className={styles.wripper}>
              <a className={styles.link} href={`mailto:${shopEmail}`}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faEnvelope}
                  color="#ffffff"
                  size="2x"
                />
                {shopEmail}
              </a>
            </div>
          </li>

          <li className={`${styles.item} ${styles.itemNone}`}>
            <h4 className={styles.title}>{t('Полезные ссылки')}</h4>
            <p
              className={styles.text}
              onClick={() => history.push(pathes.products)}
            >
              {t('Популярные продукты')}
            </p>
            <p
              className={styles.text}
              onClick={() => history.push(pathes.products)}
            >
              {t('Товары')}
            </p>
            <p
              className={styles.text}
              onClick={() => history.push(pathes.contacts)}
            >
              {t('Контакты')}
            </p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.title}>{t('Социальные сети')}</h4>
            <SotialList />
            <img className={styles.visa} src={visa} alt="visa" />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
