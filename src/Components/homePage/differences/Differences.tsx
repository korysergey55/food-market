import * as React from 'react'
import { useHistory } from 'react-router'
import { pathes } from '../../../utils/pathes'
import differencesIcon1 from '../../../sourses/images/homePage/differences/icon1.png'
import differencesIcon2 from '../../../sourses/images/homePage/differences/icon2.png'
import differencesIcon3 from '../../../sourses/images/homePage/differences/icon3.png'
import differencesIcon4 from '../../../sourses/images/homePage/differences/icon4.png'
import CartImage from '../../../sourses/images/homePage/differences/featuresCart.png'

import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'
import { Button } from 'antd'

const Differences = () => {
  const { t } = useTranslation()
  const history = useHistory()
  return (
    <div className={styles.differences}>
      <h2 className={styles.title}>{t('differences.why_choose_us')}</h2>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img className={styles.img} src={differencesIcon1} alt="Differences image" />
            <h3 className={styles.title}>{t('differences.quality_products')}</h3>
            <p className={styles.text}>{t('differences.we_provide_only_certified_products')}</p>
          </li>

          <li className={styles.item}>
            <img className={styles.img} src={differencesIcon2} alt="Differences image" />
            <h3 className={styles.title}>{t('differences.online_order')}</h3>
            <p className={styles.text}>{t('differences.fast_ordering_and_same_day_shipping')}</p>
          </li>
        </ul>
        <div className={styles.imgContainer}>
          <img className={styles.mainImg} src={CartImage} alt="Cart image" />
          <Button className={styles.btn} type="primary" size="large" onClick={() => history.push(pathes.products)}>
            {t('differences.to_shop')}
          </Button>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img className={styles.img} src={differencesIcon3} alt="Differences image" />
            <h3 className={styles.title}>{t('differences.fast_delivery')}</h3>
            <p className={styles.text}>{t('differences.sending_goods_within_an_hour_after_ordering')}</p>
          </li>

          <li className={styles.item}>
            <img className={styles.img} src={differencesIcon4} alt="Differences image" />
            <h3 className={styles.title}>{t('differences.24_7_service')}</h3>
            <p className={styles.text}>{t('differences.our_service_works_around_the_clock')}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Differences
