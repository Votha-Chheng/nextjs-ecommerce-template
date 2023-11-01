import { Cart } from "@/@types/cart"

export const getObjectByKeyInLocalStorage = ( key: string ): Cart=> {
  if (typeof window !== 'undefined') {
    const obj = localStorage.getItem(key)

    if(obj){
      return JSON.parse(obj) as Cart
    }
  }
  return []
}

export const setPanierInLocalStorage = (panier: Cart): void=> {
  if (typeof window !== 'undefined'){
    localStorage.setItem('panier', JSON.stringify(panier))
  }
}
