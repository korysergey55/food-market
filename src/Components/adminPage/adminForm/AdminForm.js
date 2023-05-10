import { useState } from "react";
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { v4 as uuidv4 } from 'uuid';

import { createNewAdvApi } from "../../../services/api";

import styles from './styles.module.scss'
import { Button, Checkbox, Form, Input, Select } from 'antd';
const { TextArea } = Input;

const AdminForm = observer(() => {
  const initialState = {
    id: uuidv4(),
    name: '',
    category: '',
    subcategory: '',
    description: '',
    brand: '',
    weight: '',
    manufactur: '',
    fullDescription: '',
    AdditionalInformation: '',
    Reviews: '',
    price: 0,
    discount: '',
    isSale: false,
    image: '',
    images: [],
    qantity: 1,
  }
  const { ProductsStore } = useStore()
  const [state, setState] = useState(initialState);
  const [form] = Form.useForm();
  const сategory = [
    { value: 'Кофе', label: 'Кофе' },
    { value: 'Сыры и колбасы', label: 'Сыры и колбасы' },
    { value: 'Сладости', label: 'Сладости' },
    { value: 'Лединцы и конфеты', label: 'Лединцы и конфеты' },
    { value: 'Макароны', label: 'Макароны' },
    { value: 'Консерви и паштеты', label: 'Консерви и паштеты' },
    { value: 'Соусы', label: 'Соусы' },
    { value: 'Витамины', label: 'Витамины' },
    { value: 'Разное', label: 'Разное' },
    { value: 'Новинки', label: 'Новинки' },
  ]

  const onChange = (evt) => {
    const { value, name, type, checked } = evt.target
    if (type === "checkbox") {
      setState((prev) => ({ ...prev, [name]: checked }));
      return
    }
    if (name === 'price') {
      setState((prev) => ({ ...prev, [name]: Number(value) }))
      return
    }
    setState((prev) => ({ ...prev, [name]: value }))
  }

  const onChangeCategory = (value) => {
    setState((prev) => ({ ...prev, category: value }))
  }


  const onFinish = (values) => {
    // evt.preventDefault();
    ProductsStore.setNewProductAction(state)
    createNewAdvApi(state.category, state)
    // setState({ ...initialState });
    // form.resetFields()
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles.form}
      form={form}
    >
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: 'Please input your Product name!' }]}
      >
        <Input placeholder="Please input your Product name" onChange={onChange} name="name" />
      </Form.Item>

      <Form.Item
        label="category"
        name="category"
        rules={[{ required: true, message: 'Please input your Product category!' }]}
      >
        <Select
          style={{ width: '100%' }}
          placeholder="Please input your Product category"
          rules={[{ required: true, message: 'Please input your Product category!' }]}
          options={сategory}
          onChange={onChangeCategory}
          name="category" />
      </Form.Item>

      <Form.Item
        label="subcategory"
        name="subcategory"
        rules={[{ required: false, message: 'Please input your Product subcategory!' }]}
      >
        <Input placeholder="Please input your Product subcategory" onChange={onChange} name="subcategory" />
      </Form.Item>

      <Form.Item
        label="short-description"
        name="description"
        rules={[{ required: true, message: 'Please input your Product short-description!' }]}
      >
        <Input placeholder="Please input your Product short-description" onChange={onChange} name="description" />
      </Form.Item>

      <Form.Item
        label="brand"
        name="brand"
        rules={[{ required: true, message: 'Please input your Product brand!' }]}
      >
        <Input placeholder="Please input your Product brand" onChange={onChange} name="brand" />
      </Form.Item>

      <Form.Item
        label="weight"
        name="weight"
        rules={[{ required: true, message: 'Please input your Product weight!' }]}
      >
        <Input placeholder="Please input your Product weight" onChange={onChange} name="weight" />
      </Form.Item>

      <Form.Item
        label="manufactur"
        name="manufactur"
        rules={[{ required: true, message: 'Please input your Product manufacture!' }]}
      >
        <Input placeholder="Please input your Product manufacture" onChange={onChange} name="manufactur" />
      </Form.Item>

      <Form.Item
        label="full description"
        name="fullDescription"
        rules={[{ required: true, message: 'Please input your Product full description!' }]}
      >
        <TextArea
          showCount
          maxLength={100}
          style={{ height: 120, marginBottom: 24 }}
          onChange={onChange}
          placeholder="Please input your Product full description!"
          name="fullDescription"
        />
      </Form.Item>

      <Form.Item
        label="Additional Information"
        name="Additional Information"
        rules={[{ required: false, message: 'Please input your Product Additional Information!' }]}
      >
        <Input placeholder="Please input your Product Additional Information"
          onChange={onChange}
          name="AdditionalInformation" />
      </Form.Item>

      <Form.Item
        label="Reviews"
        name="Reviews"
        rules={[{ required: true, message: 'Please input your Product Reviews!' }]}
      >
        <Input placeholder="Please input your Product Reviews"
          onChange={onChange}
          name="Reviews" />
      </Form.Item>

      <Form.Item
        label="price"
        name="price"
        rules={[{ required: true, message: 'Please input your Product price!' }]}
      >
        <Input placeholder="Please input your Product price"
          onChange={onChange}
          name="price"
          type='number' />
      </Form.Item>

      <Form.Item
        label="discount"
        name="discount"
        rules={[{ required: false, message: 'Please input your Product discount %!' }]}
      >
        <Input placeholder="Please input your Product discount %"
          onChange={onChange}
          name="discount"
          type="number" />
      </Form.Item>

      <Form.Item
        label="image"
        name="image"
        rules={[{ required: false, message: 'Please input your Product image!' }]}
      >
        <Input placeholder="Please input your Product image"
          onChange={onChange}
          name="image" />
      </Form.Item>

      <Form.Item name="Is sale" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox name="isSale" onChange={onChange}>Is sale</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create product
        </Button>
      </Form.Item>
    </Form>
  );
})

export default AdminForm;