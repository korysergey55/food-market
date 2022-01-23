import React, { useEffect } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import Header from '../../containers/header/Header'
import ProductRout from './products/productsRouts/ProductRouts'
import SideBar from '../sideBar/SideBar'
import SubForm from '../../containers/subForm/SubForm'
import Footer from '../../containers/footer/Footer'

import styles from './styles.module.scss'

const ProductsPage = observer(() => {
  const { ProductsStore } = useStore()
  const { productById } = ProductsStore
  const history = useHistory()
  const match = useRouteMatch()

  useEffect(() => {
    // if (!productById) {
    //   history.push(match.path + '/coffee')
    // }
  }, [history, match.path])

  return (
    <div className={styles.productPage}>
      <Header />
      <div className={styles.baner}></div>
      <div className={styles.container}>
        <div className={styles.wripper}>
          <SideBar />
          <ProductRout />
        </div>
        <SubForm />
      </div>
      <Footer />
    </div>
  )
})

export default ProductsPage
