import Billet from "@/models/billet"
import Order from "@/models/order"
import Product from "@/models/product"
import User from "@/models/user"

export const destroyData = async()=>{
  try {
    await Product.deleteMany()
    await User.deleteMany()
    await Order.deleteMany()
    await Billet.deleteMany()

    console.log('Data destroyed')
    process.exit()

  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}