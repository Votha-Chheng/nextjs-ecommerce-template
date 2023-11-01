import React, { FC } from 'react'
import { lato } from '../../../../fonts/lato'

type ParagrapheTexteProps = {
  texte: string
  titreParagraphe?: string
}

const ParagrapheTexte: FC<ParagrapheTexteProps> = ({texte, titreParagraphe}) => {

  return (
    <>
      <h5>{titreParagraphe}</h5>
      <div className={`indent-9 ${lato.className} text-justify`} dangerouslySetInnerHTML={{__html : texte}} />
    </>
  )
}

export default ParagrapheTexte