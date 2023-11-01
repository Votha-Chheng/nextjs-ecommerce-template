import mongoose, { Schema, Types, model } from "mongoose"

interface IOrder {
  client: Types.ObjectId,
  produitsCommande : 
    {
      nom : string,
      qty : number,
      image : string,
      prix : number,
      couleur?: string,
      product :Types.ObjectId
    } []
  ,
  pointRelais : {
    adresse: string,
    required: true,
    message : string
  },
  méthodePaiement : string,
  paymentResult : {
    id : string,
    status :string,
    update_time : string,
    email_address : string
  },
  prixProduits : number,
  fraisDePort :number,
  prixTotal : number,
  isPaid : boolean,
  datePaiement : Date,
  isDelivered : boolean,
  deliveredAt : Date,
  messageOrder ?: string
}

const orderSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    required: true,
    ref : 'User'
  },
  produitsCommande : [
    {
      nom : {type:String, required: true},
      qty : {type:Number, required:true},
      image : {type:String, required: true},
      prix : {type:Number, required:true},
      couleur : {type : String, required: false},
      product : {type: Schema.Types.ObjectId, required : true, ref: 'Product'}
    }
  ],
  pointRelais : {
    type: {String},
    required: true,
    message : { type : String, required: false}
  },
  méthodePaiement : {
    type : String,
    default : 'Paypal'
  },
  paymentResult : {
    id : {type : String},
    status : {type : String},
    update_time : {type : String},
    email_address : {type : String}
  },
  prixProduits : {
    type : Number,
    required : true,
    default : 0.0
  },
  fraisDePort : {
    type : Number,
    required : true,
    default : 10
  },
  prixTotal : {
    type : Number,
    required : true,
    default : 0.0
  },
  isPaid : {
    type : Boolean,
    required : true,
    default : false,
  },
  datePaiement : {
    type : Date
  },
  isDelivered : {
    type : Boolean,
    required : true,
    default : false,
  },
  deliveredAt : {
    type : Date
  },
  messageOrder : {
    type : String,
    required : false
  }
}, 
{
  timestamps : true
})

const OrderModel = mongoose.models.Order || model<IOrder>('Order', orderSchema)

export default OrderModel