import React, {FC} from 'react'
import Separateur from '../sharedUI/Separateur'
import Carousel from './Carousel'
import { getAllBillets } from '@/controllers/billets'

const HomeCarousel: FC = async() => {  
  const { data, message, statusResponse } = await getAllBillets()

  return (
    <div className='pb-24 pt-12'>
      <h2 className='text-center'>Actualités du blog</h2>
      <Separateur/>
      {
        data && <Carousel statusResponse={statusResponse} billets={data} />
      }
    </div>
  )
}

export default HomeCarousel
