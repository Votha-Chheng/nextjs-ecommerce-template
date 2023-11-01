'use client'

import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import Image from 'next/image' 
import Dropdown from './Dropdown'
import { Position } from '@/@types/position'
import Logo from './Logo'
import Utils from './Utils'
import useWindowDimensions from '@/hooks/useWindowDimensions'

const Header = () => {
  const [show, setShow] = useState(true)
  const [mount, setMount] = useState(false)

  const { widthDimension } = useWindowDimensions()

  useEffect(() => {
    setMount(true)

  },[])

  const handleBurger = ()=>{
    setShow(!show)
  }

  const showBurger = (): Position =>{
    let position: Position = {
      burger : '',
      cross : '',
      dropdown : '',
      li : ''
    }

    if(show){
      position.burger = 'visible'
      position.cross = 'non-visible'
      position.dropdown = ''
      position.li = ''      
    } else {
      position.burger = 'non-visible'
      position.cross =  'visible'
      position.dropdown = 'down'
      position.li = 'fade'
    }
    return position
  }

  if(!mount) return null

  return (
    <header className='bg-oxford-blue flex w-full justify-between'>
      <div className={`basis-1/3 self-end mb-3 ${widthDimension >1300 ? "block":"hidden"}`}>
        <Menu/>
      </div>
      <div className={`${widthDimension <1300 ? "block":"hidden"}`} onClick={handleBurger}>
        <Image src='/images/Hamburger_icon.svg' alt='burger-menu' width={50} height={50} />
      </div>
      <div className='basis-1/3 flex justify-center '>
        <Logo/>
      </div>
      <div className='flex justify-end basis-1/3 self-end mr-20 mb-3 z-50'>
        <Utils/>
      </div>
      <div className={`absolute z-40 ${widthDimension<1300 ? "block":"hidden"}`} style={{top:"145px"}}>
        <Dropdown classProps={showBurger()} clic={handleBurger}/>    
      </div>
    </header>
  )
}

export default Header
