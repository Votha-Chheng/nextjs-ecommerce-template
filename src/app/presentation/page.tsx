import { motion } from 'framer-motion'
import React, { FC } from 'react'
import Image from 'next/image'
import { mitr } from '../../../fonts/mitr'
import { lato } from '../../../fonts/lato'
import Separateur from '@/components/sharedUI/Separateur'

const PresentationScreen: FC = () => {
  return (
    <main className='w-[1000px] my-14 mx-auto leading-8 pb-24'>
      <h2 className={`text-center mb-16 ${mitr.className}`}>Qui suis-je ?</h2>
      <Separateur/>
      <br/>
      <br/>
      <h5 className={`px-4 text-justify tracking-wide text-lg indent-5 font-bold ${lato.className}`}>Bonjour,</h5>
      <p className={`px-4 my-5 tracking-wide text-justify text-lg indent-5 ${lato.className}`}>
        Je suis un jeune artisan, qui s'est lancé en 2018 dans la création de luminaires en bois flottés. Au gré de mes essais, découvertes et créa&shy;tions j'ai développé cer&shy;tains styles origi&shy;naux. J'ai souhaité dès le début sortir des modèles clas&shy;siques empilant simple&shy;ment des bois. Les bois flottés ne manquent pas sur les plages ou au bord des fleuves. Je recherche avant tout des bois aux formes irrégu&shy;lières, si&shy;nueuses et marqués par les élé&shy;ments afin de les mettre en scènes pour des lampes uniques. L'idée est qu'elles soient autant utile dans leur rôle de lampes qu'objet déco&shy;ratif. Cer&shy;taines res&shy;sem&shy;blent à des sculp&shy;tures, d'au&shy;tres per&shy;met&shy;tent des jeux d'ombres et lu&shy;mières, d'au&shy;tres re&shy;flètent notre imagi&shy;naire.
      </p>
      <p className={`px-4 my-5 tracking-wide text-justify text-lg indent-5 ${lato.className}`}>
        Petit à petit je me suis tourné vers des maté&shy;riaux de récu&shy;pération et des bois bruts pour répondre à mes nou&shy;velles idées.
      </p>
      <p className={`px-4 my-5 tracking-wide text-justify text-lg indent-5 ${lato.className}`}>
        J'avance pas à pas dans cette aventure, et après plusieurs mois à dé&shy;velopper mon activité, je lance maintenant ce site internet afin de faire découvrir mon travail et vous proposer mes cré&shy;ations. N'hésitez pas à me contacter pour des infor&shy;ma&shy;tions complémen&shy;taires sur celles-ci.
      </p>

      <p className={`px-4 mb-3 tracking-wide text-lg indent-5 text-right ${lato.className}`}>Bonne visite.</p>
      <p className={`px-4 my-5 tracking-wide text-lg indent-5 text-right ${lato.className}`}>François</p>
      <div className='mt-20 w-[1000px] flex flex-wrap justify-center gap-3'>
        <Image priority src="/images/IMG_20180415_0044.jpg" width={450} height={450} alt='mes outils'/>
        <Image priority src="/images/IMG_20180415_0042.jpg" width={450} height={450} alt='en plein travail'/>
        <Image priority src="/images/IMG_20180415_0038.jpg" width={450} height={450} alt='en plein travail'/>
        <Image priority src="/images/IMG_20180415_0043.jpg" width={450} height={450} alt='devant mon petit entrepôt'/>
      </div>
      
      
    </main>
  )
}

export default PresentationScreen
