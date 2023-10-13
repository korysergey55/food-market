import React, { useState, useEffect } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'
import { Slider, Button, Checkbox, Collapse, Select } from 'antd'

const { Panel } = Collapse
const { Option } = Select

const Filters = observer(({ setShowFilters }) => {
  const { ProductsStore } = useStore()
  const { t } = useTranslation(['translation', 'common_en'])

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
      <h2 className={styles.title}>{t('filters.filter')}</h2>
      <Select
        className={styles.select}
        defaultValue="name"
        size="large"
        style={{ height: 44 }}
        onChange={handleChangeSorter}
      >
        <Option value="name">{t('filters.sort_by_name')}</Option>
        <Option value="price">{t('filters.sort_by_price')}</Option>
        <Option value="brand">{t('filters.sort_by_brand')}</Option>
      </Select>

      <h3 className={styles.subtitle}>{t('filters.price')}</h3>
      <Slider
        range
        defaultValue={[10, 500]}
        min={10}
        max={500}
        onChange={onChangePrice}
      />
      <p className={styles.text}>{t('filters.from')} - {state.price[0]} {t('filters.uan')}</p>
      <p className={styles.text}>{t('filters.to')} - {state.price[1]} {t('filters.uan')}</p>
      <Collapse
        className={styles.collapse}
        defaultActiveKey={['1']}
        ghost={true}
        onChange={callback}
      >
        <Panel header={t('filters.brands')} key="1">
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
        <Panel header={t("filters.country_of_manufacture")} key="2">
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
        <Panel header={t("packaging")} key="3">
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
        {t('apply')}
      </Button>
    </div>
  )
})

export default Filters
