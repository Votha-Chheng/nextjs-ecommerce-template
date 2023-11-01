import { Product } from "@/@types/product";

export const findProductInDb = (products: Product[], id: string): Product|undefined => {
  return products.find((product: Product)=> product._id === id)
}