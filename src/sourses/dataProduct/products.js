const productsJSON = [
  {
    id: '1',
    category: 'coffee',
    subcategory: 'molotiy-kofe',
    name: 'Lavazza Qualita Oro / Кофе Лавацца',
    description: 'Lavazza Qualita Oro / Кофе Лавацца',
    brand: 'Pellini',
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
    price: 180,
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
    id: '2',
    category: 'syry_kolbasy',
    subcategory: '',
    name: 'Сыр Бри / Brie La Polle',
    description: 'Сыр Бри / Brie La Polle',
    brand: 'Pellini',
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
    hot: '',
    price: 85,
    image: 'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
    images: [
      'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
      'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
      'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
    ],
    qantity: 1,
  },
  {
    id: '3',
    category: 'olivkovoe_maslo',
    subcategory: '',
    name: 'Оливковое масло Де Чечо/ L’OLIO De Cecco Classico',
    description: 'Оливковое масло Де Чечо/ L’OLIO De Cecco Classico',
    brand: 'De Cecco',
    aboutProduct: {
      weight: '1.5 л',
      manufactur: 'Италия',
      fullDescription:
        'Оливковое масло L’OLIO De Cecco Classico получается при первом холодном отжиме, без использования химикатов. L’OLIO De Cecco Classico самый дорогой тип масла, так как при первом отжиме сохраняются все целебные свойства и полезные вещества. В Оливковом масле L’OLIO De Cecco Classico присутствует чистый запах оливок и легкий травяной аромат. Это масло обладает гармоничным ароматом и сбалансированным вкусом, которые подчеркнут вкусовые качества любых ваших блюд. По этому, не медлите не минуты и заказывайте оливковое масло L’OLIO De Cecco Classico прямо сейчас в интернет-магазине товаров из Европы ГЕТФУД уже сейчас и очень скоро вы сможете побаловать своих родных непревзойденным вкусом ваших блюд.',
      AdditionalInformation:
        'Additional Information Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
      Reviews:
        'Reviews Ratione volurtatem serui nesciunt neaue porro quisquam est dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam corporis  suscipit laboriosam nisi ut aliquid ex ea commodi consequatur',
    },
    isSale: false,
    hot: '15',
    price: 340,
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
    id: '4',
    category: 'coffee',
    subcategory: 'molotiy-kofe',
    name: 'Lavazza Qualita Oro / Кофе Лавацца',
    description: 'Lavazza Qualita Oro / Кофе Лавацца',
    brand: 'Pellini',
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
    price: 120,
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
    id: '5',
    category: 'syry_kolbasy',
    subcategory: '',
    name: 'Сыр Бри / Brie La Polle',
    description: 'Сыр Бри / Brie La Polle',
    brand: 'Pellini',
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
    price: 120,
    image: 'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
    images: [
      'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
      'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
      'https://getfood.com.ua/wp-content/uploads/2021/02/bri.jpg',
    ],
    qantity: 1,
  },
  {
    id: '6',
    category: 'olivkovoe_maslo',
    subcategory: '',
    name: 'Оливковое масло Де Чечо/ ZL’OLIO De Cecco',
    description: 'Оливковое масло Де Чечо/ L’OLIO De Cecco Classico',
    brand: 'Pellini',
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
    price: 200,
    image:
      'https://getfood.com.ua/wp-content/uploads/2021/02/De-Cecco-classico8jyi.jpg',
    images: [
      'https://getfood.com.ua/wp-content/uploads/2021/02/De-Cecco-classico8jyi.jpg',
      'https://getfood.com.ua/wp-content/uploads/2021/02/20160325_112456-e1459415326531-scaled-600x1437.jpg',
      'https://getfood.com.ua/wp-content/uploads/2021/02/20160325_112507-e1459415342501-scaled-600x1318.jpg',
    ],
    qantity: 5,
  },
]

export { productsJSON }
