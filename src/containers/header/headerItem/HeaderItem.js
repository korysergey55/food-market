import React from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.scss'

const HeaderItem = observer(({ link, token }) => {
  const {  ProductsStore } = useStore()
 
  return (
    <>
      {!link.isPrivate && !link.isRegistered && (
        <li className={styles.item} key={link.path}>
          <NavLink
            to={link.path}
            exact={link.exact}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            {link.name}
            {link.path === '/cart' && (
              <span className={styles.cartLength}>{ProductsStore.cart.length}</span>
            )}
          </NavLink>
        </li>
      )}
      {!link.isPrivate && !token && link.isRegistered && (
        <li className={styles.item} key={link.path}>
          <NavLink
            to={link.path}
            exact={link.exact}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            {link.name}
          </NavLink>
        </li>
      )}
      {link.isPrivate && token && (
        <li className={styles.item} key={link.path}>
          <NavLink
            to={link.path}
            exact={link.exact}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            {link.name}
          </NavLink>
        </li>
      )}
    </>
  )
})

export default HeaderItem
