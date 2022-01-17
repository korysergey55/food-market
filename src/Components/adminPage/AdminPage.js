import React from 'react'
import AdvForm from './adminForm/AdvForm'
import Header from '../../containers/header/Header'
import styles from './styles.module.scss'

const AdminPage = () => {
  return (
    <div className={styles.adminPage}>
      <Header />
      <div className={styles.container}>
        <AdvForm />
      </div>
    </div>
  )
}

export default AdminPage
