import React from 'react'
import Logo from '../../../containers/Logo/Logo'
import styles from './styles.module.scss'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWripper}>
        <Logo />
        <h2 className={styles.title}> Good-Food</h2>
      </div>
      <h1 className={styles.heroTitle}>Интернет-магазин Европейских Товаров</h1>
      <p className={styles.text}>
        Покупайте у проверенного поставщика Европейских товаров.
      </p>
    </div>
  )
}

export default Hero
