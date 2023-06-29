import React, { useState, useEffect } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import styles from './styles.module.scss'
import { Slider, Button, Checkbox, Collapse, Select } from 'antd'
const { Panel } = Collapse
const { Option } = Select

const Filters = observer(({ setShowFilters }) => {
  const { ProductsStore } = useStore()

  const initialState = {
    brand: '',
    manufactur: '',
    packing: '',
    price: [0, 500]
  }
  const [state, setState] = useState({ ...initialState })

  useEffect(() => {
    console.log("🚀 ~ file: Filters.js:24 ~ Filters ~ state:", state)
  }, [state])

  const handleChangeSorter = value => {
    ProductsStore.sortProducts(value)
  }

  const onChangePrice = value => {
    setState((prev) => ({ ...prev, price: [value[0], value[1]] }))
    ProductsStore.filterByPrice(value)
  }

  const onChange = value => {
    const { checked, dataTagname, itemValue, name } = value.target

    setState((prev) => ({ ...prev, [dataTagname]: itemValue }))
    if (checked) setState((prev) => ({ ...prev, [dataTagname]: '' }))

    // setState((prev) => ({ ...prev, [dataTagname]: [...prev[dataTagname], itemValue] }))
    // if (checked) setState((prev) => ({
    //   ...prev,
    //   [dataTagname]: state[dataTagname].filter((item) => item !== itemValue)
    // }))

    if (dataTagname === 'brand') ProductsStore.filterByBrand(itemValue)
    if (dataTagname === 'manufactur') ProductsStore.filterByManufactur(itemValue)
    if (dataTagname === 'packing') ProductsStore.filterByPacking(itemValue)
    if (checked === false) ProductsStore.resetFilters()
  }

  function callback(key) {
    console.log(key)
  }

  const onSubmit = () => {
    console.log('onSubmit')
    // setShowFilters(false)
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
        <Option value="brand">Сортировка по брендам</Option>
      </Select>

      <h3 className={styles.subtitle}>Цена</h3>
      <Slider
        range
        defaultValue={[10, 500]}
        min={10}
        max={500}
        onChange={onChangePrice}
      />
      <p className={styles.text}>от - {state.price[0]} грн</p>
      <p className={styles.text}>до - {state.price[1]} грн</p>
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
                onChange={onChange}
                name={item}
                key={item}
                dataTagname="brand"
                itemValue={item}
              >
                {item}
              </Checkbox>
            ))}
          </ul>
        </Panel>
        <Panel header="Страна производства" key="2">
          <ul className={styles.checkboxList}>
            {ProductsStore.manufactur.map(item => (
              <Checkbox
                className={styles.item}
                onChange={onChange}
                name={item}
                key={item}
                dataTagname="manufactur"
                itemValue={item}
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
                onChange={onChange}
                name={item}
                key={item}
                dataTagname="packing"
                itemValue={item}
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
