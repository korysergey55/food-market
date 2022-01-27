import React, { useEffect } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory, useLocation, NavLink } from 'react-router-dom'
import { pathes } from '../../utils/pathes'
import { shopTel } from '../../utils/location'

import Logo from '../Logo/Logo'

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartPlus,
  faUser,
  faHeart,
  faSignOutAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import { Input } from 'antd'

const Header = observer(() => {
  const { AuthStore, ProductsStore } = useStore()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    window.addEventListener('scroll', () => window.scrollY)
    return () => {
      window.removeEventListener('scroll', () => window.scrollY)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const onSearch = value => ProductsStore.filterProductsAction(value)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          className={styles.wripperLogo}
          onClick={() => history.push(pathes.home)}
        >
          <Logo />
          <h2 className={styles.title}> Good-Food</h2>
        </div>

        <ul className={styles.navList}>
          <li className={styles.item}>
            <NavLink
              to={pathes.home}
              exact={true}
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              Главная
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={pathes.products}
              exact={true}
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              Товары
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={pathes.contacts}
              exact={false}
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              Контакты
            </NavLink>
          </li>
          {AuthStore.token && (
            <li className={styles.item}>
              <NavLink
                to={pathes.admin}
                exact={true}
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                Admin
              </NavLink>
            </li>
          )}
        </ul>
        <ul className={styles.navList}>
          {AuthStore.token ? (
            <li className={styles.item}>
              <NavLink
                onClick={() => AuthStore.logoutUserAction()}
                to={pathes.home}
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faSignOutAlt}
                  color="white"
                  size="1x"
                />
              </NavLink>
            </li>
          ) : (
            <li className={styles.item}>
              <NavLink
                to={pathes.login}
                exact={true}
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                <FontAwesomeIcon className="icon" icon={faUser} size="1x" />
              </NavLink>
            </li>
          )}

          <li className={styles.item}>
            <NavLink
              to={pathes.likes}
              exact={true}
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              <FontAwesomeIcon className="icon" icon={faHeart} size="1x" />
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={pathes.cart}
              exact={true}
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              <FontAwesomeIcon className="icon" icon={faCartPlus} size="1x" />
              <span className={styles.cartLength}>
                {ProductsStore.cart.length}
              </span>
            </NavLink>
          </li>
        </ul>

        <div className={styles.wripperTel}>
          <a className={styles.link} href={`tel:${shopTel}`}>
            <FontAwesomeIcon
              className={styles.iconTel}
              icon={faPhoneAlt}
              size="1x"
            />
            {shopTel}
          </a>
        </div>
      </div>
    </header>
  )
})
export default Header
