import mongoose, { Schema, Types, model } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser {
  nom : string,
  prénom :string,
  email : string,
  validationEmail : boolean,
  motDePasse : string,
  isAdmin : boolean, 
  commandes : Types.ObjectId [],
  adresse : {
    adresse : string,
    ville :string,
    codePostal :string,
    pays :string,
  }
}

const userSchema = new Schema<IUser>({
  nom : {
    type: String,
    required: true,
  },
  prénom : {
    type: String,
    required: true,
  },
  email : {
    type: String,
    required: true,
    unique: true
  },
  validationEmail : {
    type : Boolean,
    required: true,
    default: false,
  },
  motDePasse : {
    type: String,
    select: false,
    required: true,
  },
  isAdmin : {
    type: Boolean,
    required: true,
    default: false,
  }, 
  commandes : 
    [{
      type : mongoose.Schema.Types.ObjectId,
      required: true,
      ref : 'Order'
    }]
,
  adresse : {
    adresse : { type : String, required: false },
    ville : { type : String, required: false },
    codePostal : { type : String, required: false },
    pays : { type : String, required: false, default:'France' },
  }

}, {
  timestamps: true
}) 



userSchema.methods.matchPassword = async function(enteredPassword: string){
  return await bcrypt.compare(enteredPassword, this.motDePasse)
}

userSchema.pre('save', function(){
  if(this.isModified('email')){
    this.validationEmail = false
  }
  return  
})

userSchema.pre('save', async function(next){
  if(!this.isModified('motDePasse')){
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.motDePasse = await bcrypt.hash(this.motDePasse, salt)
})

const User = mongoose.models.User || model<IUser>('User', userSchema) 

export default User