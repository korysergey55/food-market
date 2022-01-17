import React from 'react'
import styles from './styles.module.scss'

const PhotoList = ({ item, changePhoto }) => {
  return (
    <li className={styles.li} onClick={() => changePhoto(item)}>
      <img className={styles.img} src={item} alt="Product foto"/>
    </li>
  )
}

export default PhotoList