import { lazy } from "react";
import IconComponent from "../containers/IconComponent/IconComponent";

export const productsRoutes = [
  {
    name: "ProductDetails",
    path: "/:category/:productID",
    component: lazy(() => import("../Components/productDeteils/ProductDetails")),
    exact: false,
    isLink: false,
  },
  {
    name: "iPhones",
    path: "/phones",
    category: 'phones',
    component: lazy(() => import("../Components/productsPage/products/productList/ProductList.js")),
    exact: true,
    isLink: true,
    icon: <IconComponent />,
  },
  {
    name: "Mac",
    path: "/laptops",
    category: 'laptops',
    component: lazy(() => import("../Components/productsPage/products/productList/ProductList.js")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-computer-desktop" />,
  },
  {
    name: "iPad",
    path: "/ipads",
    category: 'ipads',
    component: lazy(() => import("../Components/productsPage/products/productList/ProductList.js")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-tablet" />,
  },
  {
    name: "AppleWatch",
    path: "/watches",
    category: 'watches',
    component: lazy(() => import("../Components/productsPage/products/productList/ProductList.js")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-watch" />,
  },
  {
    name: "AirPods",
    path: "/pods",
    category: 'pods',
    component: lazy(() => import("../Components/productsPage/products/productList/ProductList.js")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-headphones" />,
  },
];
