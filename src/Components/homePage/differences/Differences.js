import * as React from 'react'
import { useHistory } from 'react-router'
import { pathes } from '../../../utils/pathes'
import FeatureImg from '../../../sourses/images/homePage/differences/icon1.png'
import Feature2Img from '../../../sourses/images/homePage/differences/icon2.png'
import Feature3Img from '../../../sourses/images/homePage/differences/icon3.png'
import Feature4Img from '../../../sourses/images/homePage/differences/icon4.png'
import CartImg from '../../../sourses/images/homePage/differences/featuresCart.png'

import styles from './styles.module.scss'
import { Button } from 'antd'

const Differences = () => {
  const history = useHistory()
  return (
    <div className={styles.differences}>
      <h2 className={styles.title}>Почему выберают нас</h2>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img className={styles.img} src={FeatureImg} alt="FeatureImg" />
            <h3 className={styles.title}>Качественные продукты</h3>
            <p className={styles.text}>
              Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci eius
              modi incidunt
            </p>
          </li>

          <li className={styles.item}>
            <img className={styles.img} src={Feature2Img} alt="Feature2Img" />
            <h3 className={styles.title}>Онлайн-заказ</h3>
            <p className={styles.text}>
              Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci eius
              modi incidunt
            </p>
          </li>
        </ul>
        <div className={styles.imgContainer}>
          <img className={styles.mainImg} src={CartImg} alt="CartImg" />
          <Button
            className={styles.btnAnt}
            type="primary"
            size="large"
            onClick={() => history.push(pathes.products)}
          >
            В Магазин
          </Button>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img className={styles.img} src={Feature3Img} alt="Feature3Img" />
            <h3 className={styles.title}>Быстрая доставка</h3>
            <p className={styles.text}>
              Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci eius
              modi incidunt
            </p>
          </li>

          <li className={styles.item}>
            <img className={styles.img} src={Feature4Img} alt="Feature4Img" />
            <h3 className={styles.title}>24/7 Сервис</h3>
            <p className={styles.text}>
              Aui dolorem iesum ruia dolor sit amet, consectetur, adipisci eius
              modi incidunt
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Differences
