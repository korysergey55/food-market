import React, { useState, useEffect } from 'react'
import { useStore } from '../../storeMobx/index'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

import styles from './styles.module.scss'
import ProductItem from '../productsPage/products/productList/productItem/productItem'

const FavoritePage = observer(() => {
  const { ProductsStore } = useStore()
  const { products, favoriteItems, favoriteProducts } = ProductsStore

  const findProductLikes = () => {
    const cartArr = []
    const unq = Array.from(new Set(favoriteItems))
    unq.forEach(key => {
      const item = products.find(prod => prod.id === key)
      if (item) {
        cartArr.push(item)
      }
    })
    return cartArr
  }

  useEffect(() => {
    ProductsStore.setFavoriteProductsAction(findProductLikes())
  }, [products, favoriteItems])

  return (<div className={styles.likesPage}>
    <div className={styles.baner}></div>
    <h2 className={styles.title}>Yours favorite products</h2>
    <ul className={styles.list}>
      {favoriteProducts?.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  </div>
  );
})

export default FavoritePage;