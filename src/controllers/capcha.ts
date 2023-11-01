import { ServiceResponse } from "@/@types/serviceResponse"

export const validateHuman = async(siteToken: string): Promise<ServiceResponse<any>>=> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${siteToken}`, { 
      method: 'POST',
    })

    const jsonResponse = await response.json()
      
    return {
      data: jsonResponse,
      message: "ReCaptcha validé.",
      statusResponse: 200 
  
    }
    
  } catch (error) {
    return {
      data: false,
      message: 'Un problème avec le serveur Google est survenu. Veuillez recommencer plus tard.',
      statusResponse: 500
    }
  }

}