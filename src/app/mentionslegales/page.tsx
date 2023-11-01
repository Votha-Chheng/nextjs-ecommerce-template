import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { lato } from '../../../fonts/lato'
import { oswald } from '../../../fonts/oswald'
import { mitr } from '../../../fonts/mitr'

const MentionsLegalesPage: FC = () => {
  return (
    <main className='w-3/5 mx-auto' >
      <h2 className={`text-center my-12 mb-32 ${mitr.className}`}>
        Mentions Légales
      </h2>
        <ul className='list-none'>
          <li className={`text-lg tracking-wide ${oswald.className}`}><em className='font-weight-bold'>Les Luminaires Cavallo</em> par <b>François Cavallo</b>, micro-entrepreneur</li>
          <li className={`text-lg tracking-wide ${oswald.className}`}>Siège social : Grand Mas d'Avignon, Le Sambuc 13200 Arles</li>
          <li className={`text-lg tracking-wide ${oswald.className}`}>Email : <a href="mailto:contact@luminaires-cavallo.fr">contact@luminaires-cavallo.fr</a></li>
          <li className={`text-lg tracking-wide ${oswald.className}`}>TVA non applicable, art. 293B du CGI</li>
          <li className={`text-lg tracking-wide ${oswald.className}`}>N°SIRET : 82812114500019</li>
        </ul>
      <br/>
        <ul className='list-none'>
          <li>
            <span className={`font-weight-bold text-md font-bold my-5 ${lato.className}`}>Photographies:</span> <br/>
            <p className={`text-md ${lato.className}`}>Tous les contenus, images, photographies, vidéos, dessins, logos sont la propriété de François Cavallo.</p>
          </li>
          <li className='text-base my-5'>
            <span className={`font-weight-bold text-md font-bold my-5 ${lato.className}`}>Propriété intellectuelle :</span> <br/>
            <p>Le site internet, les photos, le texte, sont la propriété exclusive de François Cavallo. Toute représentation partielle ou totale du site est strictement interdite.</p>
          </li>
          <li className='text-base my-5'>
            <span className={`font-weight-bold text-md font-bold my-5 ${lato.className}`}>Droit applicable :</span> <br/>
            <p>Le présent site est soumis au droit français.</p>
          </li>
          <li className='text-base my-5'>
            <span className={`font-weight-bold text-md font-bold my-5 ${lato.className}`}>Conception du site :</span><br/>
            <p>Votha Chheng</p>
          </li>
          <li className='text-base my-5'>
            <p className={`font-weight-bold text-md font-bold my-5 ${lato.className}`}>Hébergé par Vercel<sup>&#174;</sup></p>
          </li>
        </ul>
      <br/>
        
    </main>
  )
}

// const Wrapper = styled(motion.div)`
  
//   li p, li span {
//     font-size: 1.1em;
//   }
// `

export default MentionsLegalesPage
