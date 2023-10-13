import React from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'

import Title from './title/Title'
import Feachers from './feachers/Feachers'
import ProductList from '../productsPage/products/productList/ProductList'
import Baner from './baner/Baner'
import AboutUs from './aboutUs/AboutUs'
import Differences from './differences/Differences'
import SubscribeForm from '../../containers/Reuseble/subscribeForm/SubscribeForm'
import Partners from './partners/Partners'
import Footer from '../../containers/footer/Footer'

import styles from './styles.module.scss'

const HomePage = observer(() => {
  const { t } = useTranslation()

  return (
    <div className={styles.homePage}>
      <Title dataText={'Good-Food'} />
      <Feachers />
      <div className={styles.container}>
        <h2 className={styles.title}>{t('home.most_popular_products')}</h2>
        {/* <h3 className={styles.subtitle}>{t('home.buyers_recommend')}</h3> */}
        <div className={styles.wripper}>
          <ProductList isHomePage={true} />
        </div>
        {/* <Baner /> */}
        <AboutUs />
        <h2 className={styles.title}>{t('home.recommended_products')}</h2>
        <div className={styles.wripper}>
          <ProductList isHomePage={true} />
        </div>
        <Differences />
        <Partners />
        <SubscribeForm />
      </div>
      <Footer />
    </div>
  )
})

export default HomePage
