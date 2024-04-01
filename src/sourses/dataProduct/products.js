const productsJSON = [
  {
    id: '1',
    category: 'coffee',
    subcategory: 'molotiy-kofe',
    name: 'Lavazza Qualita Oro / Кофе Лавацца',
    description: 'Lavazza Qualita Oro / Кофе Лавацца',
    brand: 'Pellini',

    weight: '250 gram',
    manufactur: 'Italy',
    fullDescription:
      'Кофе Lavazza Qualita Oro – это кофе премиум класса, который состоит из 100% арабики. Благодаря этому, напиток Lavazza Qualita Oro получается с очень отчетливым и легко узнаваемым ароматом.',
    AdditionalInformation:
      'Additional Information Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    Reviews:
      'Reviews Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    isSale: false,
    discount: '20',
    price: 180,
    image: 'https://getfood.com.ua/wp-content/uploads/2021/02/orororo-600x600.png',
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
    weight: '125 gram',
    manufactur: 'Poland',
    fullDescription:
      'Brie La Polle – это мягкий сыр с белой плесенью. Он покрыт корочкой белого цвета, которая имеет бархатистую плесневую поверхность. Под этой корочкой находится нежная текучая масса белого цвета. Сыр Бри обладает ярким и деликатным вкусом и легким ореховым послевкусием.',
    AdditionalInformation:
      'Additional Information Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    Reviews:
      'Reviews Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    isSale: false,
    discount: '',
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
    subcategory: '5',
    name: 'Оливковое масло Де Чечо/ L`OLIO De Cecco Classico',
    description: 'Оливковое масло Де Чечо/ L`OLIO De Cecco Classico',
    brand: 'De Cecco',

    weight: '1.5 litr',
    manufactur: 'Italy',
    fullDescription:
      'Оливковое масло L`OLIO De Cecco Classico получается при первом холодном отжиме, без использования химикатов. L`OLIO De Cecco Classico самый дорогой тип масла, так как при первом отжиме сохраняются все целебные свойства и полезные вещества. В Оливковом масле L`OLIO De Cecco Classico присутствует чистый запах оливок и легкий травяной аромат. Это масло обладает гармоничным ароматом и сбалансированным вкусом, которые подчеркнут вкусовые качества любых ваших блюд. По этому, не медлите не минуты и заказывайте оливковое масло L`OLIO De Cecco Classico прямо сейчас в интернет-магазине товаров из Европы ГЕТФУД уже сейчас и очень скоро вы сможете побаловать своих родных непревзойденным вкусом ваших блюд.',
    AdditionalInformation:
      'Additional Information Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    Reviews:
      'Reviews Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    isSale: false,
    discount: '15',
    price: 340,
    image: 'https://getfood.com.ua/wp-content/uploads/2021/02/De-Cecco-classico8jyi.jpg',
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
    weight: '250 gram',
    manufactur: 'Italy',
    fullDescription:
      'Кофе Lavazza Qualita Oro – это кофе премиум класса, который состоит из 100% арабики. Благодаря этому, напиток Lavazza Qualita Oro получается с очень отчетливым и легко узнаваемым ароматом.',
    AdditionalInformation:
      'Additional Information Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    Reviews:
      'Reviews Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    isSale: false,
    discount: '20',
    price: 120,
    image: 'https://getfood.com.ua/wp-content/uploads/2021/02/orororo-600x600.png',
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
    weight: '125 gram',
    manufactur: 'Poland',
    fullDescription:
      'Brie La Polle – это мягкий сыр с белой плесенью. Он покрыт корочкой белого цвета, которая имеет бархатистую плесневую поверхность. Под этой корочкой находится нежная текучая масса белого цвета. Сыр Бри обладает ярким и деликатным вкусом и легким ореховым послевкусием.',
    AdditionalInformation:
      'Additional Information Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    Reviews:
      'Reviews Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    isSale: false,
    discount: '20',
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
    name: 'Оливковое масло Де Чечо/ ZL`OLIO De Cecco',
    description: 'Оливковое масло Де Чечо/ L`OLIO De Cecco Classico',
    brand: 'Pellini',
    weight: '1 litr',
    manufactur: 'Italy',
    fullDescription:
      'Оливковое масло L`OLIO De Cecco Classico получается при первом холодном отжиме, без использования химикатов. L`OLIO De Cecco Classico самый дорогой тип масла, так как при первом отжиме сохраняются все целебные свойства и полезные вещества. В Оливковом масле L`OLIO De Cecco Classico присутствует чистый запах оливок и легкий травяной аромат. Это масло обладает гармоничным ароматом и сбалансированным вкусом, которые подчеркнут вкусовые качества любых ваших блюд. По этому, не медлите не минуты и заказывайте оливковое масло L`OLIO De Cecco Classico прямо сейчас в интернет-магазине товаров из Европы ГЕТФУД уже сейчас и очень скоро вы сможете побаловать своих родных непревзойденным вкусом ваших блюд.',
    AdditionalInformation:
      'Additional Information Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    Reviews:
      'Reviews Our promise is to exceed your expectations by combining the best customer service with the freshest foods.  Our team is committed to buying the freshest foods and bringing them to you for a great price.',
    isSale: false,
    discount: '20',
    price: 200,
    image: 'https://getfood.com.ua/wp-content/uploads/2021/02/De-Cecco-classico8jyi.jpg',
    images: [
      'https://getfood.com.ua/wp-content/uploads/2021/02/De-Cecco-classico8jyi.jpg',
      'https://getfood.com.ua/wp-content/uploads/2021/02/20160325_112456-e1459415326531-scaled-600x1437.jpg',
      'https://getfood.com.ua/wp-content/uploads/2021/02/20160325_112507-e1459415342501-scaled-600x1318.jpg',
    ],
    qantity: 5,
  },
]

export { productsJSON }
