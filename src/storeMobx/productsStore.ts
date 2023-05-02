import {
  makeAutoObservable,
  observable,
  action,
  reaction,
  toJS,
  configure,
  computed,
  runInAction,
} from 'mobx'
import axios from 'axios'
import { toast } from 'react-toastify'

import { productsJSON } from '../sourses/data/dataProducts'
import { categories } from '../sourses/data/categories'

class ProductsStore {
  @observable products: any = [...productsJSON]
  @observable filteredProducts: any = [...this.products]
  @observable productById: any = null
  @observable cart: any = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
  @observable totalPrice: number = 0
  @observable viewedProducts: any = []

  @observable brand: any = [
    'Ambassador',
    'Bellarom',
    'Bellarom',
    'Eduscho',
    'Lavazza',
    'Pellini',
    'De Cecco',
  ]
  @observable country: any = [
    'Германия',
    'Польша',
    'Швеция',
    'Италия',
    'Австрия',
    'Щвейцария',
  ]
  @observable packing: any = ['100', '200', ' 300', ' 400', '500', '600']
  @observable сategory: any = [...categories]

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.products,
      _ => console.log('products', toJS(this.products))
    )
  }

  @action setAllProductsAction(data: any) {
    this.products = [...data]
  }

  @action setProductDetails(id: string) {
    this.productById = this.products.find((item: any) => item.id === id)
  }

  @action setViewedProducts(id: string) {
    const newProduct = this.products.find((item: any) => item.id === id)
    // this.viewedProducts = [...this.viewedProducts, newProduct]
    const undublicate = this.viewedProducts.filter(
      (item: any) => item.id !== newProduct.id
    )
    this.viewedProducts = [...undublicate, newProduct]
  }

  @action filterProducts(data: any) {
    const dataProducts = data.toLowerCase().trim()
    const filtered = this.products.filter((item: any) =>
      item.name.toLowerCase().trim().includes(dataProducts)
    )
    this.filteredProducts = filtered
  }

  @action sortProducts(data: any) {
    if (data === 'price') {
      const sortedProducts = this.products.sort(
        (min: any, max: any) => min.price - max.price
      )
      this.filteredProducts = sortedProducts
    }
    if (data === 'name') {
      const sortedProducts = this.products.sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
      )
      this.filteredProducts = sortedProducts
    }
    if (data === 'default') {
      const sortedProducts = this.products.sort((a: any, b: any) =>
        b.name.localeCompare(a.name)
      )
      this.filteredProducts = sortedProducts
    }
  }

  @action sortByPpice(data: any) {
    const sortedProducts = this.products.filter(
      (item: any) => item.price >= data[0] && item.price <= data[1]
    )
    this.filteredProducts = sortedProducts
  }

  @action sortByBrand(data: any) {
    const sortedProducts = this.products.filter((item: any) =>
      item.brand.includes(data)
    )
    this.filteredProducts = sortedProducts
  }

  @action addToCart(id: any) {
    // const isInCart: any = this.cart.find((item: any) => item.id === id)
    // if (!isInCart) {
    //   this.cart = [...this.cart, id]
    // }
    this.cart = [...this.cart, id]
    localStorage.setItem('cart', JSON.stringify(this.cart))

    toast.success('Продукт добавлен в Корзину!', {
      theme: 'colored',
    })
  }

  @action remuveFromCart(id: any) {
    this.cart = this.cart.filter((cartItem: any) => cartItem !== id)
    localStorage.setItem('cart', JSON.stringify(this.cart))

    toast.info('Продукт удален из Корзину!', {
      theme: 'colored',
    })
  }

  @action setTotalPrice(data: any = null) {
    // if (!data) {
    //   const price = this.cart?.reduce((acc: any, product: any) => {
    //     acc += Number(product?.price)
    //     return acc
    //   }, 0)
    //   this.totalPrice = price
    // }
    // if (data) {
    //   const price = (this.totalPrice -= data)
    //   this.totalPrice = price
    // }
    this.totalPrice = data
  }
}
export default new ProductsStore()
