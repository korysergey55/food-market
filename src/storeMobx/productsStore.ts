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

import { categories } from '../sourses/data/categories'

class ProductsStore {
  @observable products: any = [
    {
      id: '1',
      category: 'coffee',
      subcategory: 'molotiy-kofe',
      name: 'Lavazza Qualita Oro / Кофе Лавацца',
      description: 'Lavazza Qualita Oro / Кофе Лавацца',
      aboutProduct: {
        weight: '250 гр',
        manufactur: 'Италия',
        fullDescription:
          'Кофе Lavazza Qualita Oro – это кофе премиум класса, который состоит из 100% арабики. Благодаря этому, напиток Lavazza Qualita Oro получается с очень отчетливым и легко узнаваемым ароматом.',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      isSale: false,
      hot: '20',
      price: '180',
      image:
        'https://getfood.com.ua/wp-content/uploads/2021/02/orororo-600x600.png',
      images: [
        'https://getfood.com.ua/wp-content/uploads/2021/02/orororo-600x600.png',
        'https://getfood.com.ua/wp-content/uploads/2021/02/oro-250-2-600x800.jpg',
        'https://getfood.com.ua/wp-content/uploads/2021/02/oro-250-600x800.jpg',
      ],
      qantity: 1,
    },

    {
      id: '101',
      category: 'syry_kolbasy',
      subcategory: '',
      name: 'Сыр Бри / Brie La Polle',
      description: 'Сыр Бри / Brie La Polle',
      aboutProduct: {
        weight: '125 гр',
        manufactur: 'Польша',
        fullDescription:
          'Brie La Polle – это мягкий сыр с белой плесенью. Он покрыт корочкой белого цвета, которая имеет бархатистую плесневую поверхность. Под этой корочкой находится нежная текучая масса белого цвета. Сыр Бри обладает ярким и деликатным вкусом и легким ореховым послевкусием.',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      isSale: false,
      hot: '20',
      price: '85',
      image: 'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
      images: [
        'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
        'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
        'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
      ],
      qantity: 1,
    },
    {
      id: '201',
      category: 'olivkovoe_maslo',
      subcategory: '',
      name: 'Оливковое масло Де Чечо/ L’OLIO De Cecco Classico',
      description: 'Оливковое масло Де Чечо/ L’OLIO De Cecco Classico',
      aboutProduct: {
        weight: '1 л',
        manufactur: 'Италия',
        fullDescription:
          'Оливковое масло L’OLIO De Cecco Classico получается при первом холодном отжиме, без использования химикатов. L’OLIO De Cecco Classico самый дорогой тип масла, так как при первом отжиме сохраняются все целебные свойства и полезные вещества. В Оливковом масле L’OLIO De Cecco Classico присутствует чистый запах оливок и легкий травяной аромат. Это масло обладает гармоничным ароматом и сбалансированным вкусом, которые подчеркнут вкусовые качества любых ваших блюд. По этому, не медлите не минуты и заказывайте оливковое масло L’OLIO De Cecco Classico прямо сейчас в интернет-магазине товаров из Европы ГЕТФУД уже сейчас и очень скоро вы сможете побаловать своих родных непревзойденным вкусом ваших блюд.',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      isSale: false,
      hot: '20',
      price: '240',
      image:
        'https://getfood.com.ua/wp-content/uploads/2021/02/De-Cecco-classico8jyi.jpg',
      images: [
        'https://getfood.com.ua/wp-content/uploads/2021/02/De-Cecco-classico8jyi.jpg',
        'https://getfood.com.ua/wp-content/uploads/2021/02/20160325_112456-e1459415326531-scaled-600x1437.jpg',
        'https://getfood.com.ua/wp-content/uploads/2021/02/20160325_112507-e1459415342501-scaled-600x1318.jpg',
      ],
      qantity: 1,
    },
    {
      id: '145',
      category: 'coffee',
      subcategory: 'molotiy-kofe',
      name: 'Lavazza Qualita Oro / Кофе Лавацца',
      description: 'Lavazza Qualita Oro / Кофе Лавацца',
      aboutProduct: {
        weight: '250 гр',
        manufactur: 'Италия',
        fullDescription:
          'Кофе Lavazza Qualita Oro – это кофе премиум класса, который состоит из 100% арабики. Благодаря этому, напиток Lavazza Qualita Oro получается с очень отчетливым и легко узнаваемым ароматом.',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      isSale: false,
      hot: '20',
      price: '180',
      image:
        'https://getfood.com.ua/wp-content/uploads/2021/02/orororo-600x600.png',
      images: [
        'https://getfood.com.ua/wp-content/uploads/2021/02/orororo-600x600.png',
        'https://getfood.com.ua/wp-content/uploads/2021/02/oro-250-2-600x800.jpg',
        'https://getfood.com.ua/wp-content/uploads/2021/02/oro-250-600x800.jpg',
      ],
      qantity: 1,
    },

    {
      id: '1051',
      category: 'syry_kolbasy',
      subcategory: '',
      name: 'Сыр Бри / Brie La Polle',
      description: 'Сыр Бри / Brie La Polle',
      aboutProduct: {
        weight: '125 гр',
        manufactur: 'Польша',
        fullDescription:
          'Brie La Polle – это мягкий сыр с белой плесенью. Он покрыт корочкой белого цвета, которая имеет бархатистую плесневую поверхность. Под этой корочкой находится нежная текучая масса белого цвета. Сыр Бри обладает ярким и деликатным вкусом и легким ореховым послевкусием.',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      isSale: false,
      hot: '20',
      price: '85',
      image: 'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
      images: [
        'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
        'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
        'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
      ],
      qantity: 1,
    },
    {
      id: '2051',
      category: 'olivkovoe_maslo',
      subcategory: '',
      name: 'Оливковое масло Де Чечо/ L’OLIO De Cecco Classico',
      description: 'Оливковое масло Де Чечо/ L’OLIO De Cecco Classico',
      aboutProduct: {
        weight: '1 л',
        manufactur: 'Италия',
        fullDescription:
          'Оливковое масло L’OLIO De Cecco Classico получается при первом холодном отжиме, без использования химикатов. L’OLIO De Cecco Classico самый дорогой тип масла, так как при первом отжиме сохраняются все целебные свойства и полезные вещества. В Оливковом масле L’OLIO De Cecco Classico присутствует чистый запах оливок и легкий травяной аромат. Это масло обладает гармоничным ароматом и сбалансированным вкусом, которые подчеркнут вкусовые качества любых ваших блюд. По этому, не медлите не минуты и заказывайте оливковое масло L’OLIO De Cecco Classico прямо сейчас в интернет-магазине товаров из Европы ГЕТФУД уже сейчас и очень скоро вы сможете побаловать своих родных непревзойденным вкусом ваших блюд.',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      isSale: false,
      hot: '20',
      price: '240',
      image:
        'https://getfood.com.ua/wp-content/uploads/2021/02/De-Cecco-classico8jyi.jpg',
      images: [
        'https://getfood.com.ua/wp-content/uploads/2021/02/De-Cecco-classico8jyi.jpg',
        'https://getfood.com.ua/wp-content/uploads/2021/02/20160325_112456-e1459415326531-scaled-600x1437.jpg',
        'https://getfood.com.ua/wp-content/uploads/2021/02/20160325_112507-e1459415342501-scaled-600x1318.jpg',
      ],
      qantity: 1,
    },
  ]
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
  @observable country: any = [
    'Германия',
    'Польша',
    'Швеция',
    'Италия',
    'Австрия',
    'Щвейцария',
  ]
  @observable packing: any = ['100', '200', ' 300', ' 400', '500', '600']
  @observable categoty: any = [...categories]

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.totalPrice,
      _ => console.log('mobx-totalPrice', toJS(this.totalPrice))
    )
  }

  @action setAllProductsAction(data: any) {
    this.products = [...data]
  }

  @action setProductById(id: any) {
    const newProduct = this.products.find((item: any) => item.id === id)
    this.productById = newProduct
  }

  @action setViewedProducts(id: any) {
    const newProduct = this.products.find((item: any) => item.id === id)
    this.viewedProducts = [...this.viewedProducts, newProduct]
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
