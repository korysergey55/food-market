import React from 'react'
import AdminForm from './adminForm/AdminForm'
import Header from '../../containers/header/Header'
import styles from './styles.module.scss'

const AdminPage = () => {
  return (
    <div className={styles.adminPage}>
      <Header />
      <div className={styles.container}>
        <AdminForm />
      </div>
    </div>
  )
}

export default AdminPage
