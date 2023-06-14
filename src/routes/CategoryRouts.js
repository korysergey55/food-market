import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { categoryRoutesArr } from "./categoryRoutesArr";
import { v4 as uuidv4 } from 'uuid';

const CategoryRouts = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      {categoryRoutesArr.map(({ name, category, path, exact, component: MyComponent }) => (
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

export default CategoryRouts;