import { getBilletById } from '@/controllers/billets'
import React, { FC } from 'react'
import BilletScreen from './BilletScreen'

const SingleBilletPage: FC<{params: { id: string }}> = async({params}) => {

  const { id } = params
  const response = await getBilletById(id)
  const { data, message, statusResponse } = response

  return (
    <>
      {data && <BilletScreen billet={data} />}
    </>
  )
}

export default SingleBilletPage