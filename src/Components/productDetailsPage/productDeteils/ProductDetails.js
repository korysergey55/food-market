import React, { useEffect, useState } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next';

import Slider from 'react-slick'
import { sliderSettings } from '../../../utils/sliderSettings'

import PhotoList from './photoList/PhotoList'
import ProductItem from '../../productsPage/products/productList/productItem/productItem'
import StarList from '../../../containers/Reuseble/starList/StarList'
import defaultPhoto from '../../../sourses/images/defaultPhoto.png'

import styles from './styles.module.scss'
import classnames from 'classnames'
import { Button } from 'antd'

const ProductItemDetails = observer(() => {
  const { ProductsStore } = useStore()
  const { productById, viewedProducts } = ProductsStore
  const { t } = useTranslation();

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
  }, [productID])

  useEffect(() => {
    productById && setDiscriptionText(productById.fullDescription)
    setActiveItem('fullDescription')
  }, [])

  const onChangeDiscription = text => {
    setDiscriptionText(text)
  }

  const changePhoto = src => {
    setPhoto(src)
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

  const addProductToCart = (id) => {
    for (let i = 0; i < counter; i++) {
      ProductsStore.addToCart(id)
    }
  }

  const goBack = () => {
    window.history.back()
    // if (location.state) {
    //   history.push(location.state.from)
    // }
    // else history.push(`/products/${category}`)
  }

  return productById ? (
    <div className={styles.container}>
      <Button className={styles.goBack} type="primary" onClick={goBack}>
        {t('Назад')}
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
            src={photo ? photo : (productById?.image ? productById.image : defaultPhoto)}
            alt="productImg"
            className={styles.img}
          />
        </div>

        <div className={styles.wripper}>
          <h3 className={styles.title}>{productById.name}</h3>
          <p className={styles.code}>{t('Код продукта')}: {productById.code}</p>
          <div className={styles.raitWripper}>
            <p className={styles.rating}>{t('Рейтинг')}:</p>
            <StarList />
          </div>
          <p className={styles.description}>{productById.description}</p>
          <p className={styles.description}>
            {t('Производитель')}: {productById.manufactur} {productById.brand}
          </p>
          <p className={styles.description}>
            {t('Вес')}: {productById.weight} {t('гр.')}
          </p>
          <p className={styles.price}>
            {productById.price}грн
            {productById.discount ?
              <span className={styles.sale}>
                {productById.price + productById.price * Number(productById.discount / 100)}грн</span>
              : null}
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
            onClick={() => addProductToCart(productById.id)}
            className={styles.addToCart}
          >
            {t('В корзину')}
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
              {t('Описание')}
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
              {t('Дополнительная информация')}
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
              {t('Отзывы')}
            </li>
          </ul>
          {discriptionText && <p className={styles.text}>{discriptionText}</p>}
        </div>
      </div>

      {viewedProducts.length > 0 ? (
        <div className={styles.viewedContainer}>
          <h2 className={styles.title}>{t('Просмотренные товары')}</h2>
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
