import React, { useEffect, useState } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { useParams } from 'react-router'

import Slider from 'react-slick'
import { sliderSettings } from '../../../utils/sliderSettings'

import PhotoList from './photoList/PhotoList'
import StarList from '../../../containers/Reuseble/starList/StarList'
import ProductItem from '../../productsPage/products/productList/productItem/productItem'

import styles from './styles.module.scss'
import classnames from 'classnames'
import { Button } from 'antd'

const ProductItemDetails = observer(() => {
  const { ProductsStore } = useStore()
  const { productById, viewedProducts } = ProductsStore

  const history = useHistory()
  const location = useLocation()
  const match = useRouteMatch()
  const params = useParams()
  const { productID } = params
  const category = match.params.category

  const [photo, setPhoto] = useState(null)
  const [activeItem, setActiveItem] = useState('')
  const [discriptionText, setDiscriptionText] = useState('')
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    if (productID) {
      ProductsStore.setProductDetailsAction(productID)
      ProductsStore.setViewedProducts(productID)
    }
  }, [])

  useEffect(() => {
    setDiscriptionText(null)
    productById && setDiscriptionText(productById.fullDescription)

    setActiveItem('fullDescription')
  }, [])

  const onChangeDiscription = text => {
    setDiscriptionText(text)
  }

  const changePhoto = data => {
    setPhoto(data)
  }

  const changeQantity = evt => {
    const { dataset } = evt.target
    if (dataset.name === 'decrement') {
      if (counter > 1) {
        setCounter(prev => prev - 1)
      }
    }
    if (dataset.name === 'increment') {
      setCounter(prev => prev + 1)
    }
  }

  const goBack = () => {
    if (location.state) {
      history.push(location.state.from)
    } else history.push(`/products/${category}`)
  }

  return productById ? (
    <div className={styles.container}>
      <Button className={styles.goBack} type="primary" onClick={goBack}>
        Назад
      </Button>
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
          <p className={styles.description}>{productById.description}</p>
          <p className={styles.description}>
            Производитель: {productById.manufactur}
          </p>
          <p className={styles.description}>
            Вес: {productById.weight}
          </p>
          <p className={styles.price}>
            {productById.price}грн
            <span className={styles.sale}> {productById.price * 1.2}грн</span>
          </p>

          <div className={styles.btnContainer}>
            <button
              className={styles.btn}
              type="button"
              data-name="decrement"
              onClick={changeQantity}
            >
              -
            </button>
            <button className={styles.value}>{counter}</button>
            <button
              className={styles.btn}
              type="button"
              data-name="increment"
              onClick={changeQantity}
            >
              +
            </button>
          </div>

          <button
            onClick={() => ProductsStore.addToCart(productById.id)}
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
                [styles.active]: activeItem === 'fullDescription',
              })}
              onClick={() => {
                onChangeDiscription(productById.fullDescription)
                setActiveItem('fullDescription')
              }}
            >
              Описание
            </li>
            <li
              className={classnames({
                [styles.item]: true,
                [styles.active]: activeItem === 'AdditionalInformation',
              })}
              onClick={() => {
                onChangeDiscription(
                  productById.AdditionalInformation
                )
                setActiveItem('AdditionalInformation')
              }}
            >
              Дополнительная информация
            </li>
            <li
              className={classnames({
                [styles.item]: true,
                [styles.active]: activeItem === 'Reviews',
              })}
              onClick={() => {
                onChangeDiscription(productById.Reviews)
                setActiveItem('Reviews')
              }}
            >
              Отзывы
            </li>
          </ul>
          {discriptionText && <p className={styles.text}>{discriptionText}</p>}
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

export default ProductItemDetails
