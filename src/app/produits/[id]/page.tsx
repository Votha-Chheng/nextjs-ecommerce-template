import { getProductById } from "@/controllers/products"
import { FC } from "react"
import ProductDetails from "./ProductDetails"

const SingleProduct: FC<{params: { id: string }}> = async({ params })=> {
  const { id } = params
  const { data, message, statusResponse } = await getProductById(id)

  return (
    <>
      { data && <ProductDetails product={data}/>}
    </>
    
  )
}

export default SingleProduct