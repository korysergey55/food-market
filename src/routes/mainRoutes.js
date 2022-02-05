import { lazy } from 'react'
import IconComponent from '../containers/Utils/IconComponent/IconComponent'

export const mainRoutes = [
  {
    name: 'ProductDetails',
    path: '/products/:category/:productID',
    component: lazy(() =>
      import('../Components/productDetailsPage/ProductDatailPage')
    ),
    exact: false,
    isLink: false,
  },
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import('../Components/homePage/HomePage')),
    exact: true,
    isRestricted: false,
    isPrivate: false,
  },
  {
    name: 'Products',
    path: '/products',
    component: lazy(() => import('../Components/productsPage/ProductsPage.js')),
    exact: false,
    isRestricted: false,
    isPrivate: false,
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: lazy(() => import('../Components/contactsPage/contactsPage')),
    exact: true,
    isRestricted: false,
    isPrivate: false,
  },
  {
    name: <IconComponent icon="#icon-shopping-cart" color={true} />,
    path: '/cart',
    component: lazy(() => import('../Components/cartPage/CartPage')),
    exact: true,
    isRestricted: false,
    isPrivate: false,
    cartLength: null,
    cart: true,
  },

  {
    name: '',
    path: '/order',
    component: lazy(() => import('../Components/orderPage/OrderPage')),
    exact: true,
    isRestricted: false,
    isPrivate: false,
    cartLength: null,
  },
  {
    name: 'Administration',
    path: '/admin',
    component: lazy(() => import('../Components/adminPage/AdminPage.js')),
    exact: true,
    isRestricted: false,
    isPrivate: true,
  },
  {
    name: 'Login',
    path: '/login',
    component: lazy(() => import('../Components/auth/LoginPage.js')),
    exact: true,
    isRestricted: true,
    isPrivate: false,
  },
  {
    name: '',
    path: '/:notfound',
    exact: true,
    component: lazy(() =>
      import('../containers/Utils/notFoundComponent/NotFoundComponent.js')
    ),
    isPrivate: false,
    iisRestricted: false,
  },
]
