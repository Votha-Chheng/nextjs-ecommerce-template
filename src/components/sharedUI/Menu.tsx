'use client'

import Link from 'next/link'
import React, { FC } from 'react'
import { oswald } from '../../../fonts/oswald'

const Menu: FC = () => {
  return (
    <nav>
      <ul className='flex flex-row mb-0 gap-x-12 w-auto'>
        <Link className='no-underline' href='/'><li className={oswald.className + " text-2xl text-ecru tracking-wide"}>Accueil</li></Link>
        <Link className='no-underline' href='/produits'><li className={oswald.className + " text-2xl text-ecru tracking-wide"}>Boutique</li></Link>
        <Link className='no-underline' href='/presentation'><li className={oswald.className + " text-2xl text-ecru tracking-wide"}>Qui suis-je ?</li></Link>
        <Link className='no-underline' href='/blog'><li className={oswald.className + " text-2xl text-ecru tracking-wide"}>Blog</li></Link>
      </ul>
    </nav>
    
  )
}

export default Menu
