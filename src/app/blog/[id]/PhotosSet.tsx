import { ImageProduct } from '@/@types/imageProduct'
import CarouselImageProduit from '@/app/produits/[id]/CarouselImageProduit'
import ImageFormat from '@/components/sharedUI/ImageFormat'
import React, { FC } from 'react'

type PhotosSetProps={
  display: 'queue'|'normal'
  photos: ImageProduct[]
}

const PhotosSet: FC<PhotosSetProps> = ({display, photos}) => {
  return (
    <section className='flex flex-wrap items-center gap-1.5' >
      {
        display === 'normal'
        ?
        photos.map((photo: ImageProduct)=> (
          <ImageFormat imageUrl={photo.url} aspectRatio={photo.aspectRatio} size='l' />
        ))
        :
        <div className='mx-auto'>
          <CarouselImageProduit images={photos} />
        </div>
      }
    </section>
  )
}

export default PhotosSet