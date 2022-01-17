import React, { useEffect } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import Header from '../../containers/header/Header'
import ProductNavLinks from './products/productNavLinks/ProductNavLinks'
import ProductRout from './products/productsRouts/ProductRouts'
import SubForm from '../../containers/subForm/SubForm'
import Footer from '../../containers/footer/Footer'
import styles from './styles.module.scss'

const ProductsPage = () => {
  const history = useHistory()
  const match = useRouteMatch()

  // useEffect(() => {
  //   history.push(match.path + "/phones");
  // }, [history, match.path]);

  return (
    <div className={styles.productPage}>
      <Header />
      <div className={styles.container}>
        <div className={styles.wripper}>
          <ProductNavLinks />
        </div>
        <ProductRout />
        <SubForm />
      </div>
      <Footer />
    </div>
  )
}

export default ProductsPage
