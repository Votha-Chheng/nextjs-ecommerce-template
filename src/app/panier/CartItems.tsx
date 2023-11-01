'use client'

import { SingleProductInCart } from '@/@types/cart'
import { RootState } from '@/store/store'
import { convertPriceToString } from '@/utils/convertPriceToString'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from './CheckoutProduct'

const CartItems: FC = () => {
  const { panier } = useSelector((state: RootState)=> state.panier)

  const proceedCheckoutHandler = ()=> {

  }
  
  return (
    <section className='flex justify-around'>
      <div className="flex flex-col">
        {
          panier && panier.map((productInCart: SingleProductInCart, index: number)=>(
            <div key={index}>
              <CheckoutProduct productInCart={productInCart} />
            </div>
          ))
        }
      </div>  

      <div className='p-5 border-r border-r-silver'>
        <h4 className='text-center pb-2.5'>Total des achats</h4>
        <h5 className='text-center pb-2.5 border-b border-b-silver'>({panier.reduce((acc, item)=> acc + item.qty, 0)===1 ? '1 produit': panier.reduce((acc, item)=> acc + item.qty, 0) + ' produits'})</h5>
        <div className='prix-total'>
          <h4 className='text-right mt-7 pb-2.5'>{convertPriceToString(panier.reduce((acc, item)=> acc + item.qty*item.prix, 0))} €</h4>
          <div className='flex justify-between'>
            <div>Frais de port</div>
            <h5 className='text-center pb-2.5 border-b-silver'>20,00 €</h5>
          </div>
        </div>
        <div className='font-bold'>Total de la commande :</div>
        <h4 className='pb-2.5 w-36 my-2.5 mr-0 ml-auto text-right text-green-700 p-2.5 bg-[#d7eadb]'>{convertPriceToString(panier.reduce((acc, item)=> acc + item.qty*item.prix, 0)+20)} €</h4>
        <div className='mt-5 mx-auto mb-0 border-t border-t-silver'>
          <button className='btn btn-block btn-primary checkout' onClick={()=>proceedCheckoutHandler()} >Valider la commande</button>
        </div>
      </div> 
    </section>     
  )
}

export default CartItems