'use client'

import React, {FC, MouseEvent, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { Product } from '@/@types/product'
import { useRouter } from 'next/navigation'
import CarouselImageProduit from './CarouselImageProduit'
import {BsExclamationCircleFill} from 'react-icons/bs'
import {PiCheckFatFill} from 'react-icons/pi'
import { roboto } from '../../../../fonts/roboto'
import { lato } from '../../../../fonts/lato'
import BackButton from '@/components/sharedUI/BackButton'
import { convertPriceToString } from '@/utils/convertPriceToString'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import CartModal from '@/components/sharedUI/CartModal'
import { mapProductToSingleProductInCart } from '@/utils/mapProductToSingleProductInCart'
import { addProductInCart } from '@/store/slices/panierSlice'
import { findProductIncart } from '@/utils/findProductInCart'

type ProductDetailsProps = {
  product: Product
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const [qty, setQty] = useState(0)
  const [localStock, setLocalStock] = useState<number>(0)
  const [couleur, setCouleur] = useState<string>('beige')
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const { panier } = useSelector((state: RootState)=> state.panier)

  const router = useRouter()
  const dispatch = useDispatch()


  useEffect(()=> {
    if(product.stock>0){
      setQty(1)
      setLocalStock(product.stock)

    }
  }, [])

  useEffect(()=> {
    if(panier){
      const singleProduct = findProductIncart(panier, product._id)
      
      if(singleProduct){
        setLocalStock(product.stock - singleProduct.qty)
      }
    }
  }, [product.stock, panier])



  const displayOpt = (nombre: number)=>{
    let text = []
    for(let i=0; i<nombre; i++){
      text.push(i+1)
    }
    return text
  }

  const addCartHandler = ()=> {
    dispatch(addProductInCart({productInCart: mapProductToSingleProductInCart(product, qty, couleur), product}))
    setLocalStock(product.stock - qty)
    setModalIsOpen(true)
  }

  return (
    <main className='min-h-screen'>
      <CartModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} infoProduct={mapProductToSingleProductInCart(product, qty, couleur)} />
      <BackButton href='produits' message='Retour boutique' />
      <div className='mx-auto mt-20 mb-0 flex justify-center w-1200px'>
        <CarouselImageProduit images={product.images}/>
        <div className='w-full mt-2.5 ml-12 flex'>
          <div className='w-96 mr-5'>
            <h3 className={`text-2xl font-bold text-left mt-0 px-3 py-1.5 border-oxford-blue border-2 rounded-md ${lato.className}`} style={{fontStretch: 'condensed'}}>{product.nom}</h3>
            <p className={`text-lg p-1 ${lato.className}`}>Catégorie : <span className='italic font-bold'>{product.category}</span></p>
            <p className={`pb-5 pl-1 tracking-wide border-b-2 border-platinum ${roboto.className}`}>
              {product.description}
            </p>
            {
              !product.livraison && (
                <div className='text-red'>
                  <p className='text-base font-bold p-1'>
                    <BsExclamationCircleFill/> Cette lampe est disponible. Pour des questions évidentes de fragilité et d'emballage, il est difficile d'expédier ce lampadaire par les réseaux de transport classiques. Si ce modèle vous plait, contactez moi et nous verrons ensemble quelle solution adopter pour vous livrer. En vous remerciant de votre compréhension
                  </p>
                </div>
              )
            }
            {
              product.couleurs.length>0 && (
                <div className='my-6 mx-1'>
                  <h5>Couleurs d'abat-jour disponibles</h5>
                  <div className='flex'>  
                    { 
                      product.couleurs.map((color, index) => 
                        <div 
                          style={{boxShadow: "-3px 5px 10px 0 grey"}}
                          key={index} 
                          id={color} 
                          className={
                            `relative 
                            w-8 
                            h-8 
                            rounded-full 
                            border-2
                            border-white 
                            border-double 
                            cursor-pointer
                            my-0 
                            mx-2.5 
                            ${color === 'beige'? 'bg-beige': color==="blanc" ? 'bg-white' : color === 'bleu-clair' ? 'bg-bleu-clair':'bg-black'}`
                          }
                          onClick={(event: MouseEvent<HTMLElement>)=>{setCouleur(event.currentTarget.id)}} 
                        >
                        {
                          color===couleur && 
                          <PiCheckFatFill size={20} className='absolute left-1 top-1'/>
                        }
                        </div>
                      ) 
                    }
                  </div>
                </div>
              )
            }
          </div>
          <div className='max-h-96 w-[400px] py-2.5 px-5 border-2 border-platinum rounded-md'>
            <div className='flex justify-between my-2.5 mx-0 p-2.5 leading-4 border-b border-platinum'>
              <h5 className={lato.className}>Prix :</h5>
              <div className='font-bold text-lg'>{convertPriceToString(product.prix)} €</div>
            </div>
            <div className='flex justify-between my-2.5 mx-0 p-2.5 leading-4 border-b border-platinum'>
              <h5 className={lato.className}>Livraison :</h5>
              <div className={product.livraison? 'livraison' : "livraison red"}>{product.livraison ? "Oui" : "Me contacter"}</div>
            </div>
            <div className='flex justify-between my-2.5 mx-0 p-2.5 leading-4 border-b border-platinum'>
              <h5 className={lato.className}>Disponibilité :</h5>
              <div className={localStock>0? 'text-lg' : "text-lg text-red font-bold"}>{localStock>0 ? "Oui" : "Rupture de stock"}</div>
            </div>
            {
              localStock>0 && (
              <>
                <div className='flex justify-between my-2.5 mx-0 p-2.5 leading-4 border-b border-platinum'>
                  <h5 className={lato.className}>Quantité :</h5>
                  <select disabled={product.stock<1} name='quantity' value={qty} onChange={(event)=>setQty(+event.target.value)}>
                    {
                      displayOpt(localStock).map((item, index) => <option key={index} value={item}>{item}</option>)
                    }
                  </select>
                </div>
                <div className='mt-8'>
                  {
                    product.livraison || localStock>0? 
                    <button className='mb-0 btn btn-block btn-primary'onClick={()=>addCartHandler()} >Ajouter au panier</button> 
                    : 
                    <button className='mb-0 btn btn-block btn-warning' onClick={()=>router.push('/contact')}>Me contacter</button>
                  } 
                </div>
              </>
              )
            }  
          </div> 
        </div>
      </div>
    </main>
  )
}

export default ProductDetails
