import React from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import Header from '../../containers/header/Header'
import Hero from './hero/Hero'
import Feachers from './hero/feachers/Feachers'
import ProductList from '../productsPage/products/productList/ProductList'
import SubForm from '../../containers/subForm/SubForm'
import Footer from '../../containers/footer/Footer'
import styles from './styles.module.scss'
Feachers
const HomePage = observer(() => {
  const { ProductsStore } = useStore()
  const { filteredProducts } = ProductsStore

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.baner}></div>
        <Hero />
        <Feachers/>
      <div className={styles.container}>
        {filteredProducts.length > 0 && (
          <h2 className={styles.title}>Ветрина товаров</h2>
        )}
        <ProductList homePage={true} />
        <SubForm />
      </div>
      <Footer />
    </div>
  )
})

export default HomePage
