import { ImageProduct } from "./imageProduct"

export type SimplePhotoAvecLegende = {
  typeElement: 'simplePhotoAvecLegende'
  image: ImageProduct
  legende?: string
}