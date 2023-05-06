import React from 'react'
import { partnersArr } from '../../../sourses/dataProduct/partners'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'

const Partners = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.partners}>
      <h2 className={styles.title}>{t('Наши партнеры')}</h2>
      <ul className={styles.list}>
        {partnersArr.map((PartnerImg, index) => (
          <li className={styles.item} key={index}>
            <img className={styles.img} src={PartnerImg} alt="Partner-img" />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Partners
