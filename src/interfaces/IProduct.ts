export interface IProduct {
  id: number
  title: string
  description?: string
  price?: string
  store?: {
    id: number
    name: string
  }
  image_urls?: {
    thumbnail_url: string
    detail_url: string
  }
  createdAt?: string
  updatedAt?: string
  url?: string
}

export interface INewProduct {
  title: string
  description: string
  price: number
  image: string | Blob
}
