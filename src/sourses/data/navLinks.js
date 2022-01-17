import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus,faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

export const navLinks = [
  {
    name: 'Главная',
    path: '/',
    exact: true,
    isRegistered: false,
    isPrivate: false,
  },
  {
    name: 'Товары',
    path: '/products',
    exact: false,
    isRegistered: false,
    isPrivate: false,
  },
  {
    name: 'Контакты',
    path: '/contacts',
    exact: true,
    isRegistered: false,
    isPrivate: false,
  },
  
  {
    name: 'Admin',
    path: '/admin',
    exact: true,
    isRegistered: true,
    isPrivate: true,
  },
  {
    name: <FontAwesomeIcon className="icon" icon={faUser} size="1x" />,
    path: '/login',
    exact: true,
    isRegistered: true,
    isPrivate: false,
  },
  {
    name: <FontAwesomeIcon className="icon" icon={faHeart} size="1x" />,
    path: '/likes',
    exact: true,
    isRegistered: true,
    isPrivate: false,
  },
  {
    name: <FontAwesomeIcon className="icon" icon={faCartPlus} size="1x" />,
    path: '/cart',
    exact: true,
    isRegistered: false,
    isPrivate: false,
  },
]
