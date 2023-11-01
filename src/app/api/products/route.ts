import connect from "@/lib/connect"
import ProductModel from "@/models/product"
import { NextResponse } from "next/server"

connect()

export const GET = async()=> {
  const data = await ProductModel.find()
  return NextResponse.json({ data })

}