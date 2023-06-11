import React, { useEffect, Suspense } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import { Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { mainRoutes } from '../../routes/mainRoutes'
import PrivateRoute from '../../routes/PrivateRoute'
import PublicRoute from '../../routes/PublicRoute'

import Loader from '../../containers/Utils/Loader/Loader'
import Header from '../../containers/header/Header'

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
