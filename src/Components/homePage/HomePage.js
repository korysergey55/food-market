import React from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import Header from '../../containers/header/Header'
import Hero from './hero/Hero'
import Feachers from './hero/feachers/Feachers'
import SideBar from '../sideBar/SideBar'
import ProductList from '../productsPage/products/productList/ProductList'
import SubForm from '../../containers/subForm/SubForm'
import Footer from '../../containers/footer/Footer'

import styles from './styles.module.scss'
import Filters from '../filters/Filters'


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
        {filteredProducts && <h2 className={styles.title}>Ветрина товаров</h2>}
         <Filters/>
        <div className={styles.wripper}>
          <SideBar />
          <ProductList homePage={true} />
        </div>
        <SubForm />
      </div>
      <Footer />
    </div>
  )
})

export default HomePage
