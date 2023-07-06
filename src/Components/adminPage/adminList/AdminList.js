import React from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import styles from './styles.module.scss'
import AdminListItem from './adminListItem/AdminListItem'

const AdminList = observer(() => {

  const { ProductsStore } = useStore()
  const { products } = ProductsStore
  return (
    <ul className={styles.list}>
      {products?.map((item) => (
        <AdminListItem product={item} key={item.id} />
      ))
      }
    </ul>
  );
})

export default AdminList;