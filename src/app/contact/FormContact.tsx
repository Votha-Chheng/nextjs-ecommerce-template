'use client'

import React, { Dispatch, FC, FormEvent, SetStateAction } from 'react'
import { cabin } from '../../../fonts/cabin'
import { lato } from '../../../fonts/lato'

type FormContactProps = {
  setEmail: Dispatch<SetStateAction<string>>
  setSubject: Dispatch<SetStateAction<string>>
  setMessage: Dispatch<SetStateAction<string>>
  email: string
  subject: string
  message: string
  
}

const FormContact: FC<FormContactProps> = ({ email, subject, message, setEmail, setMessage, setSubject }) => {
  return (
    <div className='w-full flex flex-col items-start mx-auto mb-6 border-1 border-oxford-blue p-5 rounded-md'>
      <div className='flex flex-col mt-6'>
        <label className={`pl-1 font-bold ${cabin.className}`} htmlFor='email'>Votre adresse e-mail</label>
        <input className='w-[600px] border-2 border-platinum rounded-sm p-2' id='email' type='email' value={email} onChange={(event: FormEvent<HTMLInputElement>)=>setEmail(event.currentTarget.value)} required/>
      </div>
    
      <div className='flex flex-col mt-6'>
        <label className={`pl-1 font-bold mt-6 mb-2.5 ${cabin.className}`} htmlFor='sujet'>Sélectionnez le sujet de votre e-mail</label>
        <select className={`w-[600px] p-1.5 border-2 border-platinum rounded-sm text-base ${lato.className}`} id='sujet' value={subject} onChange={(event: FormEvent<HTMLSelectElement>)=>setSubject(event.currentTarget.value)}>
          <option className={`text-base ${lato.className}`} value='Renseignement sur un produit'>Renseignement sur un produit</option>
          <option className={`text-base ${lato.className}`} value="Renseignement relatif à la livraison d'un produit">Renseignement relatif à la livraison d'un produit</option>
          <option className={`text-base ${lato.className}`} value='Information pour une lampe à faire sur mesure'>Information pour une lampe à faire sur mesure</option>
          <option className={`text-base ${lato.className}`} value='Autres'>Autres...</option>
        </select>
      </div>
      <div className='flex flex-col mt-5' >
        <label className={`font-bold mb-2 ${cabin.className}`} htmlFor='message'>Votre message</label>
        <textarea  className='w-[600px] h-[300px] p-2.5 border-2 border-platinum rounded-sm' id='message' value={message} onChange={(event: FormEvent<HTMLTextAreaElement>)=>setMessage(event.currentTarget.value)} required/>
      </div>
    </div>
  )
}

export default FormContact