import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import emailjs from 'emailjs-com'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
  const [message, setMessage] = useState(false)

  const form = useRef()
  const sendEmail = (e: any) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_p8f68rz',
        'template_ixeh0fe',
        form.current as any,
        '-xo0bQBMsXWq4CwN9'
      )
      .then()
    e.target.reset()
    setMessage(true)
    setTimeout(() => {
      setMessage(false)
    }, 3000)
  }

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(false)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [message])

  return (
    <div className='max-w-screen-3xl font-sans'>
      <Head>
        <title>Contact - Custom Peinture et Nettoyage</title>
        <meta
          name='description'
          content='Contact us - Service de NETTOYAGE et de PEINTURE RÉSIDENTIEL'
        />
        <meta
          name='keywords'
          content='Montréal, nettoyage, peinture résidentiel, cleaning, house painting, contact'
        />
        <meta
          name='author'
          content='Marco Antonio'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.png'
        />
      </Head>

      <div className='flex'>
        <div className='mx-auto gap-11 pt-20 md:flex md:pt-36'>
          <div className='max-w-xs'>
            <h2 className='max-w-sm text-2xl'>
              Appelez-nous ou remplissez le formulaire pour démarrer votre
              projet.
            </h2>
            <form
              ref={form as any}
              onSubmit={sendEmail}
              className='flex max-w-sm flex-col'
            >
              <label className='flex gap-2'>
                <input
                  className='my-1 max-w-[49%] rounded border-[1px] bg-gray-200 px-3 py-3 outline-none focus:border-gray-400'
                  id='name'
                  type='text'
                  placeholder='Name'
                  name='name'
                  required
                />
                <input
                  className='my-1 max-w-[49%] rounded border-[1px] bg-gray-200 px-3 py-3 outline-none focus:border-gray-400'
                  id='email'
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  required
                />
              </label>
              <label>
                <input
                  className='my-1 block w-full rounded border-[1px] bg-gray-200 px-3 py-3 outline-none focus:border-gray-400'
                  id='subject'
                  type='text'
                  placeholder='Subject'
                  name='subject'
                  required
                />
                <textarea
                  className='my-1 w-full resize-none rounded border-[1px] bg-gray-200 px-3 py-3 outline-none focus:border-gray-400'
                  id='message'
                  placeholder='Message'
                  name='message'
                  required
                />
              </label>
              <button
                className='duration-250 my-1 rounded bg-orange-500 py-2 font-semibold text-white transition-all ease-in hover:bg-orange-600 active:bg-orange-700'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
          <div className='my-4 max-w-xs'>
            <h2 className='text-base font-semibold uppercase'>
              contactez-nous
            </h2>
            <a href='https://wa.me/15147108532'>
              <div className='flex'>
                <BsWhatsapp
                  size={14}
                  className='mt-1'
                />
                <h2 className='ml-0.5 flex text-sm font-normal'>Whatsapp</h2>
              </div>
            </a>
            <hr />
            <h2 className='text-base font-semibold uppercase'>appelez-nous</h2>
            <a href='tel:+1 (514) 710-8532'>
              <div className='flex'>
                <AiOutlinePhone
                  size={18}
                  className='-ml-0.5 mt-0.5'
                />
                <h2 className='flex text-sm font-normal'>+1 (514) 710-8532</h2>
              </div>
            </a>
            <hr />
            <h2 className='text-base font-semibold uppercase'>
              envoyez-nous un email
            </h2>
            <a href='mailto:docmarques@yahoo.com'>
              <div className='flex'>
                <AiOutlineMail
                  size={16}
                  className='mt-0.5'
                />
                <h2 className='ml-0.5 flex text-sm font-normal'>
                  docmarques@yahoo.com
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
