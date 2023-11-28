import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='w-full grid place-items-center relative mt-[350px] pb-[45px]'>
            <span className='container h-[1px] bg-[#ccc]'></span>
            <div className='flex container justify-center xs:flex-col xs:justify-start md:flex-wrap gap-[200px] md:gap-[90px] mt-[50px] mb-[65px]'>
                <ul className='max-w-[270px] flex flex-col gap-[18px]'>
                    <li className='text-[#333] font-[600] text-[20px] mb-[25px]'>About</li>
                    <li className='text-[#333] text-[16px]'><Link href="" />Services</li>
                    <li className='text-[#333] text-[16px]'><Link href="" />Portfolio</li>
                    <li className='text-[#333] text-[16px]'><Link href="" />About Us</li>
                    <li className='text-[#333] text-[16px]'><Link href="" />Blog</li>
                </ul>
                <ul className='max-w-[270px] flex flex-col gap-[18px]'>
                    <li className='text-[#333] font-[600] text-[20px] mb-[20px]'>Contacts</li>
                    <li>
                        <Link className='text-[#333] text-[16px] flex items-center gap-[15px]' href="">
                            <Image src="/contactsImages/phone-call.png" className='max-w-[30px] object-contain' alt='phone-call' width={ 50 } height={ 50 } />
                            (406) 555-0120
                        </Link>
                    </li>
                    <li>
                        <Link className='text-[#333] text-[16px] flex items-center gap-[15px]' href="">
                            <Image src="/contactsImages/email.png" className='max-w-[30px] object-contain' alt='email' width={ 50 } height={ 50 } />
                            nathan.roberts@example.com
                        </Link>
                    </li>
                    <li>
                        <Link className='text-[#333] text-[16px] flex items-center gap-[15px]' href="">
                            <Image src="/contactsImages/gps.png" className='max-w-[30px] object-contain' alt='gps' width={ 50 } height={ 50 } />
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className='text-[#333] font-[600] text-[20px] mb-[20px]'>Follow Us</li>
                    <li className='inline-flex'>
                        <Link href="">
                            <Image src="/contactsImages/instagram-logo.png" className='max-w-[30px] object-contain' alt='instagram' width={ 50 } height={ 50 } />
                        </Link>
                    </li>
                    <li className='inline-flex mx-[15px]'>
                        <Link href="">
                            <Image src="/contactsImages/facebook-logo.png" className='max-w-[30px] object-contain' alt='facebook' width={ 50 } height={ 50 } />
                        </Link>
                    </li>
                    <li className='inline-flex'>
                        <Link href="">
                            <Image src="/contactsImages/linkedin-logo.png" className='max-w-[30px] object-contain' alt='linkedin' width={ 50 } height={ 50 } />
                        </Link>
                    </li>
                </ul>
            </div>
            <p className='text-[#666] container text-left'>© 2022 | Made by SFS Company</p>
            <Image src="/designDetailsImages/footerDetail.png" className='absolute bottom-0 left-0 h-[350px] z-[-1] w-full' alt='' height={ 300 } width={ 2000 } />
        </footer>
    )
}

export default Footer