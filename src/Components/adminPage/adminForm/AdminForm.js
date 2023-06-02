import { useState, useEffect } from "react";
import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { v4 as uuidv4 } from 'uuid';

import styles from './styles.module.scss'
import { Button, Checkbox, Form, Input, Select, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
const { TextArea } = Input;

const AdminForm = observer(() => {
  const initialState = {
    id: uuidv4(),
    name: '',
    category: '',
    subcategory: '',
    description: '',
    brand: '',
    weight: 0,
    manufactur: '',
    fullDescription: '',
    AdditionalInformation: '',
    Reviews: '',
    price: 0,
    discount: '',
    isSale: false,
    image: {},
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
  const [fileList, setFileList] = useState([]);
  const [fileListArr, setFileListArr] = useState([
    //   {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);

  useEffect(() => {
    // let formData = new FormData();
    // fileList && fileList[0] && fileList[0].originFileObj && formData.append("file", fileList[0].originFileObj);
    // console.log(fileList?.[0]?.originFileObj)
  }, [fileList])

  const onChangeUpload: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    setFileList(newFileList);

    const src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(newFileList?.[0]?.originFileObj);
      reader.onload = () => resolve(reader.result);
    });

    setState((prev) => ({
      ...prev, image: src
    }))

    // setState((prev) => ({
    //   ...prev, image: newFileList?.[0]?.originFileObj
    // }))

    // let formData = new FormData();
    // formData.append("file", newFileList[0].originFileObj);
    // setState((prev) => ({ ...prev, image: formData }))
    // console.log(formData.get("file"))

    // ProductsStore.setProductImageAction(formData)
  };

  const onChangeUploadArr: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    setFileListArr(newFileList);

    let newSrcArr = []
    for (const item of newFileList) {
      const src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(newFileList?.[newFileList.indexOf(item)]?.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
      newSrcArr.push(src)
    }

    setState((prev) => ({
      ...prev, images: [...newSrcArr]
    }))
  };

  const onPreview = async (file: UploadFile) => {
    console.log(file)
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onChange = (evt) => {
    const { value, name, type, checked } = evt.target
    if (type === "checkbox") {
      setState((prev) => ({ ...prev, [name]: checked }));
      return
    }
    if (name === 'price' || name === 'weight') {
      setState((prev) => ({ ...prev, [name]: Number(value) }))
      return
    }
    setState((prev) => ({ ...prev, [name]: value }))
    console.log(state)
  }

  const onChangeCategory = (value) => {
    setState((prev) => ({ ...prev, category: value }))
  }


  const onFinish = (values) => {
    // evt.preventDefault();
    ProductsStore.setNewProductAction(state)
    ProductsStore.createNewAdvAPI(state.category, state)
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
        <Input placeholder="Please input your Product weight" type='number' onChange={onChange} name="weight" />
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
        label="Main image"
        name="image"
        rules={[{ required: false, message: 'Please input your Product Main image!' }]}
      >
        <ImgCrop rotationSlider>
          <Upload
            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChangeUpload}
            onPreview={onPreview}
          >
            {fileList.length < 1 && '+ Upload'}
          </Upload>
        </ImgCrop>
      </Form.Item>

      <Form.Item
        label="images"
        name="images"
        rules={[{ required: false, message: 'Please input your Product images!' }]}
      >
        <ImgCrop rotationSlider>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileListArr}
            onChange={onChangeUploadArr}
            onPreview={onPreview}
          >
            {fileListArr.length < 5 && '+ Upload'}
          </Upload>
        </ImgCrop>
      </Form.Item>

      <Form.Item name="Is sale" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox name="isSale" onChange={onChange}>Is sale</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Create product
        </Button>
      </Form.Item>
    </Form >
  );
})

export default AdminForm;