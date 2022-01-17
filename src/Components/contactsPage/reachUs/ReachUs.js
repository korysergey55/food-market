import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { shopLocation, shopTel, shopEmail, shopAdress } from '../../../utils/location'

const ReachUs = () => {
  return (
    <div className={styles.wripper}>
      <div className={styles.reachUs}>
        <h3 className={styles.title}>Reach Us</h3>
        <p className={styles.discription}>
          Aui dolorem iesum ruia dolor sit amet, consectetur.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href={shopLocation}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faMapMarkerAlt}
                color="#ffffff"
                size="3x"
              />
            </a>
            <div className={styles.liContainer}>
              <p className={styles.subtitle}>Location</p>
              <a className={styles.text}
                href={shopLocation}
                target="_blank"
                rel="noopener noreferrer"
              >
                {shopAdress}
              </a>
            </div>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href={`tel:${shopTel}`}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faMobileAlt}
                color="#ffffff"
                size="3x"
              />
            </a>
            <div className={styles.liContainer}>
              <p className={styles.subtitle}>Phone</p>
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
                size="3x"
              />
            </a>
            <div className={styles.liContainer}>
              <p className={styles.subtitle}>Email</p>
              <a className={styles.text}
                href={`mailto:${shopEmail}`}
              >
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
