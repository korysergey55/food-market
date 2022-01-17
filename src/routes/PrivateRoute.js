import React from "react";
import { Route, Redirect } from "react-router-dom";
import { pathes } from '../utils/pathes'

const PrivateRoute = ({ path, exact, component, token }) => {
  return !token ? (
    <Redirect to={pathes.login} />
  ) : (
    <Route path={path} exact={exact} component={component} key={path} />
  );
};

export default PrivateRoute;
