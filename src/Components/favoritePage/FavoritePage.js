import React, { useState, useEffect } from 'react'
import { useStore } from '../../storeMobx/index'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import ProductItem from '../productsPage/products/productList/productItem/productItem'
import { Empty } from 'antd'

const FavoritePage = observer(() => {
  const { ProductsStore } = useStore()
  const { products, favoriteItems, favoriteProducts } = ProductsStore
  const { t } = useTranslation();

  const findFavoriteProducts = () => {
    const favoriteArr = []
    const newArrayProducts = Array.from(new Set(favoriteItems))
    newArrayProducts.forEach(key => {
      const item = products.find(prod => prod.id === key)
      if (item) {
        favoriteArr.push(item)
      }
    })
    return favoriteArr
  }

  useEffect(() => {
    ProductsStore.setFavoriteProductsAction(findFavoriteProducts())
  }, [products, favoriteItems])


  return (<div className={styles.likesPage}>
    <h2 className={styles.title}>{t('favoritePage.my_favorite_products')}</h2>
    <ul className={styles.list}>
      {favoriteProducts.length ? (favoriteProducts?.map(product => (
        <ProductItem key={product.id} product={product} />
      ))) : (<Empty description={t('favoritePage.no_added_products')} />)}
    </ul>
  </div>
  );
})

export default FavoritePage;