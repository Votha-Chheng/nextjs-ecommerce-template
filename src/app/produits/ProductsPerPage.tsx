'use client'

import { changeNbItemsToDisplay } from '@/store/slices/filtersSlice'
import { AppDispatch, RootState } from '@/store/store'
import React, { FC, useState, MouseEvent, useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductsPerPage: FC = () => {
  const [scrollYValue, setScrollYValue] = useState<number>(0)
  const { productPagination } = useSelector((state:RootState)=> state.filters)
  const { numberOfItemsToDisplay } = productPagination

  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=> {
    if(numberOfItemsToDisplay === 10){
      setScrollYValue(30)
    } else if(numberOfItemsToDisplay === 20){
      setScrollYValue(0)
    } else if(numberOfItemsToDisplay === 30){
      setScrollYValue(-30)
    }
  }, [numberOfItemsToDisplay])
  
  const clicNumberHandler = (event: MouseEvent<HTMLElement>)=>{
    setScrollYValue(+event.currentTarget.id)
    dispatch(changeNbItemsToDisplay(+event.currentTarget.innerText))  
  }

  return (
    <section className='flex justify-center mb-5 items-center text-center h-20 overflow-hidden relative filters'>
      <div className='mr-6'> Afficher </div>
      <div className='mr-3.5 transition-all duration-300 ease-in' style={{transform : `translateY(${scrollYValue}px)`}}>
        <div 
          id='30' 
          data-value='10' 
          data-name='numberOfItemsToDisplay' 
          className={`w-10 h-7 border-2 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl cursor-pointer ${scrollYValue === 30 ? "border-cerulean text-cerulean font-bold" : "border-platinum text-gray-600"}`} 
          onClick={(event: MouseEvent<HTMLElement>)=> clicNumberHandler(event)}
        >
          10
        </div>

        <div 
          id='0' 
          data-value='20' 
          data-name='numberOfItemsToDisplay' 
          className={`my-1 w-10 h-7 pb-1 border-2 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl cursor-pointer ${scrollYValue === 0 ? "border-cerulean text-cerulean font-bold" : "border-platinum text-gray-600"}`} 
          onClick={(event: MouseEvent<HTMLElement>)=> clicNumberHandler(event)}
          
        >
          20
        </div> 
      
        <div 
          id='-30' 
          data-value='30' 
          data-name='numberOfItemsToDisplay' 
          className={`
            w-10 
            h-7 
            border-2 
            rounded-tl-xl 
            rounded-tr-xl 
            rounded-br-xl 
            rounded-bl-xl 
            cursor-pointer 
            ${scrollYValue === -30 ? "border-cerulean text-cerulean font-bold" : "border-platinum text-gray-600"}`
          } 
          onClick={(event: MouseEvent<HTMLElement>)=> clicNumberHandler(event)}
        >
          30
        </div>
      </div>
      <div>objets par page</div>          
    </section>
  )
}

export default ProductsPerPage