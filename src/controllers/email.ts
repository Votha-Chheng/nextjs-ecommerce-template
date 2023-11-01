import { ServiceResponse } from "@/@types/serviceResponse"
import { validateHuman } from "./capcha"

export const sendEmailToMe = async(body: {subject: string, html: string}, siteToken: string): Promise<ServiceResponse<string>>=> {
  try {

    const human = await validateHuman(siteToken)

    if(!human.data){
      return {
        data: "Empty",
        message: "ReCaptcha non validé.",
        statusResponse: 400
      }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(body)
    })
  
    if(!response.ok){
      return {
        data: "Empty",
        message: "Une erreur sur le serveur est survenu. Recommencer l'opération après quelques instant.",
        statusResponse: 400
      }
    }
    const {data} = await response.json()
  
    return {
      data: data.messageId,
      message: '"Votre message a bien été envoyé !',
      statusResponse: 200 
  
    }
    
  } catch (error) {
    return {
      data: "Empty",
      message: "Une erreur sur le serveur est survenu. Recommencer l'opération après quelques instant.",
      statusResponse: 500
    }
  }

}