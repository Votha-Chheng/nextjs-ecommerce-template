import { BlogElements } from "./blogElements"

export type Billet = {
  _id: string
  titre : string,
  sousTitre ?: string,
  elements: BlogElements,
  createdAt : string,
  updatedAt : string,
}
