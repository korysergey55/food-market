import { lazy } from 'react'

export const categoryRoutesArr = [
  {
    name: 'Все категории',
    path: '/all',
    category: 'all',
    component: lazy(() =>
      // import('../Components/productsPage/products/productList/ProductList.js')
      import('../Components/productsPage/products/categoryList/CategoryList.js')
    ),
    exact: true,
    isLink: true,
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
  },
]
