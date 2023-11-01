import connect from "@/lib/connect"
import ProductModel from "@/models/product"
import { NextApiRequest } from "next"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { NextResponse } from "next/server"

connect()

export const GET = async( _: NextApiRequest, { params }: Params )=> {
  const { id } = params
  const data = await ProductModel.findOne({_id: id})

  return NextResponse.json({ data })
}