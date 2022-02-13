import React, { useState } from 'react'
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'

import styles from './styles.module.scss'
import { Slider, Switch, Checkbox, Collapse } from 'antd'
const { Panel } = Collapse

const SideBarFilters = observer(() => {
  const { ProductsStore } = useStore()
  const [from, setFrom] = useState(50)
  const [to, setTo] = useState(300)

  const onChange = value => {
    setFrom(value[0])
    setTo(value[1])
    console.log(value)
  }
  const changeManufactured = value => {
       console.log(value)
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

  return (
    <div className={styles.sideBarFilters}>
      <h2 className={styles.title}>Фильтр</h2>
      <h3 className={styles.subtitle}>Цена</h3>
      <Slider
        range
        defaultValue={[50, 300]}
        min={10}
        max={500}
        onChange={onChange}
      />
      <p className={styles.text}>от - {from} грн</p>
      <p className={styles.text}>до - {to} грн</p>
      <Collapse defaultActiveKey={['1']} ghost={true} onChange={callback}>
        <Panel header="Производитель" key="1">
          <ul className={styles.checkboxList}>
            {ProductsStore.manufactured.map(item => (
              <Checkbox className={styles.item} onChange={changeManufactured} key={item}>
                {item}
              </Checkbox>
            ))}
          </ul>
        </Panel>
        <Panel header="Страна производства" key="2">
          <ul className={styles.checkboxList}>
            {ProductsStore.country.map(item => (
              <Checkbox className={styles.item} onChange={changeCountry} key={item}>
                {item}
              </Checkbox>
            ))}
          </ul>
        </Panel>
        <Panel header="Фасовка" key="3">
          <ul className={styles.checkboxList}>
            {ProductsStore.packing.map(item => (
              <Checkbox className={styles.item} onChange={changePacking} key={item}>
                {item}
              </Checkbox>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </div>
  )
})

export default SideBarFilters