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
import { productsJSON } from '../sourses/data/newProducts'

class ProductsStore {
  @observable products: any = [...productsJSON]
  @observable filteredProducts: any = [...this.products]
  @observable productById: any = null
  @observable cart: any = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
  @observable totalPrice: number = 0
  @observable viewedProducts: any = []

  @observable manufactured: any = [
    'Ambassador',
    'Bellarom',
    'Bellarom',
    'Eduscho',
    'Lavazza',
    'Pellini',
  ]
  @observable packing: any = ['100', '200', ' 300', ' 400', '500', '600']

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.cart,
      _ => console.log('mobx', toJS(this.cart))
    )
  }

  @action setAllProductsAction(data: any) {
    this.products = [...data]
  }
  @action setProductByIdAction(data: any) {
    this.productById = data
  }
  @action filterProductsAction(data: any) {
    const dataProducts = data.toLowerCase().trim()
    const filtered = this.products.filter((item: any) =>
      item.name.toLowerCase().trim().includes(dataProducts)
    )
    this.filteredProducts = filtered
  }
  @action addToCart(data: any) {
    this.cart = [...this.cart, data]
    this.setTotalPrice()
    localStorage.setItem('cart', JSON.stringify(this.cart))

    toast.success('Продукт добавлен в Корзину!', {
      theme: 'colored',
    })
  }

  @action remuveFromCart(data: any) {
    this.cart = this.cart.filter((cartItem: any) => cartItem.id !== data.id)
    this.setTotalPrice(data.price)
    localStorage.setItem('cart', JSON.stringify(this.cart))

    toast.info('Продукт удален из Корзину!', {
      theme: 'colored',
    })
  }

  @action setTotalPrice(data: any = null) {
    if (!data) {
      const price = this.cart?.reduce((acc: any, product: any) => {
        acc += Number(product.price)
        return acc
      }, 0)
      this.totalPrice = price
    }
    if (data) {
      const price = (this.totalPrice -= data)
      this.totalPrice = price
    }
  }

  @action setViewedProducts(data: any) {
    this.viewedProducts = [...this.viewedProducts, data]
  }

  @action sortProducts(data: any) {
    if (data === 'price') {
      const sortedProducts = this.products.sort(
        (min: any, max: any) => max.price - min.price
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
}
export default new ProductsStore()
