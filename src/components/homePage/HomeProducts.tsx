import React, { FC, useEffect } from 'react'
import CardHome from './CardHome'
import Separateur from '../sharedUI/Separateur'
import { Product } from '@/@types/product'
import { latestProducts } from '@/utils/latestProducts'
import { getAllProducts } from '@/controllers/products'
import { ServiceResponse } from '@/@types/serviceResponse'

const HomeProducts : FC = async() => {

  const response: ServiceResponse<Product[]> = await getAllProducts()
  const { data, message, statusResponse } = response

  return (
    <section className='overflow-hidden relative mb-10 pb-20 pt-5 bg-isabeline w-full'>
      <h2 className='pt-8 text-center'>
        Derniers produits
      </h2>
      <div className='w-50px m-auto z-20'>
        <Separateur/>
      </div>

      <div className='flex justify-center gap-5 flex-wrap'>   
        {
          message === "OK" && data && latestProducts(data).map((product: Product, index: number) => (
            <div key={index} className='card-container z-10'>
              <CardHome product = {product} />
            </div>
        ))
      }
        <div className='forme-1'/>
        <div className='forme-2'/>
    
      </div>  
    </section>
  )
}

export default HomeProducts

// const Wrapper = styled.section`
  
//   h2{
//     padding-top :30px;
//     text-align: center;
//   }

//   #conteneur-produits{
//     display: flex;
//     justify-content: space-around;

//   }
//   @media only screen and (max-width: 1440px){
//     #conteneur-produits{
//       width: 100%;
//       padding-bottom: 50px;
//       flex-wrap : wrap;
//     }
//     .forme-2{
//       z-index: 0;
//       top : 690px;
//       margin-right:50px;
//     }
//   }
//   @media only screen and (max-width: 1060px){
//     #conteneur-produits{
//       width: 100%;
//       padding-bottom: 50px;
//     }
//     .forme-2, .forme-1{
//       display: none;
//     }
//   }  
// `
