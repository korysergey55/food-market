import * as React from 'react'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next';

import { shopTel, shopEmail, shopAdress } from '../../utils/shopLocation'
import { pathes } from '../../utils/pathes'
import SotialList from '../Reuseble/sotialList/SotialList'


import styles from './styles.module.scss'
import VisaCartImage from '../../sourses/images/footer/visamaster.png'
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
            <h4 className={styles.title}>{t('footer.contacts')}</h4>
            <div className={styles.wripper}>
              <h3
                className={styles.link}
                onClick={() => history.push(pathes.contacts)}
              >
                <Tooltip title={t("footer.show_address")}>
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
              <Tooltip title={t("footer.call")}>
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
              <Tooltip title={t("footer.send_email")}>
                <a className={styles.link} href={`mailto:${shopEmail}`}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faEnvelope}
                    color="#ffffff"
                    size="2x"
                  />
                  {shopEmail}
                </a>
              </Tooltip>
            </div>
          </li>

          <li className={`${styles.item} ${styles.itemNone}`}>
            <h4 className={styles.title}>{t('footer.useful_links')}</h4>
            <p
              className={styles.text}
              onClick={() => history.push(pathes.products)}
            >
              {t('footer.popular_products')}
            </p>
            <p
              className={styles.text}
              onClick={() => history.push(pathes.products)}
            >
              {t('footer.goods')}
            </p>
            <p
              className={styles.text}
              onClick={() => history.push(pathes.contacts)}
            >
              {t('footer.contacts')}
            </p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.title}>{t('footer.social_media')}</h4>
            <SotialList />
            <img className={styles.visa} src={VisaCartImage} alt="visa card image" />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
