import React, { useEffect, Suspense } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import { mainRoutes } from '../../routes/mainRoutesArr'

import AppRoutes from '../AppRoutes/AppRoutes'
import Header from '../../containers/header/Header'
import Baner from '../../containers/baner/Baner'

import { ToastContainer } from 'react-toastify'

const App = observer(() => {
  const { ProductsStore } = useStore()
  const { products } = ProductsStore

  useEffect(() => {
    // ProductsStore.setAllProductsAPI(products)
    ProductsStore.getAllProductsAPI()
  }, [])

  return (
    <div className="appContainer">
      <Header></Header>
      <Baner></Baner>
      <AppRoutes ROUTS={mainRoutes} />
      <ToastContainer />
    </div>
  )
})

export default App
