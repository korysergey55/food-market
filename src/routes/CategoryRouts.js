import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { categoryRoutesArr } from "./categoryRoutesArr";
import { v4 as uuidv4 } from 'uuid';

const CategoryRouts = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      {categoryRoutesArr.map(({ name, category, path, exact, component: MyComponent }, index) => (
        <Route
          name={name}
          key={index}
          path={match.path + path}
          exact={exact}
          render={() => <MyComponent category={category} key={index} />}
        />
      ))}
    </Switch>
  );
}

export default CategoryRouts;