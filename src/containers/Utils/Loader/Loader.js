import React from 'react'
import styles from './styles.module.scss'
import Load from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Load type="Circles" color="#1890ff" height={60} timeout={3000} />
    </div>
  )
}

export default Loader
