import * as React from 'react'
import { useHistory } from 'react-router'
import styles from './styles.module.scss'
import notFoundImg from '../../sourses/images/404.jpg'


const NotFoundComponent = ({
  title = 'We Could Not Find Page You’re Looking',
  img = notFoundImg,
}) => {
  const history = useHistory()
  return (
    <div className={styles.container}>
      <div className={styles.wripper}>
        <img className={styles.img} src={img} alt="notFoundImg" />
        <div className={styles.rigthSide}>
          <h2 className={styles.title}>404</h2>
          <h3 className={styles.subtitle}>{title}</h3>
          <p className={styles.text}>
            The link you’re trying to access is probably broken, or the page has
            been removed.
          </p>
          <button
            type="button"
            className={styles.buttonBackHome}
            onClick={() => history.push('/')}
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundComponent
