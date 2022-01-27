import * as React from 'react'
import { useHistory } from 'react-router'
import {pathes} from '../../../utils/pathes'
import LayerImg from '../../../sourses/images/homePage/feachers/f1.png'
import LayerImg2 from '../../../sourses/images/homePage/feachers/f2.png'
import LayerImg3 from '../../../sourses/images/homePage/feachers/f3.png'

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'antd'

const Feachers = () => {
  const history = useHistory()
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={()=> history.push(pathes.products)}>
          <div className={styles.wripper}>
            <h3 className={styles.title}>
              Европейские бренды. Идеальное Качество
            </h3>
            <button type="button" className={styles.btn} >
              Купить{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.btn_icon}
              />
            </button>
          </div>
          <img
            className={styles.img}
            src={LayerImg}
            alt="Layer"
          ></img>
        </li>
        <li className={`${styles.item} ${styles.orange}`} onClick={()=> history.push(pathes.products)}>
          <div className={styles.wripper}>
            <h3 className={styles.title}>
              Работаем напрямую с поставщиками из Европы
            </h3>
            <button type="button" className={styles.btn}>
            Купить{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.btn_icon}
              />
            </button>
          </div>
          <img
            className={styles.img}
            src={LayerImg2}
            alt="Layer2"
          ></img>
        </li>
        <li className={`${styles.item} ${styles.green}`} onClick={()=> history.push(pathes.products)}>
          <div className={styles.wripper}>
            <h3 className={styles.title}>Наивысшее качество поставляемых продуктов!</h3>
            <button type="button" className={styles.btn}>
            Купить{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.btn_icon}
              />
            </button>
          </div>
          <img
            className={styles.img}
            src={LayerImg3}
            alt="Layer3"
          ></img>
        </li>
      </ul>
    </div>
  )
}

export default Feachers
