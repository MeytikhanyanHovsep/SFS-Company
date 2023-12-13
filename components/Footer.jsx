import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
})

export default function Footer() {
    return (
        <footer className='w-full grid place-items-center relative mt-[150px] sm:mt-[100px] pb-[45px]'>
            <span className='container h-[1px] bg-[#ccc]'></span>
            <div className='flex container justify-center xs:flex-col xs:justify-start md:flex-wrap gap-[200px] sm:gap-[30px] md:gap-[90px] mt-[50px] mb-[65px] p-0'>
                <ul className='max-w-[270px] flex flex-col gap-[18px]'>
                    <li className={ `text-[#333] text-[20px] sm:text-[18px] mb-[25px] sm:mb-0 ${ roboto.className }` }>About</li>
                    <li className={ `text-[#333] text-[16px] ${ roboto.className }` }><Link href="/services" >Services</Link></li>
                    <li className={ `text-[#333] text-[16px] ${ roboto.className }` }><Link href="/portfolio" >Portfolio</Link></li>
                    <li className={ `text-[#333] text-[16px] ${ roboto.className }` }><Link href="/about-us" >About Us</Link></li>
                    <li className={ `text-[#333] text-[16px] ${ roboto.className }` }><Link href="/blog" >Blog</Link></li>
                </ul>
                <ul className='max-w-[270px] flex flex-col gap-[18px] sm:gap-[15px]'>
                    <li className={ `text-[#333] font-[500] text-[20px] sm:text-[18px] mb-[20px] sm:mb-0 ${ roboto.className }` }>Contacts</li>
                    <li>
                        <Link className={ `text-[#333] font-[400] text-[16px] flex items-center gap-[15px] sm:gap-[7px] ${ roboto.className }` } href="">
                            <Image src="/contactsImages/phone-call.png" className='max-w-[30px] sm:max-w-[25px] object-contain' alt='phone-call' width={ 50 } height={ 50 } />
                            (406) 555-0120
                        </Link>
                    </li>
                    <li>
                        <Link className={ `text-[#333] font-[400] text-[16px] flex items-center gap-[15px] sm:gap-[7px] ${ roboto.className }` } href="">
                            <Image src="/contactsImages/email.png" className='max-w-[30px] sm:max-w-[25px] object-contain' alt='email' width={ 50 } height={ 50 } />
                            nathan.roberts@example.com
                        </Link>
                    </li>
                    <li>
                        <Link className={ `text-[#333] font-[400] text-[16px] flex sm:max-w-[250px] items-center gap-[15px] sm:gap-[7px] ${ roboto.className }` } href="">
                            <Image src="/contactsImages/gps.png" className='max-w-[30px] sm:max-w-[25px] object-contain' alt='gps' width={ 50 } height={ 50 } />
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className={ `text-[#333] font-[500] text-[20px] sm:text-[18px] mb-[35px] sm:mb-[15px] ${ roboto.className }` }>Follow Us</li>
                    <li className='inline-flex'>
                        <Link href="https://www.instagram.com/sfs_it_school">
                            <Image src="/contactsImages/instagram-logo.png" className='max-w-[30px] sm:max-w-[25px] object-contain' alt='Instagram' width={ 50 } height={ 50 } />
                        </Link>
                    </li>
                    <li className='inline-flex mx-[15px]'>
                        <Link href="https://www.facebook.com/itschoolvedi">
                            <Image src="/contactsImages/facebook-logo.png" className='max-w-[30px] sm:max-w-[25px] object-contain' alt='Facebook' width={ 50 } height={ 50 } />
                        </Link>
                    </li>
                    <li className='inline-flex'>
                        <Link href="">
                            <Image src="/contactsImages/linkedin-logo.png" className='max-w-[30px] sm:max-w-[25px] object-contain' alt='Linkedin' width={ 50 } height={ 50 } />
                        </Link>
                    </li>
                </ul>
            </div>
            <p className='text-[#666] container sm:text-center text-left'>© 2022 | Made by SFS Company</p>
            <Image src="/designDetailsImages/footerDetail.png" className='absolute xs:h-[200px] bottom-0 left-0 h-[350px] z-[-1] w-full' alt='' height={ 300 } width={ 2000 } />
        </footer>
    )
}