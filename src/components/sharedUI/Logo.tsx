import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { mitr } from '../../../fonts/mitr'

type LogoProps = {
  onFooter?: boolean
}

const Logo: FC<LogoProps> = ({onFooter = false}) => {
  return (
    <div  className='flex flex-col m-auto justify-center'>
      <Link href='/' style={{width:"200"}} className='m-auto'>
        <Image src='/images/logoCavallo.svg' alt="logo-luminaires-Cavallo" width={200} height={200} priority />
      </Link>
      <h1 className={`text-ecru text-center border-t-2 border-ecru mt-2 ${onFooter && 'text-2xl'} ${mitr.className}`}>Luminaires Cavallo</h1>
    </div>
  )
}

export default Logo
