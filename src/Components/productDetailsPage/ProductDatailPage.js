import React, { useEffect } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'
import { pathes } from '../../utils/pathes'

import ProductItemDetails from './productDeteils/ProductDetails'
import Footer from '../../containers/footer/Footer'

import styles from './styles.module.scss'
import { useHistory } from 'react-router'

const ProductDatailPage = observer(() => {
  const { ProductsStore } = useStore()
  const history = useHistory()

  useEffect(() => {

    if (!ProductsStore.productById) {
      history.push(pathes.products)
    }
  }, [])

  return (
    <div className={styles.productDetails}>
      <div className={styles.container}>
        <ProductItemDetails />
      </div>
      <Footer />
    </div>
  )
})

export default ProductDatailPage
