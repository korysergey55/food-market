import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ path, exact, component, isRestricted, token }) => {
 return token && isRestricted ? (
   <Redirect to='/' />
 ) : (
  <Route path={path} exact={exact} component={component} key={path} />
 );
};

export default PublicRoute;
