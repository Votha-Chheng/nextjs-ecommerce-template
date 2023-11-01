import Link from 'next/link'
import React, { FC } from 'react'
import { HiArrowCircleLeft } from 'react-icons/hi'

type BackButtonProps = {
  href: string
  message: string
  position?: 'fixed'|'block'
}

const BackButton: FC<BackButtonProps> = ({ href, message, position = 'fixed' }) => {
  return (
    <div className={`z-40 ${position === 'fixed' ? 'fixed left-8 top-36 ' : ""}`} >
      <Link href={`/${href}`} className='no-underline text-white' >
        <button className='bg-ecru rounded-md flex flex-row gap-1 py-1 px-2 items-center'>
          <HiArrowCircleLeft size={25}/>
          <span>{message}</span> 
        </button>
      </Link>
    </div>
  )
}

export default BackButton