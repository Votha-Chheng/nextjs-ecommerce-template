import connect from "@/lib/connect"
import Order from "@/models/order"
import { NextResponse } from "next/server"

connect()

export const GET = async()=> {
  try {
    const getAllOrders = await Order.find()
    return NextResponse.json(getAllOrders)

  } catch (error: any) {
    throw new Error(error.message)
    
  }
}