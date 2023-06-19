import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../images/logo-white2.png'
import { useMediaQuery } from 'react-responsive'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [isOpen, setIsOpen] = useState(false)
  const [transparent, setTransparent] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      setTransparent(true)
    } else {
      setTransparent(false)
    }
  }, [router.pathname])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll() {
    const header = document.querySelector('.header')
    if (window.scrollY > 0) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
    }
  }

  return !isMobile ? (
    <div
      className={`header fixed z-20 h-32 w-full font-sans ${
        router.pathname === '/' ? 'transparent' : 'bg-black'
      }`}
    >
      <div className='mx-auto max-w-screen-xl'>
        <div className='flex justify-between'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='logo'
              placeholder='blur'
              className='mx-4 h-36 w-36 object-cover'
            />
          </Link>
          <div className='flex px-10 py-12'>
            <Link
              scroll={false}
              href='/#accueil'
              className='mx-2 whitespace-nowrap text-2xl font-semibold uppercase text-white no-underline'
            >
              accueil
            </Link>
            <Link
              scroll={false}
              href='/#a-propos'
              className='mx-2 whitespace-nowrap text-2xl font-semibold uppercase text-white no-underline'
            >
              à propos
            </Link>
            <Link
              href='/'
              className='mx-2 whitespace-nowrap text-2xl font-semibold uppercase text-white no-underline'
            >
              projets
            </Link>
            <Link
              href='contact'
              className='mx-2 whitespace-nowrap text-2xl font-semibold uppercase text-white no-underline'
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`header fixed z-20 w-full font-sans ${
        router.pathname === '/' ? 'transparent' : 'bg-black'
      }`}
    >
      <div className='mx-auto max-w-screen-xl'>
        <div className='flex justify-between'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='logo'
              placeholder='blur'
              className='mx-1 h-16  w-16 object-cover'
            />
          </Link>
          <div className='-ml-[100vw] flex'>
            {isOpen ? (
              <div className='flex h-screen w-screen flex-col bg-black text-center opacity-80'>
                <div className='justify-between'>
                  <div />
                  <IoMdClose
                    size={32}
                    className='float-right m-3 cursor-pointer text-white'
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                <Link
                  scroll={false}
                  href='/#accueil'
                  onClick={() => setIsOpen(false)}
                  className='mx-2 my-4 text-2xl font-semibold uppercase text-white no-underline'
                >
                  accueil
                </Link>
                <Link
                  scroll={false}
                  href='/#a-propos'
                  onClick={() => setIsOpen(false)}
                  className='mx-2 my-4 text-2xl font-semibold uppercase text-white no-underline'
                >
                  à propos
                </Link>
                <Link
                  href='/'
                  className='mx-2 my-4 text-2xl font-semibold uppercase text-white no-underline'
                >
                  projets
                </Link>
                <Link
                  href='contact'
                  onClick={() => setIsOpen(false)}
                  className='mx-2 my-4 text-2xl font-semibold uppercase text-white no-underline'
                >
                  contact
                </Link>
              </div>
            ) : (
              <GiHamburgerMenu
                size={32}
                className='m-3 cursor-pointer text-white'
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
