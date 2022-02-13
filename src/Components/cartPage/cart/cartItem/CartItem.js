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
    hot,
    description,
    aboutProduct,
    qantity,
  } = product
  const history = useHistory()
  const [counter, setCounter] = useState(qantity)

  const qantityProduct = evt => {
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

  const removeFromCart = product => {
    ProductsStore.remuveFromCart(product.id)
  }

  return (
    <li className={styles.item}>
      {hot ? <p className={styles.hot}> - {hot} %</p> : null}
      <img
        className={styles.img}
        src={image}
        alt="productImg"
        onClick={() => {}}
      />
      <div className={styles.wripper}>
        <h2
          className={styles.title}
          onClick={() => history.push(`/products/${category}/${id}`)}
        >
          {name}
        </h2>
        {/* <h2 className={styles.text}>Вес: {aboutProduct.weight}</h2> */}
        {/* <span className={styles.price}> {price} грн</span> */}
        <p className={styles.price}>
          {price}грн
          <span className={styles.sale}> {price * 1.2}грн</span>
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
