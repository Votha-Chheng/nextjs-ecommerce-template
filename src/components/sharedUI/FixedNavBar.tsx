'use client'

import React, { FC } from 'react'
import Menu from './Menu'
import useScrollPosition from '@/hooks/useScrollPosition'
import Utils from './Utils'
import Image from 'next/image'
import Link from 'next/link'


const FixedNavBar:FC = () => {
  //const {userInfo} = useSelector(state=>state.userLogin)

  const scrollY = useScrollPosition()

  return (
    <nav className={`sticky top-0 h-16 pt-3 bg-oxford-blue z-50 ${scrollY<145 ? 'hidden':'block'}`}>
      <div className='flex justify-between'>
        <div className='basis-1/3 flex self-end mb-2'>
          <Menu/>
        </div>
        <Link className='basis-1/3 mt-1' href="/">
          <Image src='/images/logoCavallo.svg' alt="logo" width={90} height={50} style={{margin:"auto"}} />
        </Link>
        <div className='basis-1/3 flex justify-end mt-1 mr-7'>
          <Utils />
        </div>
      </div>
    </nav>
  )
}

export default FixedNavBar
