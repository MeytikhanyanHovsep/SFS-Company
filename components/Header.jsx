"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logoImg from "@/public/logo.png"
import burgerImg from "@/public/burger-menu.png"
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathName = usePathname().slice(1)
    const pages = ["Services", "Portfolio", "About Us", "Blog", "Contacts"]
    const [menuToggle, setMenuToggle] = useState(false)

    useEffect(() => setMenuToggle(false), [pathName]);

    return (
        <header className='w-full relative'>
            <nav className='container pt-[35px] sm:pt-[20px] flex justify-between items-center'>
                <Link href="/"><Image alt='SFS-School' width={ 200 } height={ 200 } src={ logoImg } className="w-[100px] object-contain sm:max-w-[80px]" /></Link>
                <ul className={ `flex transition-all top-0 right-0 text-[16px] text-[#181a25] gap-[55px] sm:gap-[30px] sm:pt-[120px] md:bg-gradient-to-r to-[#b7c2ee] from-[#fbc0e9] items-center justify-center md:fixed ease-linear md:flex-col md:z-[100] duration-[0.3s] ${ menuToggle ? "md:w-full md:h-full md:pl-[30px] sm:pl-[10px] md:rounded-es-full md:shadow-xl md:py-[150px] " : "md:w-0 md:opacity-0 md:h-0 overflow-hidden" }` }>
                    { pages.map((elm, ind) => (
                        <li key={ ind }><Link href={ "/" + elm.toLowerCase().replaceAll(" ", "-") } className={ `text-[#181A25] md:text-white md:text-[25px] text-[16px] font-[${ pathName == elm.toLowerCase().replaceAll(" ", "-") ? 5 : 4 }00]` }>{ elm }</Link></li>
                    )) }
                    <li className='hidden md:block top-[30px] right-[30px] absolute'><button className={ `relative w-10 h-10 transition-all duration-[0.3s] ${ !menuToggle && "opacity-0" }` } onClick={ () => setMenuToggle(false) }>
                        <span className="h-[3px] left-0 w-10 absolute rotate-45 bg-white"></span>
                        <span className="h-[3px] left-0 w-10 absolute -rotate-45 bg-white"></span>
                    </button></li>
                </ul>
                <div className='flex gap-[30px] sm:gap-[15px] justify-center items-center'>
                    <button className="hidden md:block focus:outline-none" onClick={ () => setMenuToggle(true) }>
                        <Image src={ burgerImg } alt='menu' width={ 100 } height={ 100 } className='max-w-[50px] xs:max-w-[45px] object-contain' />
                    </button>
                    <Link href="/registration" className='px-[35px] sm:px-[15px] sm:py-[5px] py-[7px] text-[#f301d2] border-[1px] border-[#f301d2] rounded-[5px] text-[16px] hover:text-[#fff] hover:bg-[#f301d2] transition-all duration-200'>Log In</Link>
                </div>
            </nav >
            <Image alt='' width={ 500 } height={ 500 } src="/designDetailsImages/headerDetail.png" className="absolute right-0 top-0 max-w-[365px] sm:max-w-[150px] md:max-w-[250px] lg:max-w-[300px] object-contain z-[-1]" />
        </header>
    )
}

