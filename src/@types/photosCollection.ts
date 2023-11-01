import { ImageProduct } from "./imageProduct"

export type PhotosCollection = {
  typeElement: 'photosCollection'
  photos: ImageProduct[]
  display: 'queue'|'normal'
}