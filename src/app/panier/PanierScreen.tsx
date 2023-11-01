'use client'

import React, { FC, useLayoutEffect, useState } from 'react'
import { mitr } from '../../../fonts/mitr'
import { HiShoppingCart } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { roboto } from '../../../fonts/roboto'
import BackButton from '@/components/sharedUI/BackButton'
import Separateur from '@/components/sharedUI/Separateur'
import CartItems from './CartItems'

const PanierScreen: FC = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { panier } = useSelector((state: RootState)=> state.panier)

  useLayoutEffect(()=> {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <main>
      <h2 className={`text-center mt-5 mb-24 ${mitr.className}`}>Panier</h2>
      <Separateur/>
      {
        panier && panier.length <1
        ? 
        <div className='flex flex-col gap-24 h-96 w-4/5 mt-24 mb-16 mx-auto text-center items-center'>
          <div className='flex items-center gap-2'>
            <HiShoppingCart size={25} color='#c4a77d' />
            <span className={`text-2xl ${roboto.className}`} >Votre panier est vide.</span>
          </div>
          <BackButton message='Retour à la boutique' href='produits' position='block' />
        </div>
        :
        <CartItems/>
        
      }
    </main>
  )
}

export default PanierScreen
