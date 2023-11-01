import connect from "@/lib/connect"
import BilletModel from "@/models/billet"
import { NextResponse } from "next/server"

connect()

export const GET = async()=> {
  const data = await BilletModel.find()
  return NextResponse.json({data})
}