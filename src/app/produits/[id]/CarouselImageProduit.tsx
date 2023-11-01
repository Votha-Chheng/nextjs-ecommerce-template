import React, {FC, useState} from 'react'
import { ImageProduct } from '@/@types/imageProduct'
import { IoMdCloseCircle } from 'react-icons/io'
import Modal from 'react-modal'
import { ImNext2, ImPrevious2 } from 'react-icons/im'
import ImageFormat from '@/components/sharedUI/ImageFormat'

type CarouselImageProduitProps = {
  images: ImageProduct[]
}

const CarouselImageProduit: FC<CarouselImageProduitProps> = ({ images }) => {

  const [indexImg, setIndexImg] = useState(0)
  const [indexModal, setIndexModal] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  return (
    <section className='min-h-full'>  
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => document.body.style.overflow = 'hidden'}
        onAfterClose={() => document.body.style.overflow = 'auto'}
        ariaHideApp={false}
        style={{
          overlay: {
            position: 'fixed',
            width: '100vw',
            height: '100vh'
          },
          content: {
            top: '10px',
            height: '95vh',
            overflow: "hidden",
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '20px',
            border: '2.5px solid #C4A77D'
          }
        }}
      >
        <div className='relative w-[90vw] h-900px overflow-hidden flex border-2 border-white' >
          <div className='absolute z-50 cursor-pointer top-3.5 right-4'>
            <IoMdCloseCircle size={50} onClick={() => setModalIsOpen(false)} />
          </div>
          <div 
            className='absolute top-400px opacity-40 z-50 bg-black cursor-pointer transition-opacity duration-300 hover:opacity-100 right-20'
            onClick={()=> setIndexModal(indexModal === images.length-1 ? 0 : indexModal+1)}
          >
            <ImNext2 size={45} color="white"/>
          </div>
          <div 
            className='absolute top-400px opacity-40 z-50 bg-black cursor-pointer transition-opacity duration-300 hover:opacity-100 left-20' 
            onClick={() => setIndexModal(indexModal === 0 ? images.length-1 : indexModal-1)}
          >
            <ImPrevious2 size={45} color="white"/>
          </div>
          <div className='flex justify-start'>
            {
              images.map((image: ImageProduct, index: number)=> (
                <div 
                  key={index} 
                  className='flex w-[90vw] h-[800px] justify-center items-center transition-transform duration-500 ease-out'
                  style={{transform: `translateX(${indexModal * -100}%)`}}
                >
                  <ImageFormat imageUrl={image.url} aspectRatio={image.aspectRatio} size='xl'/>
                </div>
              ))
            } 
          </div>
        </div>
      </Modal>        
      <div className='carousel-container'>
        <div className='border-2 border-ecru rounded-md flex overflow-hidden mb-4 h-[500px] w-500px' >
          <div className='w-full h-auto flex transition-transform duration-300 ease-in-out items-center'>
            { 
              images.map((image, index) => (
                <div
                  key = {index} 
                  className='flex min-w-full h-[450px] items-center justify-center overflow-hidden cursor-pointer transition-transform duration-500 ease-out px-2' 
                  onClick={()=>{
                    setModalIsOpen(true)
                    setIndexModal(indexImg)
                  }} 
                  style={{transform: `translateX(${indexImg * -100}%)`}}
                >
                  <ImageFormat key={index} imageUrl={image.url} aspectRatio={image.aspectRatio} translation size='l' />
                </div>
              ))
            }
          </div>
        </div>
        <div className='w-500px h-48 border-2 border-platinum rounded-md overflow-hidden'>  
          <div className={`flex items-center transition-transform duration-500 ease-out`} style={{width: `${images.length * 176}px`, transform:`translateX(${(indexImg * -176) + 176}px)`}} >
            {
              images.map((image, index) =>(
                <div 
                  key = {index} 
                  className={`cursor-pointer mx-2 self-center w-44 h-44 overflow-hidden transition-opacity duration-500 ease-out ${indexImg === index ? "opacity-100": "opacity-50"}` } 
                  onClick={()=>{setIndexImg(index)}}
                >
                  <ImageFormat key={index} imageUrl={image.url} aspectRatio={image.aspectRatio} translation={true} size='m' />
                </div>
                )
              ) 
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarouselImageProduit
