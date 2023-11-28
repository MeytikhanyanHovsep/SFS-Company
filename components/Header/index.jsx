"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoImg from "@/public/logo.png"
import { usePathname } from 'next/navigation'

function Header() {
    const pathName = usePathname().slice(1)
    const pages = ["Services", "Portfolio", "About Us", "Blog", "Contacts"]
    return (
        <header className='w-full relative'>
            <nav className='container pt-[35px] flex justify-between items-center'>
                <Link href="/"><Image alt='SFS-School' width={ 200 } height={ 200 } src={ logoImg } className="w-[100px] object-contain" /></Link>
                <ul className='flex text-[16px] text-[#181a25] gap-[55px] items-center justify-center'>
                    { pages.map((elm, ind) => (
                        <li key={ ind }><Link href={ "/" + elm.toLowerCase().replaceAll(" ", "-") } className={ `text-[#181A25] text-[16px] font-[${ pathName == elm.toLowerCase().replaceAll(" ", "-") ? 5 : 4 }00]` }>{ elm }</Link></li>
                    )) }
                </ul>
                <Link href="/registration" className='px-[35px] py-[7px] text-[#f301d2] border-[1px] border-[#f301d2] rounded-[5px] text-[16px] hover:text-[#fff] hover:bg-[#f301d2] transition-all duration-200'>Log In</Link>
            </nav>
            <Image alt='' width={ 500 } height={ 500 } src="/designDetailsImages/headerDetail.png" className="absolute right-0 top-0 max-w-[365px] lg:max-w-[300px] object-contain z-[-1]" />
        </header>
    )
}

export default Header