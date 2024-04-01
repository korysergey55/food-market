import { makeAutoObservable, observable, action, reaction, toJS, configure, computed, runInAction } from 'mobx'
import axios from 'axios'
import { toast } from 'react-toastify'

import { productsJSON } from '../sourses/dataProduct/products'
import { categoriesJSON } from '../sourses/dataProduct/categories'
import { brandsJSON } from '../sourses/dataProduct/brands'
import { manufacturJSON } from '../sourses/dataProduct/country'
import { packingJSON } from '../sourses/dataProduct/packing'

import { IcategoryJSON } from '../models/index'
import { IProduct } from '../models/index'


class ProductsStore {
  @observable products: IProduct[] = []
  @observable filteredProducts: IProduct[] = [...this.products]
  @observable productById: IProduct | null | undefined = null
  @observable productImage: any = {}
  @observable editedProduct: IProduct | null | undefined = null

  @observable category: IcategoryJSON[] = [...categoriesJSON]
  @observable brands: string[] = [...brandsJSON]
  @observable manufactur: string[] = [...manufacturJSON]
  @observable packing: string[] = [...packingJSON]

  @observable cart: any = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  @observable cartProducts: any = []
  @observable totalPrice: number = 0
  @observable orderData: any = {}

  @observable favoriteItems: any = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : []
  @observable favoriteProducts: any = []
  @observable viewedProducts: any = []

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.products,
    //   _ => console.log('this.products', toJS(this.products))
    // )
    reaction(
      () => this.productById,
      _ => console.log('this.productById', toJS(this.productById))
    )
    reaction(
      () => this.editedProduct,
      _ => console.log('editedProduct', toJS(this.editedProduct))
    )
  }
  //Favorite
  @action setFavoriteItemIdAction(data: any) {
    this.favoriteItems = [...this.favoriteItems, data]
    localStorage.setItem('favorite', JSON.stringify(this.favoriteItems))
  }
  @action setFavoriteProductsAction(data: any) {
    this.favoriteProducts = [...data]
  }
  @action remuveFavoriteItemAction(data: any) {
    this.favoriteItems = this.favoriteItems.filter((item: any) => item !== data)
    localStorage.setItem('favorite', JSON.stringify(this.favoriteItems))
  }
  //Products
  @action setAllProductsAction(data: any) {
    this.products = [...data]
    this.filteredProducts = [...this.products]
  }

  @action setNewProductAction(data: any) {
    this.products = [...this.products, data]
    this.filteredProducts = [...this.products]
  }

  @action setProductImageAction(data: any) {
    this.productImage = data
  }

  @action setProductDetailsAction(id: string) {
    this.productById = this.products.find((item: any) => item.id === id)
  }

  @action filterProducts(data: any) {
    const dataProducts = data.toLowerCase().trim()
    const filtered = this.products.filter((item: any) => item.name.toLowerCase().trim().includes(dataProducts))
    this.filteredProducts = filtered
  }

  @action setViewedProducts(id: string) {
    const newProduct = this.products.find((item: any) => item.id === id)
    const undublicate = this.viewedProducts?.filter((item: any) => item?.id !== newProduct?.id)
    this.viewedProducts = [...undublicate, newProduct]
  }

  @action setEditedProduct(id: any) {
    this.editedProduct = this.products.find((item: any) => item.id === id)
  }

  @action resetEditedProduct() {
    this.editedProduct = null
  }

  //Filters
  @action sortProducts(data: any) {
    const sortedProducts = this.products.sort((min: any, max: any) => {
      if (data === 'name' || data === 'brand') {
        return min[data].localeCompare(max[data])
      }
      return min[data] - max[data]
    })
    this.filteredProducts = sortedProducts
  }

  @action filterByPrice(data: any) {
    const sortedProducts = this.products.filter((item: any) => item.price >= data[0] && item.price <= data[1])
    this.filteredProducts = sortedProducts
  }

  @action filterByBrand(data: any) {
    const sortedProducts = this.products.filter((item: any) => item.brand.includes(data))
    this.filteredProducts = sortedProducts
  }

  @action filterByManufactur(data: any) {
    const sortedProducts = this.products.filter((item: any) => item.manufactur.includes(data))
    this.filteredProducts = sortedProducts
  }

  @action filterByPacking(data: any) {
    const sortedProducts = this.products.filter((item: any) => item.weight.includes(data))
    this.filteredProducts = sortedProducts
  }

  @action resetFilters() {
    this.filteredProducts = [...this.products]
  }

  //Cart
  @action addToCart(id: any, notification = true) {
    this.cart = [...this.cart, id]
    localStorage.setItem('cart', JSON.stringify(this.cart))

    notification &&
      toast.success('Product was added to cart', {
        theme: 'colored',
      })
  }

  @action remuveFromCart(id: any) {
    this.cart = this.cart.filter((cartItem: any) => cartItem !== id)
    localStorage.setItem('cart', JSON.stringify(this.cart))

    toast.info('The product has been removed from the cart', {
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

  @action resetCartProducts() {
    this.cartProducts = []
    this.cart = []
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

  //Order
  @action setOrderData(data: any) {
    this.orderData = data
  }

  //API
  @action getAllProductsAPI = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_BASE_URL + `products/.json`)
      if (!response || response.statusText !== 'OK') {
        throw new Error()
      }
      let newProducts = []
      for (const [key, value] of Object.entries(response.data)) {
        let ubdetedProduct: any = value
        ubdetedProduct.id = key
        newProducts.push(ubdetedProduct)
      }
      this.setAllProductsAction(newProducts)

      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  @action setAllProductsAPI = async (products: any) => {
    try {
      await products.forEach((product: any) => {
        const response = axios.post(process.env.REACT_APP_BASE_URL + `products/.json`, product)
        return response
      })
    } catch (error) {
      console.log(error)
    }
  }

  @action createProductAPI = async (newProduct: any) => {
    try {
      const response = await axios.post(process.env.REACT_APP_BASE_URL + `products/.json`, newProduct)
      if (response && response.status === 200) {
        toast.success('New product was added in the Database!', {
          theme: 'colored',
        })
      }
      // if (response && response.status === 200) {
      //   this.addProductImageAPI(response.data.name)
      // }
      return response
    } catch (error) {
      console.log(error)
    }
  }

  @action editProductAPI = async (product: any, id: string) => {
    try {
      const response = await axios.patch(process.env.REACT_APP_BASE_URL + `products/${id}.json`, product)
      if (response && response.status === 200) {
        toast.success('Product was edited in the Database!', {
          theme: 'colored',
        })
      }
      return response
    } catch (error) {
      console.log(error)
    }
  }

  @action addProductImageAPI = async (id: any) => {
    try {
      const response = await axios.patch(
        process.env.REACT_APP_BASE_URL + `products/${id}.json`,
        { image: this.productImage },
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      if (response && response.status === 200) return response
    } catch (error) {
      console.log(error)
    }
  }

  @action deleteProductAPI = async (id: string) => {
    try {
      const response = await axios.delete(process.env.REACT_APP_BASE_URL + `products/${id}.json`)
      if (response && response.status === 200) {
        toast.success('Product was successfully delated from Database!', {
          theme: 'colored',
        })
      }
      return response
    } catch (error) {
      console.log(error)
    }
  }
  //API-Order
  @action setOrderDataAPI = async (newOrder: any) => {
    try {
      const response = await axios.post(process.env.REACT_APP_BASE_URL + `order/.json`, newOrder)
      if (response && response.status === 200) {
        this.resetCartProducts()
        localStorage.setItem('cart', JSON.stringify(''))
        toast.success('Your order has been placed!', {
          theme: 'colored',
        })
      }
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export default new ProductsStore()
