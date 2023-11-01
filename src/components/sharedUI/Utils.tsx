import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { HiShoppingCart } from 'react-icons/hi'
import { RxAvatar } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import UserDropdown from './UserDropdown'
import useComponentVisible from '@/hooks/useComponentVisible'


const Utils: FC = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { panier } = useSelector((state: RootState)=> state.panier)

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true)

  useEffect(()=> {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <ul className='flex gap-5 mb-0'>
      <li className='relative'>
        <Link href='/panier'>
          <HiShoppingCart size={30} color='#c4a77d' />
          <span className="badge absolute -top-2 -right-2 rounded-pill bg-danger">
            {panier ? panier.reduce((acc, item)=> acc + item.qty, 0) : 0}
          </span>
        </Link>  
      </li>
      <li className='color-ecru cursor-pointer relative'>
        <div onClick={()=> setIsComponentVisible(true)}>
          <RxAvatar size={30} color='#c4a77d'/>
        </div>
        <div ref={ref}>
          { isComponentVisible && <UserDropdown /> } 
        </div>
      </li>
    </ul>
  )
}

export default Utils
