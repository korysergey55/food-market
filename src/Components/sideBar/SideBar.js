import * as React from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router'
import ProductNavLinks from '../productsPage/products/productNavLinks/ProductNavLinks'

import styles from './styles.module.scss'

const SideBar = observer(() => {
  const { ProductsStore } = useStore()
  const history = useHistory()
  return (
    <div className={styles.sideBar}>
      <ProductNavLinks />
    </div>
  )
})

export default SideBar
