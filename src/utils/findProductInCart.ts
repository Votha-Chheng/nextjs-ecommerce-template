import { Cart, SingleProductInCart } from "@/@types/cart"

export const findProductIncart = (panier: Cart, id: string): SingleProductInCart|undefined=> {
  if(panier){
    return panier.find((prod: SingleProductInCart)=> prod.productId === id)

  }
}