import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useParams } from 'react-router'
import { useStore } from '../../../../../storeMobx'
import { observer } from 'mobx-react'
import { pathes } from '../../../../../utils/pathes'
import { useTranslation } from 'react-i18next';

import StarList from '../../../../../containers/Reuseble/starList/StarList'
import defaultPhoto from '../../../../../sourses/images/defaultPhoto.png'

import styles from './styles.module.scss'
import classnames from 'classnames'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'

const ProductItem = observer(({ product }, isLike) => {
  const { ProductsStore } = useStore()
  const { t } = useTranslation();
  const history = useHistory()
  const location = useLocation()

  const [activeClass, setActive] = useState(false)

  useEffect(() => {
    if (location.pathname === '/favorite') setActive(true)
  }, [])

  const bayNow = () => {
    ProductsStore.addToCart(product.id)
    history.push(pathes.cart)
  }

  const openDetails = () => {
    history.push({
      pathname: `/products/${product.category}/${product.id}`,
      state: { from: location.pathname },
    })
  }

  const setLike = () => {
    setActive(!activeClass)
    if (!activeClass) { ProductsStore.setFavoriteItemIdAction(product.id) }
    else { ProductsStore.remuveFavoriteItemAction(product.id) }
  }

  return (
    <li className={styles.item}>
      {product && (
        <div className={styles.content}>
          {product.discount ? (
            <p className={styles.discount}> - {product.discount} %</p>
          ) : null}
          <a
            className={classnames({
              [styles.like]: true,
              [styles.likeActive]: activeClass,
            })}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              setLike()
            }}
            href=""
          >
            <FontAwesomeIcon className={styles.icon} icon={faHeart} size="lg" />
          </a>
          <div className={styles.imgWrapper} onClick={openDetails}>
            <img
              src={product.image ? product.image : defaultPhoto}
              alt={product.name}
              className={styles.img}
            />
          </div>
          <h3 className={styles.title}>{product.name}</h3>
          <StarList />
          <div className={styles.priceWripper}>
            <p className={styles.price}>{product.price} грн</p>
            <FontAwesomeIcon
              className={styles.cartIcon}
              icon={faCartPlus}
              size="lg"
              onClick={() => ProductsStore.addToCart(product.id)}
            />
          </div>
          <Button
            className={styles.btn}
            type={'primary'}
            size="middle"
            onClick={() => bayNow(product)}
          >
            {t('Купить')}
          </Button>
        </div>
      )}
    </li>
  )
})

export default ProductItem
