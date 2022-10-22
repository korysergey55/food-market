import React from 'react'
import { partnersArr } from '../../../sourses/data/partners'

import styles from './styles.module.scss'

const Partners = () => {
  return (
    <div className={styles.partners}>
      <h2 className={styles.title}>Наши партнеры</h2>
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
