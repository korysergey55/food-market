import React from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'
import ProductItem from './productItem/productItem'

import { Pagination } from 'antd'
import styles from './styles.module.scss'

const ProductList = observer(({ category, homePage }) => {
  const { ProductsStore } = useStore()
  const { filteredProducts } = ProductsStore

  return (
    <div className={styles.productList}>
      <ul className={styles.list}>
        {filteredProducts.length > 0 ? (
          filteredProducts?.map(item => {
            if (homePage || category === 'all') {
              return <ProductItem product={item} key={item.id} />
            }
            if (item.category === category) {
              return <ProductItem product={item} key={item.id} />
            }
          })
        ) : (
          <h2 className={styles.title}>Нет товаров по данному поиску!</h2>
        )}
      </ul>
      {/* <Pagination defaultCurrent={1} total={5} /> */}
    </div>
  )
})

export default ProductList
