import React, { FC } from 'react'
import HomePage from './HomePage'
import HomeProducts from './HomeProducts'
import HomeCarousel from './HomeCarousel'

const HomeScreen: FC = () => {
  return (
    <>
      <HomePage/>
      <HomeProducts />
      <HomeCarousel/>
    </>
  )
}

export default HomeScreen