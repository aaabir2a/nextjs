"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'></Link>
        <Image
        src="/public/assets/images/logo.svg"
        alt="Promptopia Logo"
        width={30}
        height={30}
        className='object-contain'
        />
        <p className='logo-text'>AI Prompt</p>

    </nav>
  )
}

export default Nav