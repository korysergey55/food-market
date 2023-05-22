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

import { productsJSON } from '../sourses/dataProduct/products'
import { categoriesJSON } from '../sourses/dataProduct/categories'
import { brandsJSON } from '../sourses/dataProduct/brands'
import { countryJSON } from '../sourses/dataProduct/country'
import { packingJSON } from '../sourses/dataProduct/packing'

import { IсategoryJSON } from '../models/index'
import { IProduct } from '../models/index'

const baseURL = 'https://goodfood-c0ae2-default-rtdb.firebaseio.com/'

class ProductsStore {
  @observable products: IProduct[] = []
  @observable filteredProducts: IProduct[] = [...this.products]
  @observable productById: IProduct | null = null
  @observable productImage: any = {}

  @observable сategory: IсategoryJSON[] = [...categoriesJSON]
  @observable brands: string[] = [...brandsJSON]
  @observable country: string[] = [...countryJSON]
  @observable packing: string[] = [...packingJSON]

  @observable cart: any = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
  @observable cartProducts: any = []
  @observable totalPrice: number = 0
  @observable viewedProducts: IProduct | IProduct[] = []
  @observable favoriteItems: any = []
  @observable favoriteProducts: any = []

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.productImage,
      _ => console.log('productImage', toJS(this.productImage))
    )
  }
  @action setFavoriteItemAction(data: any) {
    this.favoriteItems = [...this.favoriteItems, data]
  }
  @action remuveFavoriteItemAction(data: any) {
    this.favoriteItems = this.favoriteItems.filter((item: any) => item !== data)
  }
  @action setFavoriteProductsAction(data: any) {
    this.favoriteProducts = [...data]
  }
  @action setProductImageAction(data: any) {
    this.productImage = data
  }

  @action setAllProductsAction(data: any) {
    this.products = [...data]
    this.filteredProducts = [...this.products]
  }

  @action setNewProductAction(data: any) {
    this.products = [...this.products, data]
    this.filteredProducts = [...this.products]
  }

  @action setProductDetailsAction(id: string) {
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

  @action remuveItemFromCart(id: any) {
    const item = this.cart.indexOf(id)
    this.cart.splice(item, 1)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  @action setCartProducts(items: any) {
    this.cartProducts = [...items]
  }
  @action setQantityCartProducts(id: string, type: string) {
    this.cartProducts?.map((item: any) => {
      if (item.id === id && type === 'increment') {
        return (item.qantity = item.qantity += 1)
      }
      if (item.id === id && type === 'decrement') {
        return (item.qantity = item.qantity -= 1)
      }
      return item
    })
  }

  @action setTotalPrice() {
    const price = this.cartProducts?.reduce((acc: any, product: any) => {
      acc += Number(product?.price * product.qantity)
      return acc
    }, 0)
    this.totalPrice = price
  }

  //API

  @action setAllAdvByCategoryAPI = async (products: any) => {
    try {
      await products.forEach((product: any) => {
        const response = axios.post(baseURL + `products/.json`, product)
        return response
      })
    } catch (error) {
      console.log(error)
    }
  }

  @action getAllAdvByCategoryAPI = async () => {
    try {
      const response = await axios.get(baseURL + `products/.json`)
      let newProducts = []
      for (const [key, value] of Object.entries(response.data)) {
        newProducts.push(value)
      }
      this.setAllProductsAction(newProducts)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  @action createNewAdvAPI = async (category: any, newProduct: any) => {
    try {
      const response = await axios.post(
        baseURL + `products/.json`,
        newProduct
        //   {
        //   headers: { Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY }
        // }
      )
      if (response && response.status === 200) {
        this.addImageAdvAPI(response.data.name)
      }
      return response
    } catch (error) {
      console.log(error)
    }
  }

  @action addImageAdvAPI = async (id: any) => {
    try {
      const response = await axios.patch(
        baseURL + `products/${id}.json`,
        { image: this.productImage },
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      if (response && response.status === 200) console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export default new ProductsStore()
