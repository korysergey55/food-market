import React from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

import styles from './styles.module.scss'
import AdminListItem from './adminListItem/AdminListItem'

const AdminList = observer(() => {
  const { ProductsStore } = useStore()
  const { products, filteredProducts } = ProductsStore

  return (
    <ul className={styles.list}>
      {filteredProducts?.map((item) => (
        <AdminListItem product={item} key={item.id} />
      ))
      }
    </ul>
  );
})

export default AdminList;