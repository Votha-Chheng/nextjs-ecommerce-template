'use client'

import { motion } from 'framer-motion'
import React, { FC } from 'react'
import Separateur from '@/components/sharedUI/Separateur'
import { Billet } from '@/@types/billet'
import Link from 'next/link'
import BlogCard from './BlogCard'
import { mitr } from '../../../fonts/mitr'
import { sortByDate } from '@/utils/sortBydate'

type BlogScreenProps = {
  billets : Billet[]
}

const BlogScreen: FC<BlogScreenProps> = ({ billets }) => {
  const shapeAnimation = {
    initial : {
      opacity : 1
    },
    animate : {
      opacity : 1,
      transition : {
        delay : 1,
        delayChildren : 2, 
        staggerChildren : 0.3
      }
    }
  }

  const shapeTranslation3 = {
    initial: {
      y : 80,
      x:-100,
    },
    animate : {
      y:-20,
      x:180,
      transition : {
        duration : 4
      }
    }
  }
  const shapeTranslation2 = {
    initial: {
      y : -300,
      x:-180,
    },
    animate : {
      y:-20,
      x:180,
      transition : {
        duration : 3
      }
    }
  }
  const shapeTranslation1 = {
    initial: {
      y : -300,
      x: 180,
    },
    animate : {
      y:-20,
      x:180,
      transition : {
        duration : 2
      }
    }
  }
  
  const billetsSortedByNewer: Billet[] = sortByDate(billets, 'newer') as Billet[]

  return (
    <main className='w-full relative'>
      <div className="absolute w-full h-36 bg-beige -z-10"/>
      <div className='z-10 h-36 py-5 px-0 mb-12 overflow-hidden'>
        <div className='relative w-52 my-0 mx-auto'>
          <motion.div variants={shapeAnimation} initial='initial' animate='animate' className='shape'>
            <motion.div variants={shapeTranslation1} className='w-20 h-40 bg-buff -z-10 absolute border-1 border-white'/>
            <motion.div variants={shapeTranslation2}  className='w-20 h-40 bg-ash -z-10 absolute border-1 border-white top-4 -left-2.5'/>
            <motion.div variants={shapeTranslation3} className='w-20 h-40 bg-navajo -z-10 absolute border-1 border-white top-8 -left-5'/>
          </motion.div>
          <h2 className={`text-center mt mx-auto z-50 ${mitr.className}`}>Blog</h2> 
        </div>
        <Separateur/>
      </div>
      <div className='flex w-[1230px] my-0 mx-auto'>
        <section className='w-[220px] h-full py-0 px-4 border-l-2 border-l-platinum rounded-lg'>
          <h5 className='p-2.5 leading-8 text-center mb-8 bg-platinum rounded-sm'>Les articles par titre</h5>
          <div className='flex flex-col'>
            {
              billets && billetsSortedByNewer.map((billet: Billet, index: number)=> (
                <Link href={`/blog/${billet._id}`} key={index} className='no-underline mt-2.5 py-1.5 px-2.5 hover:bg-silver transition-colors duration-200 ease-out rounded-md'>
                  {billet.titre}
                </Link>  
              ))
            }   
          </div>
             
        </section>

        <section className='w-[1000px] border-l-2 border-platinum'>
          {
            billets && billets.map((billet: Billet, index: number)=>
              <div key={index} className='last:mb-0 border-b-0 mb-5 p-4'>
                <BlogCard billet={billet} />
              </div> 
            )
          } 
        </section>
      </div>
    </main>
  )
}

export default BlogScreen
