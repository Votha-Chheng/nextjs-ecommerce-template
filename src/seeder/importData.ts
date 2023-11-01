import billets from "@/data/billets"
import products from "@/data/products"
import users from "@/data/users"
import Billet from "@/models/billet"
import Order from "@/models/order"
import Product from "@/models/product"
import User from "@/models/user"

export const importData = async()=>{
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await Billet.deleteMany()

    await Product.insertMany(products)
    await User.insertMany(users)
    await Billet.insertMany(billets)

    console.log('Products imported')
    process.exit()

  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}