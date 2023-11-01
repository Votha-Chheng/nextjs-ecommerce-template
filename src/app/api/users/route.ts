import connect from "@/lib/connect"
import User from "@/models/user"
import { NextRequest, NextResponse } from "next/server"

connect()

export const GET = async()=> {
  try {
    const getAllUsers = await User.find().select("-motDePasse")
    return NextResponse.json(getAllUsers)

  } catch (error: any) {
    throw new Error(error.message)
    
  }
}

export const POST = async(request: NextRequest) => {
  const { email } = await request.json()
  await User.create({
    email
  })
  return NextResponse.json({message: 'Inscription réussie !'}, { status: 201})
}