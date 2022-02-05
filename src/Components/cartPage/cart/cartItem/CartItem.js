import React, { useState } from 'react'
import { useStore } from '../../../../storeMobx'
import { observer } from 'mobx-react'

import styles from './styles.module.scss'
import sprite from '../../../../sourses/icons/productsSprite.svg'

const CartListItem = observer(({ product }) => {
  const { ProductsStore } = useStore()
  const { name, price, image, description, aboutProduct } = product
  const [counter, setCounter] = useState(1)

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
  console.log(counter)

  const removeFromCart = product => {
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
        <h2 className={styles.text}>Вес: {aboutProduct.weight}</h2>
        <span className={styles.price}> {price} грн</span>

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
