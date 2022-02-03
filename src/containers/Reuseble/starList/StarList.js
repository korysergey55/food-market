import * as React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const StarList = () => {
  return (
    <ul className={styles.starList}>
      <li className={styles.item}>
        <a className={styles.link}>
          <FontAwesomeIcon
            icon={faStar}
            className={styles.icon}
          />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} >
          <FontAwesomeIcon
            icon={faStar}
            className={styles.icon}
          />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} >
          <FontAwesomeIcon
            icon={faStar}
            className={styles.icon}
          />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} >
          <FontAwesomeIcon
            icon={faStar}
            className={styles.icon}
          />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link}>
          <FontAwesomeIcon
            icon={faStar}
            className={styles.icon}
          />
        </a>
      </li>
    </ul>
  )
}

export default StarList
