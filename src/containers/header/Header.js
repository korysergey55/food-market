import React, { useEffect, useState } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory, useLocation, NavLink } from 'react-router-dom'
import { pathes } from '../../utils/pathes'
import { shopTel } from '../../utils/location'

import Logo from '../Reuseble/Logo/Logo'
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartPlus,
  faUser,
  faHeart,
  faSignOutAlt,
  faPhoneAlt,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { Select } from 'antd'
const { Option } = Select

const Header = observer(() => {
  const { AuthStore, ProductsStore } = useStore()
  const history = useHistory()
  const location = useLocation()
  const [state, setState] = useState(false)
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', () => window.scrollY)
    return () => {
      window.removeEventListener('scroll', () => window.scrollY)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleMenu = () => {
    setState(!state)
  }

  const onChangeLanguage = value => {
    console.log(value)
    i18n.changeLanguage(value)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.mobileMenuWripper}>
          <div
            className={styles.wripperLogo}
            onClick={() => history.push(pathes.home)}
          >
            <Logo />
            <h2 className={styles.title}> Good-Food</h2>
          </div>
          <FontAwesomeIcon
            className={styles.iconMenu}
            icon={faBars}
            color="white"
            size="2x"
            onClick={() => handleMenu()}
          />
        </div>

        <ul
          className={classnames({
            [styles.navList]: true,
            [styles.navListMobile]: !state,
          })}
        >
          <li className={styles.item}>
            <NavLink
              to={pathes.home}
              exact={true}
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              {t('Главная')}
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={pathes.products}
              exact={true}
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              {t('Товары')}
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={pathes.contacts}
              exact={false}
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              {t('Контакты')}
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
        <ul
          className={classnames({
            [styles.navListSotial]: true,
            [styles.navListSotialMobile]: !state,
          })}
        >
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
          <li className={styles.item}>
            <Select
              className={styles.select}
              defaultValue="ua"
              size="small"
              onChange={onChangeLanguage}
            >
              <Option value="en">en</Option>
              <Option value="ua">ua</Option>
              <Option value="es">es</Option>
            </Select>
          </li>
        </ul>
      </div>
    </header>
  )
})
export default Header
