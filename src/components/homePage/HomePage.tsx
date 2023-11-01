'use client'

import React, { FC } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { carre1Anim, carre2Anim, carre3Anim, carre4Anim, rondAnim, titleAnim } from '@/animations/homePageAnimations'
import HomePagePhotos from './HomePagePhotos'
import { laBelleAurore } from '../../../fonts/laBelleAurore'
import { lato } from '../../../fonts/lato'

const Home: FC = () => {
  return (
    <main className="min-h-screen overflow-hidden relative">
      <motion.div variants={rondAnim} initial="hidden" animate='show'>
        <div className='absolute'>
          <Image className='rond' src="/images/Group_1.svg" alt="rond" width={900} height={720} />
        </div>
      </motion.div>
      
      <motion.div variants={titleAnim} initial="left" animate='set' id="conteneur-texte">
        <div className='absolute left-12 top-52'>
          <h2 className={`text-7xl ${laBelleAurore.className}`}>
            <span>Lampes en</span> 
            <span> bois flotté</span>
          </h2>
          <h3 className={`pt-4 leading-10 ${lato.className}`}>Créations 100% originales<br/>Fabrication 100% artisanale</h3>
          <Link href='/produits'>
            <button className='my-5 uppercase text-lg text-center p-3 bg-oxford-blue text-white ml-5 rounded'>Voir les produits</button>
          </Link>
        </div>
      </motion.div>
      <motion.div id='carre-1' className="carre" variants={carre1Anim} initial='start' animate='end' >
      </motion.div>
      <motion.div id='carre-2' className="carre" variants={carre2Anim} initial='start' animate='end'>
      </motion.div>
      <motion.div id='carre-3' className="carre" variants={carre3Anim} initial='start' animate='end'>
      </motion.div>
      <motion.div id='carre-4' className="carre" variants={carre4Anim} initial='start' animate='end'>
      </motion.div>
      <HomePagePhotos/>
    </main>
  )
}

// const Wrapper = styled.section`

//   @media only screen and (max-width: 1450px){
//     #carre-2{
//       right: 100px;
//       width: 380px;
//     }
//      #carre-3{
//       width: 230px;
//       height: 580px;
//     } 
//     #carre-4{
//       top:700px;
//       width: 500px;
//       height: 100px;
//     }
//   }
//   @media only screen and (max-width: 1130px){
//     .rond{
//       width:750px;
//     }
//     h2{
//       font-size: 3em;
//     }
//     h3{
//       font-size: 1.5em;
//       line-height: 25px;
//     }
//   }
//   @media only screen and (max-width: 1040px){
//     #carre-1{
//       height: 900px;
//     }
//     #carre-3,#carre-2, #carre-4{
//       height: 250px;
//       width: 250px
//     }
//     #carre-2{
//       right: 140px;
//       top:320px;
//     }
//     #carre-3{
//       top:300px;
//       right:120px;  
//     }
//     #carre-4{
//       top:280px;
//       right:100px; 
//     }
//     .rond{
//       margin-top:70px;
//       width:700px;
//     }
//     #conteneur-texte{
//       top:248px;
//     }
//   }
//   @media only screen and (max-width: 825px){
//     main{
//       min-height: 600px;
//     }
//     .rond{
//       width:500px;
//       margin:120px auto;
//     }
//     #carre-1{
//       height:750px;
//     }
//     #carre-2,#carre-3,#carre-4{
//       transform:scale(0.8) translateX(65px) translateY(65px)
//     }
//     h2{
//       font-size: 2.5em;
//     }
//     h3{
//       font-size: 1.2em;
//       line-height: 25px;
//     }
//     button{
//       margin: 10px auto;
//       font-size: 1.1em;
//     }
//   }
//   @media only screen and (max-width: 665px){
//     main{
//       min-height: 780px;
//     }
//     .rond{
//       margin-left:-20px;
//       max-width:340px;
//     }
//     #carre-2,#carre-3,#carre-4{
//       display:none;
//     }
//     #conteneur-texte{
//       left:10px;
//       text-align: center;
//     }
//     h2{
//       font-size: 2.4em;
//       font-weight: bold ;
//     }
//     h3{
//       padding-top:0px;
//       font-size: 1em;
//       line-height: 20px;
//     }
//     button{
//       margin: 10px auto;
//       font-size: 1.1em;
//     }
//     #carre-1{
//       right:10px
//     }
//   }
// `

export default Home
