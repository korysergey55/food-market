import React from 'react'
import Header from '../../containers/header/Header'
import AdminForm from './adminForm/AdminForm'
import AdminList from './adminList/AdminList'

import styles from './styles.module.scss'

const AdminPage = () => {
  return (
    <div className={styles.adminPage}>
      <Header />
      <div className={styles.container}>
        <AdminForm />
        <AdminList />
      </div>
    </div>
  )
}

export default AdminPage
