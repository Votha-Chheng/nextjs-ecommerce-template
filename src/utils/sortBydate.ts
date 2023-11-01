import { Billet } from "@/@types/billet"
import { Product } from "@/@types/product"

export const sortByDate = (array: Product[]|Billet[], newerOrOlder: 'older'|'newer')=> {
  if(newerOrOlder==='newer'){
    return array.sort((a: Product|Billet, b: Product|Billet) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
  } else {
    return array.sort((a: Product|Billet, b: Product|Billet) =>Date.parse(a.createdAt) - Date.parse(b.createdAt))
  }
}