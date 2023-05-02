import React, { useState } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import styles from './styles.module.scss'
import { Slider, Button, Checkbox, Collapse, Select } from 'antd'
const { Panel } = Collapse
const { Option } = Select

const Filters = observer(({ setShowFilters }) => {
  const { ProductsStore } = useStore()
  const [from, setFrom] = useState(50)
  const [to, setTo] = useState(300)

  const handleChangeSorter = value => {
    console.log(value)
    ProductsStore.sortProducts(value)
  }

  const onChangePrice = value => {
    setFrom(value[0])
    setTo(value[1])
    console.log(value)
    ProductsStore.sortByPpice(value)
  }
  const changeBrand = value => {
    const { name } = value.target
    // console.log('changeBrand', value.target.name)
    ProductsStore.sortByBrand(name)
  }

  const changeCountry = value => {
    console.log(value)
  }
  const changePacking = value => {
    console.log(value)
  }

  function callback(key) {
    console.log(key)
  }

  const onSubmit = () => {
    console.log('onSubmit')
    setShowFilters(false)
  }

  return (
    <div className={styles.filters}>
      <h2 className={styles.title}>Фильтр</h2>

      <h3 className={styles.subtitle}>Сортировка</h3>
      <Select
        className={styles.select}
        defaultValue="name"
        size="large"
        style={{ height: 44 }}
        onChange={handleChangeSorter}
      >
        <Option value="name">Сортировка по имени</Option>
        <Option value="price">Сортировка по цене</Option>
        <Option value="default">Самые новые товары</Option>
      </Select>

      <h3 className={styles.subtitle}>Цена</h3>
      <Slider
        range
        defaultValue={[50, 300]}
        min={10}
        max={500}
        onChange={onChangePrice}
      />
      <p className={styles.text}>от - {from} грн</p>
      <p className={styles.text}>до - {to} грн</p>
      <Collapse
        className={styles.collapse}
        defaultActiveKey={['1']}
        ghost={true}
        onChange={callback}
      >
        <Panel header="Бренд" key="1">
          <ul className={styles.checkboxList}>
            {ProductsStore.brands.map(item => (
              <Checkbox
                className={styles.item}
                onChange={changeBrand}
                name={item}
                key={item}
              >
                {item}
              </Checkbox>
            ))}
          </ul>
        </Panel>
        <Panel header="Страна производства" key="2">
          <ul className={styles.checkboxList}>
            {ProductsStore.country.map(item => (
              <Checkbox
                className={styles.item}
                onChange={changeCountry}
                key={item}
              >
                {item}
              </Checkbox>
            ))}
          </ul>
        </Panel>
        <Panel header="Фасовка" key="3">
          <ul className={styles.checkboxList}>
            {ProductsStore.packing.map(item => (
              <Checkbox
                className={styles.item}
                onChange={changePacking}
                key={item}
              >
                {item}
              </Checkbox>
            ))}
          </ul>
        </Panel>
      </Collapse>
      <Button
        className={styles.btnSubmit}
        type="primary"
        onClick={() => onSubmit()}
      >
        Применить
      </Button>
    </div>
  )
})

export default Filters
