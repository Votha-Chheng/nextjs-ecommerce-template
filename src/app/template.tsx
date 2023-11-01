'use client'

import { pageTransition } from '@/animations/pageTransition'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode}) {
  return (
    <motion.div
      variants={pageTransition} 
      initial='initial' 
      animate='animate' 
      exit='exit' 
      className='relative'
    >
      {children}
    </motion.div>
  )
}