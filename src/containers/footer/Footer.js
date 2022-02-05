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

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  const history = useHistory()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h4 className={styles.title}>Наши контакты</h4>
            <div className={styles.wripper}>
              <h3
                className={styles.link}
                onClick={() => history.push(pathes.contacts)}
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faMapMarkerAlt}
                  color="#ffffff"
                  size="2x"
                />
                {shopAdress}
              </h3>
            </div>
            <div className={styles.wripper}>
              <a className={styles.link} href={`tel:${shopTel}`}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faPhoneAlt}
                  color="#ffffff"
                  size="2x"
                />
                {shopTel}
              </a>
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

          <li className={styles.item}>
            <h4 className={styles.title}>Полезные ссылки</h4>
            <p
              className={styles.text}
              onClick={() => history.push(pathes.products)}
            >
              Популярные Товары
            </p>
            <p
              className={styles.text}
              onClick={() => history.push(pathes.products)}
            >
              Товары
            </p>
            <p
              className={styles.text}
              onClick={() => history.push(pathes.contacts)}
            >
              Контакты
            </p>
          </li>
          <li className={styles.item}>
            <h4 className={styles.title}>Социальные сети</h4>
            <SotialList />
            <img className={styles.visa} src={visa} alt="visa" />
            {/* <p className={styles.subtitle}>Monday – Saturday</p>
            <p className={styles.text}>12.00 – 14.45</p>
            <p className={styles.subtitle}>Sunday – Thursday</p>
            <p className={styles.text}>17.30 – 00.00</p> */}
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
