import { Cart, SingleProductInCart } from '@/@types/cart'
import { Product } from '@/@types/product'
import { getObjectByKeyInLocalStorage, setPanierInLocalStorage } from '@/utils/accessLocalStorage'
import {  PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PanierState {
  panier : Cart
}

const initialState: PanierState = {
  panier: getObjectByKeyInLocalStorage('panier')
}

export const PanierSlice = createSlice({
  name: 'panier',
  initialState,
  reducers: {
    setUpCart : (state, action: PayloadAction<Cart>)=> {
      state.panier = action.payload
    },
    addProductInCart: (state, action: PayloadAction<{productInCart: SingleProductInCart, product: Product}>)=> {
      const productInCart = state.panier.find((prod: SingleProductInCart)=> prod.productId === action.payload.product._id)

      if(productInCart && productInCart.stock >= productInCart.qty){
        const newProduct = {...productInCart, qty:( productInCart.qty + action.payload.productInCart.qty > action.payload.product.stock ? action.payload.product.stock : productInCart.qty + action.payload.productInCart.qty)}
        const copy = [...state.panier]
        const panier = copy.map((prod: SingleProductInCart)=> prod.productId === action.payload.product._id ? newProduct : prod)
        state.panier = panier as Cart

      } else {
        state.panier.push(action.payload.productInCart)
      }
      setPanierInLocalStorage(state.panier)

    },
    changeQtyInCart : (state, action: PayloadAction<{productInCart: SingleProductInCart, newQty: number}>)=> {
      const newProduct = {...action.payload.productInCart, qty: action.payload.newQty}
      const copy = [...state.panier]
      const panier = copy.map((prod: SingleProductInCart)=> prod.productId === action.payload.productInCart.productId ? newProduct : prod)
      state.panier = panier as Cart
      setPanierInLocalStorage(panier)

    },
    removeProductFromCart: (state, action: PayloadAction<string>)=> {
      state.panier = state.panier.filter((product: SingleProductInCart)=> product.productId !== action.payload)
      setPanierInLocalStorage(state.panier)

    }  
  }
})

export const { addProductInCart, removeProductFromCart, changeQtyInCart, setUpCart } = PanierSlice.actions

export default PanierSlice.reducer