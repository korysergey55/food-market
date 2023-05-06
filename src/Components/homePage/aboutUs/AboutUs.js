import * as React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router'
import { pathes } from '../../../utils/pathes'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'

const AboutUs = () => {
  const { t } = useTranslation();
  const history = useHistory()
  return (
    <div className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.wripper}>
          <h3 className={styles.subtitle}>{t('О нас')}</h3>
          <h2 className={styles.title}>{t('Мы предоставляем вам лучший опыт')}</h2>
          <p className={styles.text}>
            {t('Нашa компания стремится предлагать продукты, которым люди могут доверять. Мы предлагаем продукты питания, рецепты и индивидуальные решения для широкого круга сегментов, включая рестораны и специализированные кофейни, школы, торговые точки и микрорынки, а также доставка на дом по всей Украине.')}
            <br />
            <br />
            {t('Наша цель – соединять людей через еду, которую они любят. Мы верим, что еда создает связи — друг с другом и с миром, который мы разделяем и о котором заботимся, — и эти связи обогащают нашу жизнь.')}
          </p>
          <Button
            className={styles.button}
            type="primary"
            size="large"
            onClick={() => history.push(pathes.products)}
          >
            {t('В Магазин')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
