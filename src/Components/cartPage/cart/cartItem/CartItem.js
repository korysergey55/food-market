import React, { useState } from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router'

import styles from './styles.module.scss'
import sprite from '../../../../sourses/icons/productsSprite.svg'

const CartListItem = observer(({ product }) => {
  const { ProductsStore } = useStore()
  const {
    id,
    category,
    name,
    price,
    image,
    discount,
    weight,
    description,
    qantity,
  } = product
  const history = useHistory()
  const [counter, setCounter] = useState(qantity)

  const qantityProduct = evt => {
    const { dataset } = evt.target

    if (dataset.name === 'increment') {
      setCounter(prev => prev + 1)
      ProductsStore.setQantityCartProducts(id, 'increment')
      ProductsStore.addToCart(id, false)
    }
    if (dataset.name === 'decrement') {
      if (counter > 1) {
        setCounter(prev => prev - 1)
        ProductsStore.setQantityCartProducts(id, 'decrement')
        ProductsStore.remuveItemFromCart(id)
      }
    }
    ProductsStore.setTotalPrice()
  }

  const removeFromCart = product => {
    ProductsStore.remuveFromCart(product.id)
  }

  return (
    <li className={styles.item}>
      {discount ? <p className={styles.discount}> - {discount} %</p> : null}
      <img
        className={styles.img}
        src={image}
        alt="productImg"
        onClick={() => history.push(`/products/${category}/${id}`)}
      />
      <div className={styles.wripper}>
        <h2
          className={styles.title}
          onClick={() => history.push(`/products/${category}/${id}`)}
        >
          {name}
        </h2>
        <h2 className={styles.text}> {weight}</h2>
        <p className={styles.price}>
          {price}грн
          {discount ? <span className={styles.sale}> {price + price * Number(discount / 100)}грн</span> : null}
        </p>
        <div className={styles.btnContainer}>
          <button
            className={styles.btn}
            type="button"
            data-name="decrement"
            onClick={evt => qantityProduct(evt)}
          >
            -
          </button>
          <button className={styles.value}>{counter}</button>
          <button
            className={styles.btn}
            type="button"
            data-name="increment"
            onClick={evt => qantityProduct(evt)}
          >
            +
          </button>
        </div>

        <div
          className={styles.iconBinContainer}
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
