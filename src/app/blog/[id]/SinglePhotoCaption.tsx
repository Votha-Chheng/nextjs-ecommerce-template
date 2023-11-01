import { AspectRatio } from '@/@types/aspectRatio'
import ImageFormat from '@/components/sharedUI/ImageFormat'
import React, { FC } from 'react'

type SinglePhotoCaptionProps={
  imageUrl: string
  aspectRatio: AspectRatio
  legende?: string
}

const SinglePhotoCaption: FC<SinglePhotoCaptionProps> = ({ imageUrl, aspectRatio, legende }) => {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <ImageFormat imageUrl={imageUrl} aspectRatio={aspectRatio} size='l' />
      {
        legende && <legend className='py-2.5 text-center'>{legende}</legend>
      }
    </div>
  )
}

export default SinglePhotoCaption