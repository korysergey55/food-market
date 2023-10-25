import { useEffect, useState } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next';

import Slider from 'react-slick'
import { settings } from '../../../utils/sliderSettings'

import PhotoList from './photoList/PhotoList'
import ProductItem from '../../productsPage/products/productList/productItem/productItem'
import StarList from '../../../containers/Reuseble/starList/StarList'

import styles from './styles.module.scss'
import classnames from 'classnames'
import defaultPhoto from '../../../sourses/images/defaultPhoto.png'

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/dist/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/dist/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/dist/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/dist/plugins/thumbnails";
import Video from "yet-another-react-lightbox/dist/plugins/video";
import Zoom from "yet-another-react-lightbox/dist/plugins/zoom";

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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (productID) {
      ProductsStore.setProductDetailsAction(productID)
      ProductsStore.setViewedProducts(productID)
    }
  }, [productID])

  useEffect(() => {
    productById && setDiscriptionText(productById.fullDescription)
    setActiveItem('fullDescription')
  }, [productById])

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
        {t('productDatailsPage.go_beck')}
      </Button>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          {productById.images && (
            <ul className={styles.gallery}>
              {/* <Slider {...settings} className={styles.sliderList}> */}
              {productById.images?.map((item, index) => (
                <PhotoList item={item} changePhoto={changePhoto} key={index} />
              ))}
              {/* </Slider> */}
            </ul>
          )}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            plugins={[Captions, Fullscreen, Slideshow, Video, Zoom]}
            slides={
              productById?.images?.map((item, index) => (
                { src: item }
              ))
            }>
          </Lightbox>
          <img
            className={styles.img}
            src={photo ? photo : (productById?.image ? productById.image : defaultPhoto)}
            alt={productById.description}
            onClick={() => setOpen(true)}
          />
        </div>

        <div className={styles.wripper}>
          <h3 className={styles.title}>{productById.name}</h3>
          <p className={styles.description}>{t('productDatailsPage.code_of_product')}:
            <span className={styles.text}> {productById.id}</span>
          </p>
          <div className={styles.raitWripper}>
            <p className={styles.description}>{t('productDatailsPage.rating_scale')}:</p>
            <StarList />
          </div>
          <p className={styles.description}>{t('productDatailsPage.description')}:
            <span className={styles.text}> {productById.description}</span>
          </p>
          <p className={styles.description}>
            {t('productDatailsPage.manufacturer')}:
            <span className={styles.text}> {productById.manufactur} {productById.brand}</span>
          </p>
          <p className={styles.description}>
            {t('productDatailsPage.weight')}:
            <span className={styles.text}> {productById.weight}</span>
          </p>
          <p className={styles.price}>
            {productById.price} {t('productDatailsPage.uan')}
            {productById.discount ?
              <span className={styles.sale}>
                {productById.price + productById.price * Number(productById.discount / 100)}
                {t('productDatailsPage.uan')}
              </span>
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
            {t('productDatailsPage.add_to_cart')}
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
              {t('productDatailsPage.description')}
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
              {t('productDatailsPage.additional_information')}
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
              {t('productDatailsPage.reviews')}
            </li>
          </ul>
          {discriptionText && <p className={styles.text}>{discriptionText}</p>}
        </div>
      </div>

      {viewedProducts.length > 0 ? (
        <div className={styles.viewedContainer}>
          <h2 className={styles.title}>{t('productDatailsPage.viewed_products')}</h2>
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
