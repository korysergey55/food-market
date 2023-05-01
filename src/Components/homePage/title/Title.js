import React from 'react'
import Logo from '../../../containers/Reuseble/Logo/Logo'
import styles from './styles.module.scss'

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWripper}>
        <Logo />
        <h2 className={styles.logoText}> Good-Food</h2>
      </div>
      <h1 className={styles.title}>Интернет-магазин Товаров из Европы</h1>
    </div>
  )
}

export default Title
