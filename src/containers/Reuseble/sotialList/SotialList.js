import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faViber,
  faTelegram,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const SotialList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        {/* <FontAwesomeIcon icon={faInstagram} className={styles.icon} /> */}
      </li>
      <li className={styles.item}>
        {/* <FontAwesomeIcon icon={faFacebookF} className={styles.icon} /> */}
      </li>
      <li className={styles.item}>
        {/* <FontAwesomeIcon icon={faTelegram} className={styles.icon} /> */}
      </li>
      <li className={styles.item}>
        {/* <FontAwesomeIcon icon={faViber} className={styles.icon} /> */}
      </li>
    </ul>
  )
}

export default SotialList
