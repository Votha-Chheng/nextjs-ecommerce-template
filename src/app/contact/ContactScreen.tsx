'use client'

import { sendEmailToMe } from '@/controllers/email'
import React, { useState, MouseEvent, FC, useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import FormContact from './FormContact'
import { emailToMeTemplate } from '@/utils/emailToMeTemplate'
import { mitr } from '../../../fonts/mitr'
import LoaderSpin from '@/components/sharedUI/Loader'
import BackButton from '@/components/sharedUI/BackButton'


const ContactScreen: FC = () => {

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState<string>('Renseignement sur un produit')
  const [message, setMessage] = useState<string>('')
  const [captcha, setCaptcha] = useState<string|null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [emailSent, setEmailSent] = useState<boolean>(false)

  const [errorMessage, setErrorMessage] = useState('')

  const captchaRef = useRef<ReCAPTCHA>(null)


  const validateForm = (): boolean=> {
    return (email !== "" && subject!=='' && message !=='') ? true : false
  }

  const submitHandler = async ()=>{
    setErrorMessage('')
    setLoading(true)

    if(captcha && validateForm()){
      const res = await sendEmailToMe({subject, html: emailToMeTemplate(message, subject, email)}, captcha)

      if(res.data !== "Empty"){
        setLoading(false)
        captchaRef.current && captchaRef.current.reset()
        setEmailSent(true)
        setCaptcha(null)
      } else {
        setLoading(false)
        setErrorMessage(res.message)
      }
    }
  }

  return (
    <main className='w-[700px] mx-auto py-16 '>
      <h2 className={`text-center mt-5 mb-24 ${mitr.className}`}>Me contacter</h2>
      {
        loading
        ?
        <div className='h-96'>
          <LoaderSpin/>
        </div>
        :
        emailSent
        ?
        <div className='w-full h-96 text-center flex flex-col items-center gap-y-3'>
          <h3>Votre message a bien été envoyé !</h3>
          <BackButton href="produits" message='Retour à la boutique' position='block' />
        </div>
        :
        <>
          <FormContact message={message} email={email} subject={subject} setEmail={setEmail} setMessage={setMessage} setSubject={setSubject} />
          {
            errorMessage !== "" &&
            <h4 className='text-red text-base my-2.5'>{errorMessage}</h4>
          }
          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={setCaptcha} ref={captchaRef} />
        </>
      }

      {
        !emailSent &&
        <button type='button' disabled={!captcha || loading || !validateForm()} className={`btn btn-primary btn-block mt-2`} onClick={()=>submitHandler()} >
          {
            loading
            ?
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
            :
            "Envoyer votre message"
          }  
        </button>
      }
    </main>
  )
}

export default ContactScreen
