import { Billet } from "@/@types/billet"
import { ServiceResponse } from "@/@types/serviceResponse"

export async function getAllBillets(): Promise<ServiceResponse<Billet[]>> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, { cache: 'no-store'})

    if(!response.ok){
      return {
        data: undefined,
        message: 'Unable to fetch blog articles.',
        statusResponse: 500
      }
    }
    const {data} = await response.json()

    return {
      data,
      message: "OK",
      statusResponse: 200
    }

  } catch (error) {
    return {
      data: undefined,
      message: 'Server error.',
      statusResponse: 500
    }
  }
}

export async function getBilletById(id: string): Promise<ServiceResponse<Billet>> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${id}`, { cache: 'no-store', method: 'GET'})

    if(!response.ok){
      return {
        data: undefined,
        message: 'Erreur : Impossible de trouver le billet de blog.',
        statusResponse: 500
      }
    }
    const {data} = await response.json()
    return {
      data,
      message: "OK",
      statusResponse: 200
    }

  } catch (error) {
    return {
      data: undefined,
      message: 'Erreur du serveur : Impossible de trouver le billet de blog.',
      statusResponse: 500
    }
  }
}