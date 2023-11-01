'use client'

import Link from 'next/link'
import React, { FC, useState } from 'react'
import { Product } from '@/@types/product'
import { lato } from '../../../fonts/lato'
import { oswald } from '../../../fonts/oswald'
import { scrollToTop } from '@/utils/scrollToTop'
import ImageFormat from '../sharedUI/ImageFormat'
import { convertPriceToString } from '@/utils/convertPriceToString'
import CartModal from '../sharedUI/CartModal'
import { mapProductToSingleProductInCart } from '../../utils/mapProductToSingleProductInCart'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { addProductInCart } from '@/store/slices/panierSlice'
import { setPanierInLocalStorage } from '@/utils/accessLocalStorage'
import { useRouter } from 'next/navigation'

type CardHomeProps = {
  product: Product
}

const CardHome: FC<CardHomeProps> = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const { panier } = useSelector((state: RootState)=> state.panier)

  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const infoProduct = mapProductToSingleProductInCart(product, 1, product.couleurs[0] ?? null)

  const addCartHandler = ()=> {
    dispatch(addProductInCart({productInCart: infoProduct, product}))
    setModalIsOpen(true)
    setPanierInLocalStorage(panier)
  }

  return (
    <>
      <CartModal modalIsOpen={modalIsOpen} infoProduct={infoProduct} setModalIsOpen={setModalIsOpen} />
      <div className='w-96 z-50 h-[520px] bg-white rounded-lg' >  
        <div className='h-[380px] pt-4'>
          <Link href={`/produits/${product._id}`} className='no-underline h-full' onClick={()=> scrollToTop()} >
            <ImageFormat imageUrl={product.images[0].url} aspectRatio={product.images[0].aspectRatio} size='m' />
            <div className="py-3.5 px-5">
              <h3 className="text-center text-xl leading-10 text-oxford-blue">{product.nom}</h3>
            </div>
          </Link>
        </div>   
        <h4 className="text-right pr-9 pt-9 font-bold mr-5 mb-3">
          <span>{convertPriceToString(product.prix)} €</span>
        </h4>
        <div className="w-11/12 flex justify-between m-auto gap-2">
          <Link href={`/produits/${product._id}`} className='basis-1/2 text-center text-antique-white hover:text-charcoal font-bold' onClick={()=> scrollToTop()}>
            <button className={`p-2 text-sm bg-charcoal w-full border border-charcoal hover:bg-antique-white transition-all duration-300 ease-out uppercase tracking-widest rounded-md ${lato.className}`}>
              Détails
            </button>
          </Link>
          <div className='w-52 basis-1/2' >
            {
              product.stock <=0 
              ? <div className={`p-2 text-sm bg-red w-full border text-center border-red text-antique-white uppercase tracking-wider rounded-md ${oswald.className}`}>Rupture de stock</div> 
              : product.livraison 
              ? 
              <button 
                className={`p-2 text-sm w-full rounded-md bg-orange border border-solid border-orange hover:bg-antique-white hover:text-orange hover:border-orange transition-all duration-300 ease-out font-bold uppercase ${lato.className}`}
                onClick={()=>addCartHandler()}
              >
                Ajouter au panier
              </button>
              : 
              <button 
                className={`p-2 text-sm bg-twitter-blue w-full border border-twitter-blue hover:bg-antique-white transition-all duration-300 ease-out uppercase tracking-widest rounded-md ${lato.className}`} 
                onClick={()=>router.push('/contact')}
              >
                Me contacter
              </button>
            }
          </div>
          
        </div>
        <div className='background'>
        </div>
      </div>
    </>
  )
}

export default CardHome
