import { lazy } from 'react'
import IconComponent from '../containers/IconComponent/IconComponent'

export const productsRoutes = [
  {
    name: 'ProductDetails',
    path: '/:category/:productID',
    component: lazy(() =>
      import('../Components/productDeteils/ProductDetails')
    ),
    exact: false,
    isLink: false,
  },

  {
    name: 'Кофе, чай, капучино',
    path: '/coffee',
    category: 'coffee',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent />,
  },
  {
    name: 'Оливки и оливковое масло',
    path: '/olivkovoe_maslo',
    category: 'olivkovoe_maslo',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent icon="#icon-computer-desktop" />,
  },
  {
    name: 'Сыры и колбасы',
    path: '/syry_kolbasy',
    category: 'syry_kolbasy',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent icon="#icon-tablet" />,
  },
  {
    name: 'Шоколадки и шоколадные пасты',
    path: '/shokoladki',
    category: 'shokoladki',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent icon="#icon-watch" />,
  },
  {
    name: 'Леденцы, драже и конфеты',
    path: '/ledency',
    category: 'ledency',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent icon="#icon-headphones" />,
  },
  {
    name: 'Макароны',
    path: '/makarony',
    category: 'makarony',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent icon="#icon-headphones" />,
  },
  {
    name: 'Консерви и паштеты',
    path: '/konservi',
    category: 'konservi',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent icon="#icon-headphones" />,
  },
  {
    name: 'Специи и соусы',
    path: '/sousy',
    category: 'sousy',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent icon="#icon-headphones" />,
  },
  {
    name: 'Витамины и лечебные средства',
    path: '/vitaminy',
    category: 'vitaminy',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent icon="#icon-headphones" />,
  },
  {
    name: 'Разное',
    path: '/raznoe',
    category: 'raznoe',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent icon="#icon-headphones" />,
  },
  {
    name: 'Новинки',
    path: '/novinki',
    category: 'novinki',
    component: lazy(() =>
      import('../Components/productsPage/products/productList/ProductList.js')
    ),
    exact: true,
    isLink: true,
    // icon: <IconComponent icon="#icon-headphones" />,
  },
]
