'use client'

import { photoDisplay, photosAnim } from '@/animations/homePageAnimations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'

const HomePagePhotos: FC = () => {
  return (
    <section className='absolute right-10'>
      <motion.div id="images-presentation" variants={photosAnim} initial="hidden" animate='set' >
        <motion.div variants={photoDisplay}>
          <div style={{position: "relative", width:"380px", height:"380px"}}>
            <Image id="image-front-4" className="image-front" src='/images/couv_4.jpg' width={380} height={380} alt="front-4" />
          </div>
        </motion.div>
        <motion.div variants={photoDisplay}>
          <Image id="image-front-3" className="image-front" src='/images/9902ADA5-15E4-4FAD-958A-1CD870D121BF_1_105_c2.jpeg' width={400} height={400} alt="front-3" />
        </motion.div>
        <motion.div variants={photoDisplay}>
          <Image id="image-front-1" className="image-front" src='/images/photoeffets.com_.jpg' width={375} height={375} alt="front-1" />
          </motion.div>
        <motion.div variants={photoDisplay}>
          <Image id="image-front-2" className="image-front" src='/images/photoeffets.com_ (2).jpg' width={325} height={325} alt="front-2"/>
        </motion.div>
      </motion.div>
    </section>
  )
}

// const Frame = styled.section`

//   @media only screen and (max-width: 1450px){
//     #image-front-2{
//       top:328px;
//       right : 40px;
//       transform:scale(1)
//     }
//     #image-front-1{
//       transform:scale(0.78);
//       right : 15px
//     }
//     #image-front-3{
//       transform:scale(0.8);
//       right : 270px;
//       top:270px;
//     }
//     #image-front-4{
//       transform:scale(0.8);
//       top:510px;
//       right : 230px;
//     }
//   }
//   @media only screen and (max-width: 1040px){
//     #image-front-1{
//       transform:scale(0.65);
//       top:-40px;
//       right : 15px
//     }
//     #image-front-2{
//       top:216px;
//       right : 40px;
//       transform:scale(0.75)
//     }
//     #image-front-3{
//       transform:scale(0.61);
//       right : 3px;
//       top:435px;
//     }
//     #image-front-4{
//       transform:scale(0.61);
//       top:635px;
//       right : 3px;
//     }
//   }
//   @media only screen and (max-width: 825px){
//     #image-front-1{
//       transform:scale(0.5);
//       top:40px;
//       right : -50px;
//     }
//     #image-front-2{
//       top:216px;
//       right : 0px;
//       transform:scale(0.57);
//       z-index:0;
//     }
//     #image-front-3{
//       transform:scale(0.48);
//       right : -60px;
//       top:365px;
//       z-index:0;
//     }
//     #image-front-4{
//       transform:scale(0.48);
//       top:510px;
//       right : -38px;
//     }
//   }
//   @media only screen and (max-width: 665px){
    
//     #image-front-1{
//       top:-40px;
//       right : -50px;
//     }
//     #image-front-2{
//       display:none;
//     }
//     #image-front-3{
//       transform:scale(0.58);
//       right : 150px;
//       top:375px;
//     }
//     #image-front-4{
//       transform:scale(0.58);
//       top:555px;
//       right : -38px;
//     }
//   }
//   @media only screen and (max-width: 500px){
//     #image-front-1{
//       right:auto;
//     }
//     #image-front-3{
//       right : auto;
//       top:405px;
//     }
//     #image-front-4{
//       top:580px;
//       right : 0px;
//       z-index:0 ;
//     }
//   }
// `

export default HomePagePhotos