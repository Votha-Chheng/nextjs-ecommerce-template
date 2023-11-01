import { Product } from "@/@types/product";

export const latestProducts = (products: Product[]) : Product[]=> {
  const temp = products.reverse()

  return [temp[0], temp[1], temp[2], temp[3]]
}