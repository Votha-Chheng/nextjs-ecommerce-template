import { BlogElements } from '@/@types/blogElements'
import mongoose, { Schema, model } from 'mongoose'

interface IBillet {
  titre : string,
  sousTitre ?: string,
  elements: BlogElements[],
}

const billetSchema = new Schema<IBillet>({
  titre : { 
    type: String,
    required: true,
  },
  sousTitre : {
    type: String,
    required: false,
  },
  elements: [
    {
      type: Object,
      enum: [
        {
          typeElement: {
            type: String,
            enum: ['photosCollection']
          },
          photos: [{
            url: String,
            aspectRatio: String
          }],
          display: String
        },
        {
          typeElement: {
            type: String,
            enum: ['paragraphe']
          },
          texte: String,
          titreParagraphe: {
            type: String,
            required: false
          }
        },
        {
          typeElement: {
            type: String,
            enum: ['simplePhotoAvecLegende']
          },
          photos: {
            url: String,
            aspectRatio: String
          },
          legende : {
            type: String,
            required: false
          }
        },
        {
          typeElement: {
            type: String,
            enum: ['verticalSpacing']
          },
          size: {
            type: Number,
            required: true
          }
        }
      ]
    }  
  ]
}, 
{
  timestamps : true
})

const BilletModel = mongoose.models.Billet || model<IBillet>('Billet', billetSchema) 

export default BilletModel