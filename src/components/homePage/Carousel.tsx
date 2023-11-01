'use client'

import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import { resumerTexte } from '@/utils/resumerTexte'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { mitr } from '../../../fonts/mitr'
import { lato } from '../../../fonts/lato'
import { ImNext2, ImPrevious2 } from 'react-icons/im'
import { Billet } from '@/@types/billet'
import { getFirstImageOfElement } from '@/utils/getFirstImageOfElement'
import { getFirstParagrapheOfElement } from '@/utils/getFirstParagrapheOfElement'
import { sortByDate } from '@/utils/sortBydate'

type CarouselProps = {
  billets: Billet[]
  statusResponse : number
}

const Carousel: FC<CarouselProps> = ({ billets, statusResponse }) => {

  const [index, setIndex] = useState<number>(0)

  const handlePrevious = ()=>{
    setIndex(index-1)
    if(index<=0){
      setIndex(billets.length-1)
    }    
  }

  const handleNext = ()=>{
    setIndex(index+1)
    if (index===billets.length-1){
      setIndex(0)
    } 
  }
  
  const defineClassName = (indexObjet: number, className1: string, classActive: string, className3: string)=>{
    let position = ""
    if(index===billets.length-1){
      if(indexObjet===0){
        position = className1
      } else if(indexObjet===billets.length-1){
        position = classActive
      }
       else{
        position = className3
      } 
    } else if(index=== indexObjet){
      position = classActive
    } else if (index === indexObjet-1){
      position = className1
    } else {
      position = className3
    }
    return position
  }

  const billetsByNewest = (billets: Billet[]): Billet[]=> {
    return sortByDate(billets as Billet[], 'newer') as Billet[]
  }

  return (
    <div className="flex flex-row w-3/5 h-400px mx-auto my-12">
      <div className="relative flex flex-row flex-nowrap w-3/4">
        <ImPrevious2 className="absolute top-44 left-3 opacity-40 cursor-pointer z-10 hover:opacity-80 transition-opacity duration-300 ease-in" onClick={handlePrevious} size={75}/>
        <ImNext2 size={75} onClick={handleNext} className="cursor-pointer absolute top-44 right-3 opacity-40 z-10 hover:opacity-80 transition-opacity duration-300 ease-in"/>
        { 
          billets && billetsByNewest(billets).map((item: Billet, indexItem: number)=> (
          <div 
            className={
              defineClassName(
                indexItem, 
                'absolute overflow-hidden h-400px transition-all duration-500 ease-out right', 
                'absolute overflow-hidden h-400px transition-all duration-500 ease-out active', 
                'absolute overflow-hidden h-400px transition-all duration-500 ease-out left'
              )
            } 
            key={indexItem} 
          >
            <div className={`overflow-hidden relative mx-auto border-4 border-black w-[475px] h-[300px]`}>
              <Image
                src={getFirstImageOfElement(item).url}
                alt={getFirstImageOfElement(item).url}
                style={{objectFit: "cover"}}
                width={800}
                height={500}
              />
            </div>
            <Link href={`/blog/${item._id}`} className='no-underline text-black'>
              <h3 className="pt-4 text-center ">
                <span className='text-black'>{item.titre}</span>
              </h3>
            </Link>
            <p className="text-center">Publié le {formatDate(item.createdAt ?? '')}</p>
            {/* <div className="hidden">
              <div dangerouslySetInnerHTML={{__html : resumerTexte(getFirstParagrapheOfElement(item), 150)}}></div>
              <br/>
              <Link href={`/blog/${item._id}`}>Lire la suite...</Link>
            </div> */}
          </div>
          )
        )
      } 
      </div>
      <div className="relative flex flex-col w-1/3 h-400px">
        {
          billets && billetsByNewest(billets).map((item: Billet, indexItem: number)=>(  
            <div 
              className={
                defineClassName(
                  indexItem, 
                  'absolute p-3.5 h-52 transition-all duration-500 ease-out z-10 up', 
                  'absolute p-3.5 h-52 transition-all duration-500 ease-out z-10 active-right', 
                  'absolute p-3.5 h-52 transition-all duration-500 ease-out z-10 down'
                )
              } 
              key={indexItem}
            >
              <h3 className={` ${mitr.className}`}>
                <Link href={`/blog/${item._id}`} className='no-underline'>{item.sousTitre ? item.sousTitre : item.titre}</Link>
              </h3>
              <div className={` ${lato.className}` } dangerouslySetInnerHTML={{__html : resumerTexte(getFirstParagrapheOfElement(item), 220)}}/>
              <Link href={`/blog/${item._id}`}>Lire la suite...</Link>
            </div>
          )
        )} 
      </div>
    </div>
  )
}

export default Carousel