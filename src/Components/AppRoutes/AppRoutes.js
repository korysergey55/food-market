import { Suspense } from 'react'
import { Switch } from 'react-router-dom'

import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import PrivateRoute from '../../routes/PrivateRoute'
import PublicRoute from '../../routes/PublicRoute'

import Loader from '../../containers/Loader/Loader'

const AppRoutes = observer(({ ROUTS = [] }) => {
  const { AuthStore } = useStore()
  const { token } = AuthStore

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {ROUTS.map(route =>
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
    </Suspense>
  );
})

export default AppRoutes;