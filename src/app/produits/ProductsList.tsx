'use client'

import { Product } from '@/@types/product'
import CardHome from '@/components/homePage/CardHome'
import { changeCurrentPage, getFilteredProducts } from '@/store/slices/filtersSlice'
import { AppDispatch, RootState } from '@/store/store'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type ProductsListProps = {
  message: string,
  statusResponse: number
}

const ProductsList: FC<ProductsListProps> = ({ message, statusResponse }) => {
  const { filteredProducts, filters, productPagination } = useSelector((state: RootState)=> state.filters)
  const { numberOfItemsToDisplay, currentPage, totalPages } = productPagination

  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=> {
    dispatch(getFilteredProducts())
    
  }, [filters, numberOfItemsToDisplay, currentPage])

  useEffect(()=> {
    if(currentPage>totalPages){
      dispatch(changeCurrentPage(1))

    }
  }, [filters, numberOfItemsToDisplay, currentPage, totalPages])

  if(statusResponse !==200){
    return <section className="w-full h-52 flex justify-center items-center">
      {message}
    </section>
  }

  return (
    <section className="w-full gap-3.5 flex flex-wrap justify-evenly">
      {filteredProducts && filteredProducts.map((product: Product) =>(
        <div className='border-1 rounded-md border-ecru mb-6 overflow-hidden' key={product._id}>
          <CardHome product={product}/>
        </div>
      ))}
    </section>
  )
}

export default ProductsList