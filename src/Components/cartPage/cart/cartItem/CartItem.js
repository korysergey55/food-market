import React from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'

import styles from './styles.module.scss'
import sprite from '../../../../sourses/icons/productsSprite.svg'

const CartListItem = observer(({ product }) => {
  const { ProductsStore } = useStore()
  const { name, price, image, description } = product

  const removeFromCart = (product) => {
    ProductsStore.remuveFromCart(product)
  }

  return (
    <li className={styles.item}>
      <img
        className={styles.img}
        src={image}
        alt="productImg"
        onClick={() => {}}
      />
      <div className={styles.wripper}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}> {price} грн</span>
        <div
          className={styles.iconContainer}
          onClick={() => removeFromCart(product)}
        >
          <svg className={styles.iconBin}>
            <use href={sprite + '#icon-bin'} />
          </svg>
        </div>
      </div>
    </li>
  )
})

export default CartListItem
