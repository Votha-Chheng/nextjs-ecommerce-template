import { Position } from '@/@types/position'
import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'
import { oswald } from '../../../fonts/oswald'

type DropdownProps = {
  classProps: Position
  clic: ()=> void
}

const Dropdown: FC<DropdownProps> = ({classProps, clic}) => {
  return (
    <nav className={`w-full fixed bg-oxford-blue ${oswald.className}`}>
      <ul className='flex flex-col align-middle pl-0 gap-5'>
        <Link href='/' onClick={clic} className='text-center no-underline text-2xl text-ecru tracking-wide'><li className={classProps.li }>Accueil</li></Link> 
        <Link href='/produits' onClick={clic} className='text-center no-underline text-2xl text-ecru tracking-wide'><li className={classProps.li}>Boutique</li></Link>
        <Link href='/presentation' onClick={clic} className='text-center no-underline text-2xl text-ecru tracking-wide'><li className={classProps.li}>Qui suis-je ?</li></Link>
        <Link href='/blog' onClick={clic} className='text-center no-underline text-2xl text-ecru tracking-wide'><li className={classProps.li}>Blog</li></Link> 
      </ul>
    </nav>
  )
}

export default Dropdown
