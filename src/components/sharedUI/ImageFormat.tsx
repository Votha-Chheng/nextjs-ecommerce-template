'use client'

import { Dimensions } from '@/@types/dimensions'
import { getRatioImage } from '@/utils/getRatioImage'
import Image from 'next/image'
import React, {FC, ReactEventHandler, SyntheticEvent, useState } from 'react'

type ImageFormatProps = {
  imageUrl: string
  aspectRatio: 'paysage'|'portrait'|'square'
  size: 's'|'m'|'l'|'xl',
  translation?: boolean
  frameDimensions?: Dimensions
}

const ImageFormat: FC<ImageFormatProps> = ({ imageUrl, aspectRatio, size, translation, frameDimensions }) => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const setDimension = (width: number, height: number)=> {
    setWidth(width)
    setHeight(height)
  }

  const adaptToFrame = (frameDimensions: Dimensions|undefined, width: number, height: number): Dimensions=> {
    let translation = { width:0, height: 0}
    
    if(frameDimensions){
      if(width>frameDimensions.width){
        translation.width = (frameDimensions.width - width)/2
      }
      if(height>frameDimensions.height){
        translation.height = (frameDimensions.height - height)/2
      }
    }

    return translation
  }

  const imgFormat = {
    width: width/getRatioImage(size, aspectRatio),
    height: height/getRatioImage(size, aspectRatio)
  }

  return (
    <div 
      style={{
        width: `${imgFormat.width}px`, 
        height:`${imgFormat.height}px`, 
        overflow:"hidden",
        transform: `${translation ? `translate(${adaptToFrame(frameDimensions, imgFormat.width, imgFormat.height).width}px, ${adaptToFrame(frameDimensions, imgFormat.width, imgFormat.height).height}px)` :""}`
      }} 
      className={`relative mx-auto`}
    >
      <Image
        src={imageUrl}
        alt = 'illustration'
        fill
        onLoad={(event: SyntheticEvent<HTMLImageElement>)=> setDimension(+event.currentTarget.naturalWidth ?? 0, +event.currentTarget.naturalHeight ?? 0)}
      />
    </div>
  )
}

export default ImageFormat