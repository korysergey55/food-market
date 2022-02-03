import React from 'react'
import Logo from '../../../containers/Reuseble/Logo/Logo'
import styles from './styles.module.scss'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWripper}>
        <Logo />
        <h2 className={styles.logo}> Good-Food</h2>
      </div>
      <h1 className={styles.title}>Интернет-магазин Товаров из Европы</h1>
      {/* <p className={styles.text}>
        Покупайте у проверенного поставщика товаров.
      </p> */}
    </div>
  )
}

export default Hero
