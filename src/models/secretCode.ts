import mongoose, { Schema, model } from "mongoose";

interface ISecretCode {
  emailCode:string,
  code: string,
  numberEmailSent : number,
  dateCreated: Date
}

const secretCodeSchema = new Schema<ISecretCode>({
  emailCode: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
  },
  numberEmailSent : {
    type : Number,
    required: false,
    default : 0,
  },
  dateCreated: {
    type: Date,
    required: true,
    expires: 600,
  }
},
{
  timestamps : true
}
);


const SecretCode = mongoose.models.SecretCode || model<ISecretCode>('SecretCode', secretCodeSchema) 
export default SecretCode