import React, { FC } from 'react'
import { Billet } from '@/@types/billet'
import ImageFormat from '@/components/sharedUI/ImageFormat'
import { formatDate } from '@/utils/formatDate'
import { resumerTexte } from '@/utils/resumerTexte'
import Link from 'next/link'
import { indieFlower } from '../../../fonts/indieFlower'
import { oswald } from '../../../fonts/oswald'
import { cabin } from '../../../fonts/cabin'
import Separateur from '@/components/sharedUI/Separateur'
import { getFirstImageOfElement } from '@/utils/getFirstImageOfElement'
import { getFirstParagrapheOfElement } from '@/utils/getFirstParagrapheOfElement'

type BlogCardProps = {
  billet: Billet
}

const BlogCard: FC<BlogCardProps> = ({ billet }) => {
  return (
    <section className='border-r-2 border-platinum'>
      <Link href={`/blog/${billet._id}`} style={{ textDecoration: 'none' }}>
        <h4 className={`text-center border-b-1 border-violet pb-2.5  ${indieFlower.className}`}>
          <span className='hover:bg-gray-200 p-2.5 rounded-md transition-colors duration-200 ease-out'>{billet.titre}</span>
        </h4>
      </Link>
      <div className='flex py-6 border-b-2 border-platinum mr-4'>
        <div className='my-0 mx-auto w-80 h-80 overflow-hidden'>
          <Link href={`/blog/${billet._id}`}>
            {
              billet && 
              <ImageFormat imageUrl={getFirstImageOfElement(billet).url} aspectRatio={getFirstImageOfElement(billet).aspectRatio} size='l' />
            }
          </Link>
        </div>
        <div className='w-3/5 pl-5 border-l-2 border-platinum'>
          <h5 className={`pb-2.5 ${indieFlower.className}`}>
            {billet.sousTitre}
          </h5>
          <div className={`my-2.5 mx-0 font-bold ${oswald.className}`}>Ecrit le {billet.createdAt && formatDate(billet.createdAt)}</div>
          <div 
            className={`my-5 mx-0 text-sm ${cabin.className}`}
            dangerouslySetInnerHTML={{__html : resumerTexte(getFirstParagrapheOfElement(billet), 175)}}
          />
          <Link href={`/blog/${billet._id}`}> 
            <div className='italic text-base'>Lire la suite</div>
          </Link>
        </div>
      </div>
      <Separateur/>
    </section>
  )
}

export default BlogCard
