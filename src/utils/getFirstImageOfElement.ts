import { Billet } from "@/@types/billet"
import { ImageProduct } from "@/@types/imageProduct"
import { Paragraphe } from "@/@types/paragraphe"
import { PhotosCollection } from "@/@types/photosCollection"
import { SimplePhotoAvecLegende } from "@/@types/simplePhotoAvecLegende"
import { VerticalSpacing } from "@/@types/verticalSpacing"

export const getFirstImageOfElement = (billet: Billet): ImageProduct=> {
  const { elements } = billet

  const defaultImage: ImageProduct = {
    url:'/image/sample.jpg', 
    aspectRatio: 'square'
  }

  const photoElement = elements.filter((element: (PhotosCollection|SimplePhotoAvecLegende|Paragraphe|VerticalSpacing))=> element.typeElement === 'photosCollection' || element.typeElement === 'simplePhotoAvecLegende')


  if(photoElement[0].typeElement === "photosCollection"){
    return photoElement[0].photos[0]
  } 

  if(photoElement[0].typeElement === "simplePhotoAvecLegende"){
    return photoElement[0].image
  } 

  return defaultImage
}