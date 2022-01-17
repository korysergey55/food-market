import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { productsRoutes } from "../../../../routes/productsRoutes";

const ProductRouts = () => {
  const match = useRouteMatch();
  
  return (
    <Switch>
      {productsRoutes.map(({ name, category, path, exact, component: MyComponent }) => (
        <Route
          name={name}
          key={path}
          path={match.path + path}
          exact={exact}
          render={() => <MyComponent category={category} />}
        />
      ))}
    </Switch>
  );
}

export default ProductRouts;