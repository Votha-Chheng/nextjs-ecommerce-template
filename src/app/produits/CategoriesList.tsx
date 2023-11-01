'use client'

import { Product } from '@/@types/product'
import { changeCategory } from '@/store/slices/filtersSlice'
import { AppDispatch, RootState } from '@/store/store'
import React, { FC, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// type CategoriesListProps = {
//   category: string
// }

const CategoriesList: FC = () => {
  const { allProducts, filters } = useSelector((state: RootState)=> state.filters)
  const { category } = filters

  const dispatch = useDispatch<AppDispatch>()

  const getCatList = (products: Product[]): string[] => {
    const getCategories: string[] = products.map(product => product.category)
    const temp = Array.from(new Set(getCategories)) 
    
    return ['tous les produits', ...temp]
  }

  const chooseCategory = (event: MouseEvent<HTMLDivElement>)=> {
    dispatch(changeCategory(event.currentTarget.id))
  }

  return (
    <div className='flex justify-center w-full my-2.5 mx-auto border-b border-ecru'>
      { 
        allProducts && getCatList(allProducts).map((cat, index) =>(
          <div 
            id={cat}
            key={index}  
            onClick={(event: MouseEvent<HTMLDivElement>)=> chooseCategory(event)}  
            className={`
              relative 
              text-sm 
              cursor-pointer 
              uppercase 
              my-0 
              mx-auto 
              text-center 
              text-black border 
              border-ecru 
              w-full 
              leading-9 
              py-2.5 
              px-auto 
              overflow-hidden 
              ${category===cat? "opacity-100 font-bold" : 'opacity-50 after:-translate-x-full'}
              after:content-[''] after:w-full after:h-1 after:bg-ecru after:absolute after:top-0 after:left-0 after:transition-transform after:duration-300 after:ease-out
              `
            } 
          >
            {cat}
          </div>
        ))
      }
    </div>
  )
}

export default CategoriesList