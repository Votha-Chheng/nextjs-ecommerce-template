import { Cart } from "@/@types/cart";

export const calculerQtyDuPanier = (cart: Cart)=>{
  let totalQty = 0;
  for (let i = 0 ; i< cart.length; i++){
    totalQty += +cart[i].qty
  }
  return totalQty
}