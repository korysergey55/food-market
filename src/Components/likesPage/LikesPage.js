import React, { useState, useEffect } from 'react'
import { useStore } from '../../storeMobx/index'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

import styles from './styles.module.scss'
import ProductItem from '../productsPage/products/productList/productItem/productItem'

const LikesPage = observer(() => {
  const { ProductsStore } = useStore()
  const { products, likesItems, likesProducts } = ProductsStore


  const findProductLikes = () => {
    const cartArr = []
    const unq = Array.from(new Set(likesItems))
    unq.forEach(key => {
      const item = products.find(prod => prod.id === key)
      if (item) {
        cartArr.push(item)
      }
    })
    return cartArr
  }

  useEffect(() => {
    ProductsStore.setLikesProductsAction(findProductLikes())
    // console.log(toJS(findProductLikes()))
    // console.log(toJS(likesProducts))
  }, [products, likesItems])

  return (<div className={styles.likesPage}>
    <div className={styles.baner}></div>
    <h2 className={styles.title}>Yours Likes</h2>
    <ul className={styles.list}>
      {likesProducts?.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  </div>
  );
})

export default LikesPage;