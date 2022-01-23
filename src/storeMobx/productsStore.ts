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

  @observable productById: any = null

  @observable filteredProducts: any = [...this.products]

  @observable category: any = [
    'Кофе, чай, капучино',
    'Оливки и оливковое масло',
    'Сыры и колбасы',
    'Шоколадки и шоколадные пасты',
    'Леденцы, драже и конфеты',
    'Макароны',
    'Консерви и паштеты',
    'Специи и соусы',
    'Витамины и лечебные средства',
    'Разное',
  ]

  @observable cart: any = []

  @observable totalPrice: number = 0

  @observable viewedProducts: any = []

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.totalPrice,
      _ => console.log('mobx', toJS(this.totalPrice))
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
    toast.success('Продукт добавлен в Корзину!', {
      theme: 'colored',
    })
  }

  @action remuveFromCart(data: any) {
    this.setTotalPrice(data.price)
    this.cart = this.cart.filter((cartItem: any) => cartItem.id !== data.id)
    toast.info('Продукт удален из Корзину!', {
      theme: 'colored',
    })
  }

  @action setTotalPrice(data: any = null) {
    console.log(data)
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
}
export default new ProductsStore()
