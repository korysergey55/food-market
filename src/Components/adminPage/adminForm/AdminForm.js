import { useState, useEffect } from "react";

import { useStore } from '../../../storeMobx'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

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
    image: '',
    images: [],
    qantity: 1,
  }
  const { ProductsStore } = useStore()
  const { editedProduct } = ProductsStore
  const { t } = useTranslation();
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
  const [fileListArr, setFileListArr] = useState([]);

  useEffect(() => {
    if (editedProduct) {

      setState(toJS(editedProduct))

      form.setFieldsValue({
        ...editedProduct
      });
      // setFileList(editedProduct.image)
      // setFileListArr(...editedProduct.images)
    }

  }, [editedProduct])

  console.log(toJS(editedProduct))
  console.log('state', state)

  // useEffect(() => {
  //   setState((prev) => ({ ...prev, images: [...state.images, state.image] }))
  // }, [state.image])

  const onChangeUpload: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    setFileList(newFileList);

    if (newFileList.length) {
      const src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(newFileList?.[0]?.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
      console.log(src)
      setState((prev) => ({
        ...prev, image: src
      }))
    }
    //formData
    // let formData = new FormData();
    // formData.append("file", newFileList?.[0]?.originFileObj);
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
    // console.log("🚀 ~ file: AdminForm.js:106 ~ onPreview ~ file:", file)
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
  }

  const onChangeCategory = (value) => {
    setState((prev) => ({ ...prev, category: value }))
  }

  const onFinish = async (values) => {
    // evt.preventDefault();
    if (!editedProduct) {
      ProductsStore.setNewProductAction(state)
      await ProductsStore.createProductAPI(state)
    }
    ProductsStore.editProductAPI(state, editedProduct.id)
    setState({ ...initialState });
    setFileList([])
    setFileListArr([])
    form.resetFields()
    ProductsStore.resetEditedProduct()
  };

  const onFinishFailed = (errorInfo) => {

  };

  return (
    <div className={styles.formWripper}>
      <h2 className={styles.title}>{t('administrator_panel')}</h2>

      <Form
        form={form}
        name="basic"
        className={styles.form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input your Product name!' }]}
        >
          <Input
            placeholder="Please input your Product name"
            name="name"
            value={state.name}
            onChange={onChange}
          />
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
            name="category"
            value={state.category}
            onChange={onChangeCategory}
          />
        </Form.Item>

        <Form.Item
          label="subcategory"
          name="subcategory"
          rules={[{ required: false, message: 'Please input your Product subcategory!' }]}
        >
          <Input placeholder="Please input your Product subcategory"
            name="subcategory"
            value={state.subcategory}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="short-description"
          name="description"
          rules={[{ required: true, message: 'Please input your Product short-description!' }]}
        >
          <Input placeholder="Please input your Product short-description"
            name="description"
            value={state.description}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="brand"
          name="brand"
          rules={[{ required: true, message: 'Please input your Product brand!' }]}
        >
          <Input placeholder="Please input your Product brand"
            value={state.brand}
            name="brand"
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="weight"
          name="weight"
          rules={[{ required: true, message: 'Please input your Product weight!' }]}
        >
          <Input placeholder="Please input your Product weight"
            // type='number'
            name="weight"
            value={state.weight}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="manufactur"
          name="manufactur"
          rules={[{ required: true, message: 'Please input your Product manufacture!' }]}
        >
          <Input placeholder="Please input your Product manufacture"
            name="manufactur"
            value={state.manufactur}
            onChange={onChange}
          />
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
            placeholder="Please input your Product full description!"
            name="fullDescription"
            value={state.fullDescription}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="Additional Information"
          name="Additional Information"
          rules={[{ required: false, message: 'Please input your Product Additional Information!' }]}
        >
          <Input placeholder="Please input your Product Additional Information"
            name="AdditionalInformation"
            value={state.AdditionalInformation}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="Reviews"
          name="Reviews"
          rules={[{ required: true, message: 'Please input your Product Reviews!' }]}
        >
          <Input placeholder="Please input your Product Reviews"
            onChange={onChange}
            name="Reviews"
            value={state.Reviews}
          />
        </Form.Item>

        <Form.Item
          label="price"
          name="price"
          rules={[{ required: true, message: 'Please input your Product price!' }]}
        >
          <Input placeholder="Please input your Product price"
            name="price"
            value={state.price}
            type='number'
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="discount"
          name="discount"
          rules={[{ required: false, message: 'Please input your Product discount %!' }]}
        >
          <Input placeholder="Please input your Product discount %"
            name="discount"
            value={state.discount}
            type="number"
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="Main image"
          name="image"
        // rules={[{ required: true, message: 'Please input your Product Main image!' }]}
        >
          <ImgCrop rotationSlider>
            <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              value={fileList}
              onChange={onChangeUpload}
              onPreview={onPreview}
              onRemove={() => setState((prev) => ({ ...prev, image: '' }))}
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
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileListArr}
              value={fileListArr}
              onChange={onChangeUploadArr}
              onPreview={onPreview}
            >
              {fileListArr.length < 7 && '+ Upload'}
            </Upload>
          </ImgCrop>
        </Form.Item>

        <Form.Item name="Is sale" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox
            name="isSale"
            value={state.isSale}
            onChange={onChange}>
            Is sale
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit">
            {editedProduct ? 'Edit product' : 'Create product'}
          </Button>
        </Form.Item>
      </Form >
    </div>
  );
})

export default AdminForm;