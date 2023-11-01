import { SingleProductInCart } from '@/@types/cart'
import React, { Dispatch, FC, SetStateAction } from 'react'
import Modal from 'react-modal'
import ImageFormat from './ImageFormat'
import { convertPriceToString } from '@/utils/convertPriceToString'
import { lato } from '../../../fonts/lato'
import { roboto } from '../../../fonts/roboto'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { oswald } from '../../../fonts/oswald'

type CartModalProps = {
  modalIsOpen: boolean
  setModalIsOpen: Dispatch<SetStateAction<boolean>>
  infoProduct: SingleProductInCart
}

const CartModal: FC<CartModalProps> = ({ modalIsOpen, infoProduct, setModalIsOpen }) => {

  const router = useRouter()

  const continueShopping = ()=> {
    router.push('/produits')
    setModalIsOpen(false)
  }

  const toCart = ()=> {
    router.push('/panier')
    setModalIsOpen(false)
  }

  return (
    <Modal
    isOpen={modalIsOpen}
    shouldCloseOnOverlayClick={true}
    onRequestClose={()=> setModalIsOpen(false)}
    onAfterOpen={() => document.body.style.overflow = 'hidden'}
    onAfterClose={() => document.body.style.overflow = 'auto'}
    ariaHideApp={false}
    style={{
      overlay: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        zIndex: 10000
      },
      content: {
        margin: 'auto',
        height: '500px',
        width: '600px',
        overflow: "hidden",
        justifyContent: 'center',
        borderRadius: '20px',
        border: '2.5px solid #C4A77D',
      }
    }}
  >
    <section>
      <header className='bg-light-green w-full h-40 flex justify-center items-center mb-10 gap-2 rounded-md'>
        <h3 className={`font-bold ${lato.className}`}>Cet article a été ajouté au panier </h3>
        <div className='pb-2'>
          <GiCheckMark size={24} className='text-green-700'/>
        </div>
      </header>
      <article className='w-[600px] h-[100px] flex'>
        <div className='h-[100px] overflow-hidden w-[100px]'>
          <ImageFormat imageUrl={infoProduct.image.url} aspectRatio={infoProduct.image.aspectRatio} size='s' translation={true} frameDimensions={{width: 100, height: 100}} />
        </div>
        <div className={`ml-2 px-2.5 self-center border-l border-l-platinum w-[165px] font-bold ${roboto.className}`}>
          {infoProduct.nom}
        </div>
        <div className={`border-l px-2.5 pt-2.5 border-l-platinum w-[100px]`}>
          <p className={`font-bold mb-1 text-center ${roboto.className}`}>Quantité :</p>
          <p className={`font-bold text-center ${roboto.className}`}>{infoProduct.qty}</p> 
        </div>
        <div className='border-x border-x-platinum px-2.5 pt-2.5 w-[183px]'>
          <p className={`font-bold mb-1 text-left ${roboto.className}`}>Prix :</p>
          <p className={`text-right tracking-wide ${oswald.className}`}>{infoProduct.qty} x {infoProduct.prix} € = <span className='font-bold rounded-md bg-light-green p-1'>{convertPriceToString(infoProduct.qty*infoProduct.prix)} €</span></p>  
        </div>      
      </article>
      <div className='mt-5'>
        <button type="button" onClick={()=> continueShopping()} className='btn btn-block btn-primary my-1 w-full'>Continuer mes achats</button>
        <Link href='/panier'>
          <button type="button" onClick={()=> toCart()} className='btn btn-block btn-success my-1 w-full'>Accéder aux panier</button>
        </Link>
      </div>
    </section>
  </Modal> 
  )
}

export default CartModal