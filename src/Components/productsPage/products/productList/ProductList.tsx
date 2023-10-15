import React from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'

import ProductItem from './productItem/productItem'
import styles from './styles.module.scss'

interface IProps {
  // category?: string
  // isHomePage?: boolean
}

const ProductList: React.FC<any> = observer(({ category = '', isHomePage = false }) => {
  const { ProductsStore } = useStore()
  const { filteredProducts } = ProductsStore

  const { t } = useTranslation()

  return (
    <div className={styles.productList}>
      <ul className={styles.list}>
        {filteredProducts.length > 0 ? (
          filteredProducts?.map(item => {
            if (isHomePage || category === 'all') {
              return <ProductItem product={item} key={item.id} />
            }
            if (item.category === category) {
              return <ProductItem product={item} key={item.id} />
            }
          })
        ) : (
          <h2 className={styles.title}>{t('productsPage.productList.there_are_no_products_for_this_search')}</h2>
        )}
      </ul>
    </div>
  )
})

export default ProductList
