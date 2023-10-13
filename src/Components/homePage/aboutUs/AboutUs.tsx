import * as React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router'
import { pathes } from '../../../utils/pathes'

import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'

const AboutUs = () => {
  const { t } = useTranslation()
  const history = useHistory()
  return (
    <div className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.wripper}>
          <h2 className={styles.subtitle}>{t('aboutUs.about_us')}</h2>
          <h3 className={styles.title}>{t('aboutUs.we_provide_you_the_best_experience')}</h3>
          <p className={styles.text}>
            {t('aboutUs.description')}
            <br />
            <br />
            {t('aboutUs.description-2')}
          </p>
          <Button className={styles.button} type="primary" size="large" onClick={() => history.push(pathes.products)}>
            {t('aboutUs.to_shop')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
