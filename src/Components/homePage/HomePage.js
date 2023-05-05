import React from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import Title from './title/Title'
import Feachers from './feachers/Feachers'
import ProductList from '../productsPage/products/productList/ProductList'
import Baner from './baner/Baner'
import AboutUs from './aboutUs/AboutUs'
import Differences from './differences/Differences'
import SubForm from '../../containers/Reuseble/subForm/SubForm'
import Partners from './partners/Partners'
import Footer from '../../containers/footer/Footer'

import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'

const HomePage = observer(() => {
  const { ProductsStore } = useStore()
  const { filteredProducts } = ProductsStore
  const { t } = useTranslation();

  return (
    <div className={styles.homePage}>
      <div className={styles.baner}></div>
      <Title />
      <Feachers />
      <div className={styles.container}>
        <h3 className={styles.subtitle}>{t('Самые_популярные')}</h3>
        <h2 className={styles.title}>Популярные продукты</h2>
        <div className={styles.wripper}>
          <ProductList homePage={true} />
        </div>
        {/* <Baner /> */}
        <AboutUs />
        <h3 className={styles.subtitle}>Наиболее продаваемые</h3>
        <h2 className={styles.title}>Рекомендуемые товары</h2>
        <div className={styles.wripper}>
          <ProductList homePage={true} />
        </div>
        <Differences />
        <Partners />
        <SubForm />
      </div>
      <Footer />
    </div>
  )
})

export default HomePage
