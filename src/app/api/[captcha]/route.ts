import { NextApiRequest } from "next"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { NextResponse } from "next/server"

export const POST = async(_: NextApiRequest, { params } : Params ): Promise<any>=> {
  const { captcha } = params

  const data = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`)

  const jsonData = await data.json()

  return NextResponse.json(jsonData.success) 

}