'use client'

import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from 'react'
import Separateur from '@/components/sharedUI/Separateur'
import { motion } from 'framer-motion'
import Filtres from './Filtres'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { Product } from '@/@types/product'
import { changeMaxPrice, changeMinPrice, changeSort, getProducts } from '@/store/slices/filtersSlice'
import { Sort } from '@/@types/filters'
import ProductsPerPage from './ProductsPerPage'
import Pagination from './Pagination'
import { mitr } from '../../../fonts/mitr'
import { pageTransition } from '@/animations/pageTransition'

type CatalogueProps = {
  children: ReactNode
  products: Product[]
  message: string 
  statusResponse: number
}

const Catalogue: FC<CatalogueProps> = ({ children, products, message, statusResponse }) => {

  const { filters } = useSelector((state: RootState)=> state.filters)
  const { sort, minPrice, maxPrice } = filters
  
  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=> {
    if(products){
      dispatch(getProducts(products))
    }

  }, [])


  const shapeAnimation = {
    initial : {
      y : 350
    },
    animate : {
      y:0,
      transition : {
        duration : 4
      }
    }
  }

  const handleMinPriceChange = ((event: ChangeEvent<HTMLInputElement>)=>{
    dispatch(changeMinPrice(+event.target.value as number))
  })
  
  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>)=>{
    dispatch(changeMaxPrice(+event.target.value as number))
  }


  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) =>{
    dispatch(changeSort(event.target.value as Sort))
  }

  return (
    <main >
      <div className="absolute w-full h-40 bg-ecru -z-20"/>
      <div className='z-10 h-40 py-5 px-0 mb-12 overflow-hidden'>
        <div className='relative w-52 my-0 mx-auto'>
          <motion.div variants={shapeAnimation} initial='initial' animate='animate' className='absolute -right-52 -top-10 -z-10'>
            <motion.svg width="600" height="600" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.7143 57.5298C45.5793 57.5298 58.4405 44.6686 58.4405 28.8036C58.4405 12.9385 45.5793 0.0773773 29.7143 0.0773773C13.8493 0.0773773 0.988098 12.9385 0.988098 28.8036C0.988098 44.6686 13.8493 57.5298 29.7143 57.5298Z" fill="#EAF0CE"/>
            </motion.svg>
          </motion.div>
          
          <h2 className={`text-center mt mx-auto z-50 ${mitr.className}`}>Boutique</h2> 
        </div>
        <Separateur/>
      </div>

      <div className='w-1200px my-0 mx-auto overflow-hidden'>       
        <Filtres 
          minPrice = {minPrice}
          maxPrice = {maxPrice?? undefined}
          sort = {sort}
          handleMinPriceChange = {handleMinPriceChange}
          handleMaxPriceChange = {handleMaxPriceChange}
          changeSort = {handleSortChange}
        />
        <ProductsPerPage/>
        <Pagination/>
        {children}   
          {/* :
          <h3 className='no-found'>Aucun produit ne correspond à vos critères de recherches.</h3> */}
        
      </div>

      <Pagination />    
    </main>
  )
}      
       
export default Catalogue