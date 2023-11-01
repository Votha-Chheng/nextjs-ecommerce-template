import { ImageProduct } from "./imageProduct"

export type Product = {
  _id: string
  nom : string,
  category : string,
  prix : number,
  stock : number,
  description : string,
  couleurs : string[],
  images : ImageProduct[],
  livraison : boolean,
  createdAt: string,
  updatedAt: string
}