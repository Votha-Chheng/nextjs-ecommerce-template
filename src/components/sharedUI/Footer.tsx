'use client'

import Link from 'next/link'
import React, { FC } from 'react'
import Logo from './Logo'
import { AiOutlinePhone } from 'react-icons/ai'
import { TiLocation } from 'react-icons/ti'
import { MdAlternateEmail, MdSell } from 'react-icons/md'
import { IoInformationCircleSharp } from 'react-icons/io5'
import { RiGitRepositoryPrivateFill } from 'react-icons/ri'
import { lato } from '../../../fonts/lato'
import { mitr } from '../../../fonts/mitr'

const Footer: FC = () => {
  return(
    <footer className='bg-oxford-blue h-full w-full'>
        <section className='flex h-60 border-b-2 border-ecru'>
          <div className='self-center h-full border-r-2 border-r-ecru p-5'>
            <Logo onFooter={true}/>
          </div>
          <div className='h-full basis-1/2 pl-7 pt-4 border-r-2 border-ecru'>
            <h4 className={`text-ecru tracking-wide mb-4 ${mitr.className}`}>Informations</h4>
            <Link href='/mentionslegales' className='no-underline text-white'>
              <p className='text-white flex gap-1.5'><span className='self-center'><IoInformationCircleSharp/></span><span>Mentions légales</span></p>
            </Link>
            <Link href='/confidentialite' className='no-underline'>
              <p className='text-white flex gap-1.5'><span className='self-center'><RiGitRepositoryPrivateFill/></span><span>Politique de confidentialité</span></p>
            </Link>
            <Link href='/cgv' className='no-underline'>
              <p className='text-white flex gap-1.5'><span className='self-center'><MdSell/></span><span>Conditions générales de vente</span></p>
            </Link>
          </div>
        
          <div className='pl-7 pt-4 basis-1/2'>
            <h4 className={`text-ecru tracking-wide mb-4 ${mitr.className}`}>Mon atelier</h4>
            <p className='text-white flex gap-1.5'><span className='self-center'><TiLocation/></span><span>Grand Mas d'Avignon, Le Sambuc 13200 Arles</span> </p>
            <p className='text-white flex gap-1.5'><span className='self-center'><AiOutlinePhone/></span><span>04 90 87 88 74</span></p>
            <Link href='/contact' className='no-underline'><p className='text-white flex gap-1.5'><span className='self-center'><MdAlternateEmail/></span> Me contacter par e-mail.</p></Link>
          </div>            
        </section>
        <p className={`text-center mb-0 py-2 tracking-wider text-ecru font-bold ${lato.className}`}>&copy; Votha Chheng</p> 
    </footer>

  )
}

export default Footer