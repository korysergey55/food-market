import React from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'

import Title from './title/Title'
import Feachers from './feachers/Feachers'
import ProductList from '../productsPage/products/productList/ProductList'
import Baner from './baner/Baner'
import AboutUs from './aboutUs/AboutUs'
import Differences from './differences/Differences'
import SubForm from '../../containers/Reuseble/subForm/SubForm'
import Partners from './partners/Partners'
import Footer from '../../containers/footer/Footer'

import styles from './styles.module.scss'

const HomePage = observer(() => {
  const { t } = useTranslation()

  return (
    <div className={styles.homePage}>
      <Title />
      <Feachers />
      <div className={styles.container}>
        <h2 className={styles.title}>{t('Самые популярные товары')}</h2>
        <h3 className={styles.subtitle}>{t('Покупатели рекомендуют')}</h3>
        <div className={styles.wripper}>
          <ProductList isHomePage={true} category={''} />
        </div>
        {/* <Baner /> */}
        <AboutUs />
        <h2 className={styles.title}>{t('Рекомендуемые товары')}</h2>
        <div className={styles.wripper}>
          <ProductList isHomePage={true} category={''} />
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
