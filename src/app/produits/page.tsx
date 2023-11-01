import React, { FC, Suspense } from 'react'
import Catalogue from './Catalogue'
import ProductsList from './ProductsList'
import { getAllProducts } from '@/controllers/products'
import { ServiceResponse } from '@/@types/serviceResponse'
import { Product } from '@/@types/product'
import LoaderSpin from '@/components/sharedUI/Loader'

const Boutique: FC = async() => {
  const response: ServiceResponse<Product[]> = await getAllProducts()
  const { data, message, statusResponse } = response
  
  return (
    <>
      <Catalogue products={data ?? []} message={message} statusResponse={statusResponse}>
        <Suspense fallback={<LoaderSpin/>} >
          <ProductsList message={message} statusResponse={statusResponse}/>
        </Suspense>
      </Catalogue>
    </>
  )
}

export default Boutique
