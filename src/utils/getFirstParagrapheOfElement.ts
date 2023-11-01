import { Billet } from "@/@types/billet"
import { Paragraphe } from "@/@types/paragraphe"
import { PhotosCollection } from "@/@types/photosCollection"
import { SimplePhotoAvecLegende } from "@/@types/simplePhotoAvecLegende"
import { VerticalSpacing } from "@/@types/verticalSpacing"

export   const getFirstParagrapheOfElement = (billet: Billet): string => {
  const { elements } = billet
  const textElement = elements.filter((element: (PhotosCollection|SimplePhotoAvecLegende|Paragraphe|VerticalSpacing))=> element.typeElement === 'paragraphe')

  if(textElement.length<0){
    return 'Pas de texte'
  }
  if(textElement[0].typeElement === 'paragraphe' ){
    return textElement[0].texte
  } 
  return 'Pas de texte'
}