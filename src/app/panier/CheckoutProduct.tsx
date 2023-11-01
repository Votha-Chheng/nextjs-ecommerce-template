'use client'

import { SingleProductInCart } from '@/@types/cart'
import ImageFormat from '@/components/sharedUI/ImageFormat'
import { addProductInCart, changeQtyInCart, removeProductFromCart } from '@/store/slices/panierSlice'
import { AppDispatch, RootState } from '@/store/store'
import { convertPriceToString } from '@/utils/convertPriceToString'
import { getArrayOfNumbers } from '@/utils/getArrayOfNumbers'
import Link from 'next/link'
import React, { FC, useEffect, useState, ChangeEvent } from 'react'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { poppins } from '../../../fonts/poppins'
import { mapProductToSingleProductInCart } from '@/utils/mapProductToSingleProductInCart'
import { findProductInDb } from '@/utils/findProductInDb'

type CheckoutProductProps = {
  productInCart: SingleProductInCart
}

const CheckoutProduct: FC<CheckoutProductProps> = ({ productInCart }) => {
  const [localStock, setLocalStock] = useState<number>(0)
  const [qty, setQty] = useState<number>(0)
  const { panier } = useSelector((state: RootState)=> state.panier)
  const { allProducts } = useSelector((state: RootState)=> state.filters)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=> {
    setLocalStock(productInCart.stock)
    if(panier){
      setQty(productInCart.qty)
    }
  }, [])
  
  const removeProduct = (productId: string)=> {
    dispatch(removeProductFromCart(productId))
  }

  const changeQty = (event: ChangeEvent<HTMLSelectElement>)=> {
    setQty(+event.currentTarget.value)
    dispatch(changeQtyInCart({productInCart, newQty: +event.currentTarget.value}))
  }

  return (
    <div className="flex justify-between gap-[5px] w-[800px] h-[120px] my-2 mx-0 items-center border border-silver">  
      <div className='my-auto h-[100px] w-[100px] overflow-hidden mx-2' >
        <ImageFormat imageUrl={productInCart.image.url} aspectRatio={productInCart.image.aspectRatio} size='s' translation={true} frameDimensions={{width: 100, height: 100}} />
      </div> 
      <div className='w-[150px] px-2 border-x border-x-silver mr-2.5'>
        <Link className='no-underline' href={`/produits/${productInCart.productId}`}>
          <span className='font-bold text-black'>
            {productInCart.nom}
          </span>
        </Link>
      </div>
      <div className='w-[110px] py-auto px-1 my-auto mr-0 border-r border-r-silver'>
        <div className='font-bold text-left text-black'>Couleur : </div><div className='text-right'>{productInCart.couleur}</div>
      </div>
      <div className='my-auto ml-5 mr-0 py-auto px-2.5 w-[170px] border-r border-r-silver relative'>
        <span className='font-bold text-black'>Prix : </span><span className={`${poppins.className}`}>{convertPriceToString(productInCart.prix*+qty)} €</span>
      </div>
      <div className='border-r-0 w-[100px]'>
        <label className='font-bold text-black'>Quantité</label> 
        <select value={qty} onChange={(event: ChangeEvent<HTMLSelectElement>) => changeQty(event)} >
          {
            getArrayOfNumbers(localStock).map((x: number)=> (
              <option key={x+1} value={x+1}>{x+1}</option>
            ))
          }
        </select>
      </div>
      <div className=' justify-center my-auto ml-5 mr-0 py-auto px-2.5 w-[150px] border-l border-l-silver relative'>
        <button className='bg-red rounded-md items-center text-white justify-center flex gap-2 w-[130px] p-2' onClick={()=>removeProduct(productInCart.productId)} >
          <span>Retirer</span><span><IoMdTrash size={20}/></span>
        </button>    
      </div>
    </div>
  )
}

export default CheckoutProduct