import React from "react";
import { useHistory } from "react-router";
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'

import styles from "./styles.module.scss";
import sprite from '../../../../sourses/icons/productsSprite.svg'

const OrderItem = observer(({ product }) => {
  const history = useHistory()
  const { ProductsStore } = useStore()
  const { name, price, category, id, image, qantity } = product;

  const openDetails = (product) => {
    history.push(`/products/${category}/${id}`)
  };
  const removeFromCart = product => {
    ProductsStore.remuveFromCart(product.id)
  }

  return (
    <li className={styles.orderItem}>
      <div className={styles.imgWripper}>
        <img className={styles.img}
          src={image}
          alt='productImg'
          onClick={() => openDetails(product)}
        />
      </div>
      <div className={styles.wripper}>
        <h2 className={styles.title}
          onClick={() => openDetails(product)}>
          {name}
        </h2>
        <p className={styles.qantity}>{qantity} шт</p>
        <span className={styles.price}> {price} грн</span>
      </div>
      <div
        className={styles.iconBinContainer}
        onClick={() => removeFromCart(product)}
      >
        <svg className={styles.iconBin}>
          <use href={sprite + '#icon-bin'} />
        </svg>
      </div>
    </li>
  )
})

export default OrderItem;
