import React from "react";
import { useHistory } from "react-router";
import { useStore } from '../../../../../storeMobx'
import { observer } from 'mobx-react'

import styles from "./styles.module.scss";

const OrderItem = observer(({ product }) => {
  const { ProductsStore } = useStore()
  const history = useHistory()
  const { name, price, category, id, image, qantity } = product;
  

  const openDetails = (product) => {
    ProductsStore.setProductWithIdAction(product)
    history.push(`/products/${category}/${id}`)
  };

  return (
    <li className={styles.orderItem}>
      <div className={styles.imgWripper}>
        <img className={styles.img}
          src={image}
          alt='productImg'
          onClick={()=>openDetails(product)} />
      </div>
      <div className={styles.wripper}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.qantity}>{qantity} шт</p>
        <span className={styles.price}> {price} грн</span>
      </div>
    </li>
  )
})

export default OrderItem;
