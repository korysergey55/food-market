import React, { useEffect, Suspense } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import { Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { mainRoutes } from '../../routes/mainRoutesArr'
import PrivateRoute from '../../routes/PrivateRoute'
import PublicRoute from '../../routes/PublicRoute'

import Header from '../../containers/header/Header'
import Loader from '../../containers/Loader/Loader'
import Baner from '../../containers/baner/Baner'

const App = observer(() => {
  const { AuthStore } = useStore()
  const { token } = AuthStore

  const { ProductsStore } = useStore()
  const { products } = ProductsStore

  useEffect(() => {
    // ProductsStore.setAllAdvByCategoryAPI(products)
    ProductsStore.getAllAdvByCategoryAPI()
  }, [])

  return (
    <div className="appContainer">
      <Header></Header>
      <Baner></Baner>
      <Suspense fallback={<Loader />}>
        <Switch>
          {mainRoutes.map(route =>
            route.isPrivate ? (
              <PrivateRoute
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={route.path}
                token={token}
              />
            ) : (
              <PublicRoute
                path={route.path}
                exact={route.exact}
                isRestricted={route.isRestricted}
                component={route.component}
                key={route.path}
                token={token}
              />
            )
          )}
        </Switch>
        <ToastContainer />
      </Suspense>
    </div>
  )
})

export default App
