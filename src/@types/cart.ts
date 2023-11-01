import { ImageProduct } from "./imageProduct";

export type SingleProductInCart = {
  productId: string
  nom : string,
  category: string,
  qty : number,
  stock: number,
  image : ImageProduct,
  prix : number,
  couleur?: string
}

export type Cart = SingleProductInCart[]
  