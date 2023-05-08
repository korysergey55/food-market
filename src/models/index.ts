export interface IсategoryJSON {
  name: string
  img: string
  route: string
}

export interface IProduct {
  id: string
  category: string
  subcategory: string
  name: string
  description: string
  brand: string
  weight: string
  manufactur: string
  fullDescription: string
  AdditionalInformation: string
  Reviews: string
  isSale: string
  hot: string
  price: number
  image: string
  images: string[]
  qantity: number
}
