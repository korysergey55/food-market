import * as React from 'react'
import { useHistory } from 'react-router'
import { pathes } from '../../../utils/pathes'
import LayerImg from '../../../sourses/images/homePage/feachers/f1.png'
import LayerImg2 from '../../../sourses/images/homePage/feachers/f2.png'
import LayerImg3 from '../../../sourses/images/homePage/feachers/f3.png'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Feachers = () => {
  const { t } = useTranslation();
  const history = useHistory()
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={() => history.push(pathes.products)}>
          <div className={styles.wripper}>
            <h3 className={styles.title}>
              {t('Европейские бренды и Идеальное Качество')}
            </h3>
            <button type="button" className={styles.btn} >
              {t('Купить')}
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
        <li className={`${styles.item} ${styles.orange}`} onClick={() => history.push(pathes.products)}>
          <div className={styles.wripper}>
            <h3 className={styles.title}>
              {t('We work directly with suppliers from Europe')}
            </h3>
            <button type="button" className={styles.btn}>
              {t('Купить')}
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
        <li className={`${styles.item} ${styles.green}`} onClick={() => history.push(pathes.products)}>
          <div className={styles.wripper}>
            <h3 className={styles.title}>{t('The highest quality of delivered products!')}</h3>
            <button type="button" className={styles.btn}>
              {t('Купить')}
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
