import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useStore } from '../../../../../storeMobx'
import { observer } from 'mobx-react'
import { pathes } from '../../../../../utils/pathes'

import StarList from '../../../../../containers/Reuseble/starList/StarList'

import styles from './styles.module.scss'
import classnames from 'classnames'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'

const ProductItem = observer(({ product }) => {
  const { ProductsStore } = useStore()
  const history = useHistory()
  const location = useLocation()
  const [activeClass, setActive] = useState(false)

  const bay = () => {
    ProductsStore.addToCart(product)
    history.push(pathes.order)
  }

  const openDetails = () => {
    ProductsStore.setProductByIdAction(product)
    ProductsStore.setViewedProducts(product)
    history.push({
      pathname: `/products/${product.category}/${product.id}`,
      state: { from: location.pathname },
    })
  }

  const setLike = () => {
    setActive(!activeClass)
    // setActive(!activeClass)
    // if (productStore.likes.includes(product.id)) {
    //   productStore.removeLike(product.id)
    // } else {
    //   productStore.addLike(product.id)
    // }
  }

  return (
    <li className={styles.item}>
      {product && (
        <div className={styles.content}>
          {product.hot ? (
            <p className={styles.hot}> - {product.hot} %</p>
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
              src={product.image}
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
              onClick={() =>  ProductsStore.addToCart(product)}
            />
          </div>
          <Button
            className={styles.btn}
            type={'primary'}
            size="middle"
            onClick={() => bay(product)}
          >
            Купить
          </Button>
        </div>
      )}
    </li>
  )
})

export default ProductItem
