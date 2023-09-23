import React, { useState } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

import styles from './styles.module.scss'
import AdminListItem from './adminListItem/AdminListItem'

const AdminList = observer(() => {
  const { ProductsStore } = useStore()
  const { products, filteredProducts } = ProductsStore
  const [state, setState] = useState(false)

  return (
    <div className='container'>
      <button type='button' className='showButton' onClick={() => setState(!state)}>
        {!state ? 'Show all Products on Databese' : 'Hide Products'}
      </button>
      {state &&
        <ul className={styles.list}>
          {filteredProducts?.map((item) => (
            <AdminListItem product={item} key={item.id} />
          ))
          }
        </ul>}
    </div>
  );
})

export default AdminList;