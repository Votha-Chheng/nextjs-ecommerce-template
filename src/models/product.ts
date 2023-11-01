import { ImageProduct } from '@/@types/imageProduct'
import mongoose, { Schema, model } from 'mongoose'

interface IProduct {
  nom : string,
  category : string,
  prix : number,
  stock : number,
  description : string,
  couleurs : string[],
  images : ImageProduct[],
  livraison : boolean
}

const productSchema = new Schema<IProduct>({
  nom : { 
    type: String,
    required: true,
  },
  category : {
    type: String,
    required: true,
  },
  prix : {
    type: Number,
    required: true,
    default : 0
  },
  stock : {
    type: Number,
    required: true,
    default : 0
  },
  description : {
    type: String,
    required: true,
  },
  couleurs : {
    type : [String],
    required: false,
    default : []
  },
  images: { 
    type :[
      {
        url: {type: String, default:'../images/sample.jpg'},
        aspectRatio: {
          type: String,
          enum:["square", "portrait", "paysage"]
        }
      }
    ],
    required: false
  },
  livraison : {
    type : Boolean,
    required : true,
  } 
}, {
  timestamps : true
})

const ProductModel = mongoose.models.Product || model<IProduct>('Product', productSchema)

export default ProductModel