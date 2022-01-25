import React, { useState } from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import styles from './styles.module.scss'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faListUl } from '@fortawesome/free-solid-svg-icons'
import { Input, Select } from 'antd'
const { Search } = Input
const { Option } = Select

const Filters = observer(() => {
  const { ProductsStore } = useStore()
  const [activeClass, setActiveClass] = useState(false)

  const onSearch = value => ProductsStore.filterProductsAction(value)

  const handleChangeSorter = value => {
    console.log(`selected ${value}`)
  }

  const changeStyle = () => {
    setActiveClass(!activeClass)
  }

  return (
    <div className={styles.containerFilter}>
      <button
        className={classNames({
          [styles.sortBtnActiv]: !activeClass,
          [styles.sortBtn]: true,
        })}
        type="button"
        onClick={() => changeStyle()}
      >
        <FontAwesomeIcon
          icon={faTh}
          size="2x"
          color="#ffffff"
          className={styles.icon}
        />
      </button>
      <button
        className={classNames({
          [styles.sortBtn]: true,
          [styles.sortBtnActiv]: activeClass,
        })}
        type="button"
        onClick={() => changeStyle()}
      >
        <FontAwesomeIcon
          icon={faListUl}
          size="2x"
          color="#ffffff"
          className={styles.icon}
        />
      </button>
      <p className={styles.text}>Показано 1–18 из 24 результатов</p>

      <Search
        className={styles.search}
        placeholder="Поиск товара"
        onSearch={onSearch}
        size="large"
        enterButton="Поиск"
      />
      <Select
        className={styles.select}
        defaultValue="name"
        size="large"
        style={{ height: 44 }}
        onChange={handleChangeSorter}
      >
        <Option value="name">Сортировка по имени</Option>
        <Option value="price">Сортировка по цене</Option>
        <Option value="new">Самые новые товары</Option>
      </Select>
    </div>
  )
})

export default Filters
