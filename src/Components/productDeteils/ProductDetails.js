import React, { useEffect, useState } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'
import {
  useHistory,
  useLocation,
  useRouteMatch,
  withRouter,
} from 'react-router-dom'
import Slider from 'react-slick'
import { sliderSettings } from '../../utils/sliderSettings'

import PhotoList from '../productDeteils/photoList/PhotoList'
import StarList from '../../containers/starList/StarList'
import ProductItem from '../productsPage/products/productList/productItem/productItem'

import styles from './styles.module.scss'
import classnames from 'classnames'

const ProductItemDetails = observer(() => {
  const { ProductsStore } = useStore()
  const { productById, viewedProducts } = ProductsStore
  const history = useHistory()
  const location = useLocation()
  const match = useRouteMatch()
  const category = match.params.category

  const [photo, setPhoto] = useState(null)
  const [activeItem, setActiveItem] = useState(1)
  const [discriptionText, setDiscriptionText] = useState('')
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    if (productById) {
      setDiscriptionText(productById.aboutProduct.fullDescription)
    }
  }, [])

  const onChangeDiscription = (id, text) => {
    setActiveItem(id)
    setDiscriptionText(text)
  }

  const changePhoto = data => {
    setPhoto(data)
  }

  const decrimentProduct = () => {
    if (counter > 1) {
      setCounter(prev => prev - 1)
    }
  }
  const incrementProduct = () => {
    setCounter(prev => prev + 1)
  }

  const goBack = () => {
    if (location.state) {
      history.push(location.state.from)
    } else history.push(`/products/${category}`)
  }

  return productById ? (
    <div className={styles.container}>
      <button className={styles.goBack} type="button" onClick={goBack}>
        Назад
      </button>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          {productById.images && (
            <div className={styles.sliderContainer}>
              <Slider {...sliderSettings} className={styles.sliderList}>
                {productById.images?.map(item => (
                  <PhotoList item={item} changePhoto={changePhoto} key={item} />
                ))}
              </Slider>
            </div>
          )}
          <img
            src={photo ? photo : productById.image}
            alt="productImg"
            className={styles.img}
          />
        </div>

        <div className={styles.wripper}>
          <h3 className={styles.title}>{productById.name}</h3>
          <p className={styles.code}>Код продукта: {productById.code}</p>
          <div className={styles.raitWripper}>
            <p className={styles.rating}>Рейтинг:</p>
            <StarList />
          </div>
          {/* <div className={styles.colorsWripper}>
            <p className={styles.colors}>Цвета:</p>
            <ul className={styles.colorList}>
              <li className={styles.colorItem}></li>
              <li className={styles.colorItem}></li>
              <li className={styles.colorItem}></li>
              <li className={styles.colorItem}></li>
            </ul>
          </div> */}
          <p className={styles.description}>{productById.description}</p>
          <p className={styles.price}>
            {productById.price}грн
            <span className={styles.sale}> {productById.price * 1.2}грн</span>
          </p>

          <div className={styles.btnContainer}>
            <button
              className={styles.btn}
              type="button"
              onClick={incrementProduct}
            >
              +
            </button>
            <button className={styles.value}>{counter}</button>
            <button
              className={styles.btn}
              type="button"
              onClick={decrimentProduct}
            >
              -
            </button>
          </div>

          <button
            onClick={() => ProductsStore.addToCart(productById)}
            className={styles.addToCart}
          >
            Add to cart
          </button>
        </div>

        <div className={styles.aboutProduct}>
          <ul className={styles.list}>
            <li
              className={classnames({
                [styles.item]: true,
                [styles.active]: activeItem === 1,
              })}
              onClick={() =>
                onChangeDiscription(1, productById.aboutProduct.fullDescription)
              }
            >
              Описание
            </li>
            <li
              className={classnames({
                [styles.item]: true,
                [styles.active]: activeItem === 2,
              })}
              onClick={() =>
                onChangeDiscription(
                  2,
                  productById.aboutProduct.AdditionalInformation
                )
              }
            >
              Дополнительная информация
            </li>
            <li
              className={classnames({
                [styles.item]: true,
                [styles.active]: activeItem === 3,
              })}
              onClick={() =>
                onChangeDiscription(3, productById.aboutProduct.Reviews)
              }
            >
              Отзывы
            </li>
          </ul>
          <p className={styles.text}>{discriptionText}</p>
        </div>
      </div>

      {viewedProducts.length > 0 ? (
        <div className={styles.viewedContainer}>
          <h2 className={styles.title}>Просмотренные товары</h2>
          <ul className={styles.list}>
            {viewedProducts.map((item, index) => (
              <ProductItem product={item} key={index} />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  ) : null
})

export default withRouter(ProductItemDetails)
