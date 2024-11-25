"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signOut } from 'next-auth';



const Nav = () => {
    const isUserLoggedIn = true;
    const [provider,setProvider] = useState(null);
    useEffect(()=>{
        const setProvider = async () =>{
            const response =await getProviders();
            setProvider(response)
        }
        setProvider();
    },[])


  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
        <Image
        src="/assets/images/logo.svg"
        alt=""
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="logo-text">AI Prompt</p>
        </Link>

        {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
                <Link href="/create-prompt" className="black_btn">Create Post</Link>
                <button type="button" onClick={signOut} className="outline_btn">Sign OUt</button>
                <Link href="/profile">
                <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                classsName="rounded-full"
                alt="profile"
                />
                </Link>
            </div>
        ):(
            <>
            </>
        )}

    </nav>
  )
}

export default Nav