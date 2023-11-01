'use client'

import { Billet } from '@/@types/billet'
import React, { FC } from 'react'
import BackButton from '@/components/sharedUI/BackButton'
import { BlogElements } from '@/@types/blogElements'
import { PhotosCollection } from '@/@types/photosCollection'
import { VerticalSpacing } from '@/@types/verticalSpacing'
import { SimplePhotoAvecLegende } from '@/@types/simplePhotoAvecLegende'
import { Paragraphe } from '@/@types/paragraphe'
import VerticalSpace from './VerticalSpace'
import SinglePhotoCaption from './SinglePhotoCaption'
import ParagrapheTexte from './ParagrapheTexte'
import PhotosSet from './PhotosSet'
import { indieFlower } from '../../../../fonts/indieFlower'
import Separateur from '@/components/sharedUI/Separateur'
import { oswald } from '../../../../fonts/oswald'

type BilletScreenProps = {
  billet: Billet
}

const BilletScreen: FC<BilletScreenProps> = ({ billet }) => {

  const associateElements = (element: PhotosCollection|VerticalSpacing|SimplePhotoAvecLegende|Paragraphe): JSX.Element => {
    switch(element.typeElement){
      case 'verticalSpacing':
        return <VerticalSpace size={element.size} />
      case 'simplePhotoAvecLegende':
        return <SinglePhotoCaption imageUrl={element.image.url} aspectRatio={element.image.aspectRatio} legende={element.legende} />
      case 'paragraphe':
        return <ParagrapheTexte texte={element.texte} titreParagraphe={element.titreParagraphe} />
      case 'photosCollection':
        return <PhotosSet display={element.display} photos={element.photos} />
      default :
        return <></>
    }
  }

  const mapBlogElements = (blogElements: BlogElements): JSX.Element[] => {
    return blogElements.map((element: PhotosCollection|VerticalSpacing|SimplePhotoAvecLegende|Paragraphe)=> associateElements(element))
  }

  return (
    <main className='relative pb-16'>

      <BackButton href='blog' message='Retour au blog' />
      <div className='w-[1200px] my-12 mx-auto'>
        <h2 className={`text-center my-24 text-5xl underline underline-offset-[12.5px] ${indieFlower.className}`}>{billet.titre}</h2>
        <Separateur/>
        <h3 className={`my-20 tracking-wide text-center ${oswald.className}`}>{billet.sousTitre}</h3>
        {
          billet && mapBlogElements(billet.elements).map((blogElement: JSX.Element, index: number)=> (
            <div key={index}>
              {blogElement}
            </div>
          ))
        }
      </div>
    </main>
  )
}


export default BilletScreen
