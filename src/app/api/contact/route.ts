import { NextRequest, NextResponse } from "next/server"
import nodemailer from 'nodemailer'

export const POST = async(request: NextRequest)=> {
  try {
    const rawBody = await request.json()
    const { subject, html } = rawBody

    console.log(request.body, 'from email route')

    const transporter = nodemailer.createTransport({
      host: 'mail.gmx.com',
      port: 465,
      secure: true,
      auth: {
        user: 'votha_chheng@gmx.fr',
        pass: '31/01/1983'
      }
    })
  
    const options = {
      from:'votha_chheng@gmx.fr',
      to: 'votha_boogie@hotmail.fr',
      subject,
      html
    }
  
    const data = await transporter.sendMail(options)
  
    return NextResponse.json({data})

  } catch (error: any) {
    return NextResponse.json({error: 'Service indisponible.'})

  }
}
