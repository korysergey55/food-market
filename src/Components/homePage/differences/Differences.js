import * as React from 'react'
import { useHistory } from 'react-router'
import { pathes } from '../../../utils/pathes'
import FeatureImg from '../../../sourses/images/homePage/differences/icon1.png'
import Feature2Img from '../../../sourses/images/homePage/differences/icon2.png'
import Feature3Img from '../../../sourses/images/homePage/differences/icon3.png'
import Feature4Img from '../../../sourses/images/homePage/differences/icon4.png'
import CartImg from '../../../sourses/images/homePage/differences/featuresCart.png'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import { Button } from 'antd'

const Differences = () => {
  const { t } = useTranslation();
  const history = useHistory()
  return (
    <div className={styles.differences}>
      <h2 className={styles.title}>{t('Почему выберают нас')}</h2>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img className={styles.img} src={FeatureImg} alt="FeatureImg" />
            <h3 className={styles.title}>{t('Качественные продукты')}</h3>
            <p className={styles.text}>
              {t('Мы предоставляем только сертифицируемые продукты')}
            </p>
          </li>

          <li className={styles.item}>
            <img className={styles.img} src={Feature2Img} alt="Feature2Img" />
            <h3 className={styles.title}>{t('Онлайн-заказ')}</h3>
            <p className={styles.text}>
              {t('Быстрое оформление заказа и отправка в тот же день')}
            </p>
          </li>
        </ul>
        <div className={styles.imgContainer}>
          <img className={styles.mainImg} src={CartImg} alt="CartImg" />
          <Button
            className={styles.btn}
            type="primary"
            size="large"
            onClick={() => history.push(pathes.products)}
          >
            {t('В Магазин')}
          </Button>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img className={styles.img} src={Feature3Img} alt="Feature3Img" />
            <h3 className={styles.title}>{t('Быстрая доставка')}</h3>
            <p className={styles.text}>
              {t('Отправка товара в течение часа после заказа')}
            </p>
          </li>

          <li className={styles.item}>
            <img className={styles.img} src={Feature4Img} alt="Feature4Img" />
            <h3 className={styles.title}>{t('24/7 Сервис')}</h3>
            <p className={styles.text}>{t('Наш сервис работает круглосуточно')}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Differences
