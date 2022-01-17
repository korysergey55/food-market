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

class ProductsStore {
  @observable products: any = [
    {
      id: '1',
      category: 'laptops',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
      images: [
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872103.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/196872094.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872106.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '2',
      category: 'laptops',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
      images: [
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872103.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/196872094.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872106.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '3',
      category: 'laptops',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
      images: [
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872103.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/196872094.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872106.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '4',
      category: 'laptops',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
      images: [
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872103.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/196872094.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872106.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '5',
      category: 'laptops',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
      images: [
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872103.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/196872094.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872106.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '6',
      category: 'laptops',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
      images: [
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872103.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/196872094.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872106.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '7',
      category: 'laptops',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
      images: [
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872103.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/196872094.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872106.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '8',
      category: 'laptops',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
      images: [
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content.rozetka.com.ua/goods/images/big/196872104.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872103.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/196872094.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/196872106.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },

    {
      id: '11',
      category: 'phones',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content2.rozetka.com.ua/goods/images/big/221290006.jpg',
      images: [
        'https://content2.rozetka.com.ua/goods/images/big/221290006.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/221290029.jpg',
        'https://content.rozetka.com.ua/goods/images/big/221023002.jpg',
        'https://content.rozetka.com.ua/goods/images/big/221290076.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/221290134.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '12',
      category: 'phones',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content2.rozetka.com.ua/goods/images/big/144250252.jpg',
      images: [
        'https://content2.rozetka.com.ua/goods/images/big/144250252.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/144250204.jpg',
        'https://content.rozetka.com.ua/goods/images/big/144250428.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/144250342.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/144250313.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '13',
      category: 'phones',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content2.rozetka.com.ua/goods/images/big/221290006.jpg',
      images: [
        'https://content2.rozetka.com.ua/goods/images/big/221290006.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/221290029.jpg',
        'https://content.rozetka.com.ua/goods/images/big/221023002.jpg',
        'https://content.rozetka.com.ua/goods/images/big/221290076.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/221290134.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '14',
      category: 'phones',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content2.rozetka.com.ua/goods/images/big/144250252.jpg',
      images: [
        'https://content2.rozetka.com.ua/goods/images/big/144250252.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/144250204.jpg',
        'https://content.rozetka.com.ua/goods/images/big/144250428.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/144250342.jpg',
        'https://content1.rozetka.com.ua/goods/images/big/144250313.jpg',
      ],
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '15',
      category: 'ipads',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image:
        'https://bigmag.ua/image/cache/catalog/archive/data/Katya/ipad/sg%20(1)-650x540.webp',
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '16',
      category: 'ipads',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image:
        'https://bigmag.ua/image/cache/catalog/archive/data/Katya/ipad/sg%20(1)-650x540.webp',
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '17',
      category: 'ipads',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image:
        'https://bigmag.ua/image/cache/catalog/archive/data/Katya/ipad/sg%20(1)-650x540.webp',
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
    {
      id: '18',
      category: 'ipads',
      description:
        "Екран 15.6' IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-10300H (2.5 — 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.39 кг / чорний",
      aboutProduct: {
        fullDescription:
          'Description Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        AdditionalInformation:
          'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
        Reviews:
          'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      },
      image: 'https://content.rozetka.com.ua/goods/images/big/173886513.jpg',
      isSale: false,
      name: 'Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black',
      price: '25000',
      qantity: 1,
      hot: '15',
    },
  ]
  @observable filteredProducts: any = [...this.products]

  @observable productById: any = null

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
