import React from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import Header from '../../containers/header/Header'
import Hero from './hero/Hero'
import Feachers from './feachers/Feachers'
import Filters from '../filters/Filters'
import ProductList from '../productsPage/products/productList/ProductList'
import Baner from './baner/Baner'
import SubForm from '../../containers/subForm/SubForm'
import Footer from '../../containers/footer/Footer'

import styles from './styles.module.scss'
Baner
const HomePage = observer(() => {
  const { ProductsStore } = useStore()
  const { filteredProducts } = ProductsStore

  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.baner}></div>
      <Hero />
      <Feachers />
      <div className={styles.container}>
      <h3 className={styles.subtitle}>Популярные</h3>
        <h2 className={styles.title}>Рекомендуемые товары</h2>
        <div className={styles.wripper}>
          <ProductList homePage={true} />
        </div>
        <Baner/>
        {/* <SubForm /> */}
      </div>
      <Footer />
    </div>
  )
})

export default HomePage
