import React from 'react'
import { useHistory } from 'react-router'
import { pathes } from '../../../utils/pathes'

import styles from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import BunnerImg from '../../../sourses/images/feachers/f1.png'

const Baner = () => {
  const history = useHistory()
  return (
    <div className={styles.baner}>
      <div className={styles.leftSide}>
        <p className={styles.text}>
          50% <span className={styles.span}>Продано</span>{' '}
        </p>
        <button className={styles.button}  >
          Купить {''}
          <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow} />
        </button>
      </div>
      <h2 className={styles.title}>Популярные и Трендовые продукты</h2>
      <img
        className={styles.img}
        src={BunnerImg}
        alt="Bunner"
        onClick={() => history.push(pathes.products)}
      />
    </div>
  )
}

export default Baner
