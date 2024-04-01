import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faViber, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'

const SotialList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="https://web.telegram.org" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} className={styles.icon} />
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="https://www.viber.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faViber} className={styles.icon} />
        </a>
      </li>
    </ul>
  )
}

export default SotialList
