'use client'

import React, { ChangeEvent, FC, useEffect, useState }  from 'react'
import { lato } from '../../../fonts/lato'
import CategoriesList from './CategoriesList'
import { Sort } from '@/@types/filters'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { changeMaxPrice } from '@/store/slices/filtersSlice'

type FlitresProps = {
  handleMinPriceChange: (event: ChangeEvent<HTMLInputElement>)=> void
  handleMaxPriceChange: (event: ChangeEvent<HTMLInputElement>)=> void
  changeSort:(event: ChangeEvent<HTMLSelectElement>) => void 
  minPrice: number
  maxPrice: number|undefined
  sort: Sort
}

const Filtres: FC<FlitresProps> = ({ handleMinPriceChange, handleMaxPriceChange, sort, changeSort}) => {
  const [category, setCategory] = useState<string>("")
  const [min, setMin] = useState<string>("")
  const [max, setMax] = useState<string>("")

  const { productsFoundWithoutPagination } = useSelector((state: RootState)=> state.filters)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=> {
    if(+min < 0){
      setMin("0")
    }
    if(+max <+ min){
      setMax("")
      dispatch(changeMaxPrice(undefined))
    }
  }, [min, max])

  return (
    <section className='w-full'>
      <div className='flex justify-between items-center mb-3'>
        <div className='flex basis-2/5 gap-4 rounded-lg border-2 border-gray-300 justify-between p-2'>
          <div className='flex w-full items-center m-0 text-center'>
            <span className={`font-bold`}>Min.</span>
            <div className='input'>
              <input 
                min="0"
                type='number' 
                name='minPrice' 
                className={`w-16 text-right border border-gray-500 rounded-md`} 
                onChange={(event: ChangeEvent<HTMLInputElement>)=>{ 
                  handleMinPriceChange(event)
                  setMin(event.target.value)
                }} 
                value={min}
              />
                <span>€</span>
            </div>
          </div>
          <div className='flex items-center m-0 text-center w-full'>
            <span className='font-bold'>Max.</span>
            <div className='number'>
              <input 
                min="0"
                type='text' 
                name='maxPrice' 
                className='w-16 text-right border border-gray-500 rounded-md' 
                onChange={(event: ChangeEvent<HTMLInputElement>)=>{ 
                  handleMaxPriceChange(event)
                  setMax(event.target.value)
                }} 
                value={max}
              />
                <span>€</span>
            </div>
          </div>
        </div>
        <div className='flex justify-center w-full gap-3 mx-auto items-center'>
          <div className='h-1 w-1/2 bg-gray-500 mb-2 rounded-lg self-end'/>
          <div className='pt-2.5'>
            <p className='mb-0'>{productsFoundWithoutPagination.length===1 ? "1 seul produit trouvé.": `${productsFoundWithoutPagination.length} produits trouvés.`} </p>
          </div>
        </div>
        <div className='trait'/>
        <div className='sort basis-1/3 flex justify-end'>
          <select className={lato.className} name='sort' onChange={(event: ChangeEvent<HTMLSelectElement>)=> changeSort(event)} value={sort} >
            <option value='newer'>Nouveautés d'abord</option>
            <option value='older'>Date de création</option>
            <option value='higher'>Prix croissants</option>
            <option value='lower'>Prix décroissants</option>
          </select>
        </div>
      </div>
      <CategoriesList/>

    </section>
  )
}


export default Filtres
