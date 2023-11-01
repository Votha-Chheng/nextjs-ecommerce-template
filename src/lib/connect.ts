import mongoose from "mongoose"

const connect = async ()=> {
  try {
    await mongoose.connect("mongodb+srv://adminEdemy:31011983Chonbury@cluster0.qfmii.mongodb.net/LuminairesCavallo?retryWrites=true&w=majority")
    console.log("DB Connected")

  } catch (error) {
    console.log(error)

  }
}

export default connect