import { Paragraphe } from "./paragraphe";
import { PhotosCollection } from "./photosCollection";
import { SimplePhotoAvecLegende } from "./simplePhotoAvecLegende";
import { VerticalSpacing } from "./verticalSpacing";

export type BlogElements = (PhotosCollection| SimplePhotoAvecLegende| Paragraphe|VerticalSpacing)[]
