import * as React from 'react'
import styles from './styles.module.scss'
import LayerImg from '../../../../sourses/images/feachers/f1.png'
import LayerImg2 from '../../../../sourses/images/feachers/f2.png'
import LayerImg3 from '../../../../sourses/images/feachers/f3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Feachers = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.productsList}>
        <li className={styles.productsItem1}>
          <div className={styles.productsItemContainer}>
            <h3 className={styles.productsTitle}>
              Европейские бренды. Идеальное Качество
            </h3>
            <button type="button" className={styles.productsList_shopNow} >
              Купить{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.productsList_shopNow_icon}
              />
            </button>
          </div>
          <img
            className={styles.productsImage}
            src={LayerImg}
            alt="Layer"
          ></img>
        </li>
        <li className={styles.productsItem2}>
          <div className={styles.productsItemContainer}>
            <h3 className={styles.productsTitle}>
              Работаем напрямую с поставщиками из Европы
            </h3>
            <button type="button" className={styles.productsList_shopNow}>
            Купить{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.productsList_shopNow_icon}
              />
            </button>
          </div>
          <img
            className={styles.productsImage}
            src={LayerImg2}
            alt="Layer2"
          ></img>
        </li>
        <li className={styles.productsItem3}>
          <div className={styles.productsItemContainer}>
            <h3 className={styles.productsTitle}>Наивысшее качество поставляемых продуктов!</h3>
            <button type="button" className={styles.productsList_shopNow}>
            Купить{' '}
              <FontAwesomeIcon
                icon={faArrowRight}
                className={styles.productsList_shopNow_icon}
              />
            </button>
          </div>
          <img
            className={styles.productsImage}
            src={LayerImg3}
            alt="Layer3"
          ></img>
        </li>
      </ul>
    </div>
  )
}

export default Feachers
