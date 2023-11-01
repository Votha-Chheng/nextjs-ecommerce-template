import { Product } from "@/@types/product"
import { ServiceResponse } from "@/@types/serviceResponse"

export async function getAllProducts(): Promise<ServiceResponse<Product[]>> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, 
    { 
      cache: 'no-store',
      method: "GET"
    })

    if(!response.ok){
      return {
        data: [],
        message: 'Unable to fetch datas.',
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

export async function getProductById(id: string): Promise<ServiceResponse<Product>> {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, { cache: 'no-store', method: 'GET'})

    if(!response.ok){
      return {
        data: undefined,
        message: 'Unable to fetch the product.',
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