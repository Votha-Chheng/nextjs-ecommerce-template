'use client'

import { Product } from '@/@types/product'
import { changeCurrentPage } from '@/store/slices/filtersSlice'
import { AppDispatch, RootState } from '@/store/store'
import { getArrayOfNumbers } from '@/utils/getArrayOfNumbers'
import { scrollToTop } from '@/utils/scrollToTop'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type PaginationProps = {
  
}

const Pagination: FC<PaginationProps> = () => {
  const { productPagination } = useSelector((state: RootState)=> state.filters)
  const { currentPage, totalPages } = productPagination
  
  const dispatch = useDispatch<AppDispatch>()

  const nextPage = (current : number, totalPages: number)=> {
    if(current !== totalPages){
      dispatch(changeCurrentPage(currentPage + 1))
      scrollToTop(200)
    }
  }
  const prevPage = (current : number)=> {
    if(current !== 1){
      scrollToTop(200)
      dispatch(changeCurrentPage(currentPage - 1))
    }
  }

  const goToPage = (pageNumber: number): void=> {
    scrollToTop(200)
    dispatch(changeCurrentPage(pageNumber))
  }

  return (
    <nav aria-label="nombre de pages disponibles">
      <ul className="w-full pl-0 flex justify-center my-5">
        <li className={`rounded-tl-lg bg-oxford-blue rounded-bl-lg px-2 py-1.5 w-24 text-center border-1 text-white border-gray-500 ${currentPage === 1 ? "pointer-events-non opacity-50":"cursor-pointer"}`} onClick={()=>prevPage(currentPage) }>
          Previous
        </li>
        {
          getArrayOfNumbers(totalPages).map((index: number)=> (
          <li 
            key={index} 
            className={`py-1.5 border-1  border-gray-500 w-9 text-center cursor-pointer ${currentPage === index+1 && "bg-oxford-blue text-white"}`}
            onClick={()=> goToPage(index+1)}
          >
            {index+1}
          </li>
          ))
        }
        <li 
          className={`rounded-tr-lg bg-oxford-blue text-white rounded-br-lg px-1 py-1.5 border-1 border-gray-500 w-20 text-center ${currentPage === totalPages ? "pointer-events-none opacity-50": 'cursor-pointer'}`} 
          onClick={()=>nextPage(currentPage, totalPages)}
        >
          Next
        </li>
      </ul>
    </nav>
  )
}

export default Pagination