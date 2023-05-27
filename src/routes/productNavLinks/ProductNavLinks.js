import React from 'react';
import { NavLink, useRouteMatch } from "react-router-dom";
import { productsRoutes } from "../productsRoutes";
import styles from './styles.module.scss'

const ProductNavLinks = () => {
  const match = useRouteMatch();

  return (
    <ul className={styles.list}>
      {productsRoutes.map(
        (route) =>
          route.isLink && (
            <li className={styles.item} key={route.path}>
              <NavLink
                // to={match.url + route.path}
                to={'/products' + route.path}

                exact={route.exact}
                icon={route.icon}
                className={styles.navLink}
                activeClassName={styles.navLinkActive}
              >
                {route.icon}
                {route.name}
              </NavLink>
            </li>
          )
      )}
    </ul>
  );
}

export default ProductNavLinks;