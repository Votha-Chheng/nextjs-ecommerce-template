import useComponentVisible from '@/hooks/useComponentVisible'
import React, { FC } from 'react'

const UserDropdown: FC = () => {
  return (
    <div className='bg-white py-2 px-3 absolute w-36 flex flex-col gap-2.5 mt-2 -translate-x-12 border border-oxford-blue rounded-md'>
      <li>Se connecter</li>
      <li>S'inscrire</li>
    </div>
  )
}

export default UserDropdown