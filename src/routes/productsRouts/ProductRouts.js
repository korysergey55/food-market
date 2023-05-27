import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { productsRoutes } from "../productsRoutes";
import { v4 as uuidv4 } from 'uuid';

const ProductRouts = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      {productsRoutes.map(({ name, category, path, exact, component: MyComponent }) => (
        <Route
          name={name}
          key={uuidv4()}
          path={match.path + path}
          exact={exact}
          render={() => <MyComponent category={category} />}
        />
      ))}
    </Switch>
  );
}

export default ProductRouts;