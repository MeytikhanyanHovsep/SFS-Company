import Image from 'next/image'
import Link from 'next/link'
import Title from '@/components/TitleText'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
})

export default function Contacts() {
    return (
        <div className='relative mt-[65px] sm:mt-[40px]'>
            <Title>Blog</Title>
            <div className='container flex gap-[40px] md:gap-0 sm:flex-col sm:gap-[50px] justify-between'>
                <div className='flex flex-col sm:pt-[20px] pt-[50px]'>
                    <h4 className='mb-[55px] md:mb-[30px] pl-[50px] relative'>
                        <span className='absolute translate-y-[-50%] top-[50%] w-full left-0 h-[1px] bg-gradient-to-b from-[#8fb5fc] z-[-1] to-[#b7d0ff00]'></span>
                        <span className={ `px-[10px] bg-white text-[#164f96] text-[24px] sm:text-[20px] font-[500] tracking-[0.72px] ${ roboto.className }` }>Contacts</span>
                    </h4>
                    <ul className='max-w-[465px] flex flex-col xs:gap-[20px] gap-[30px]'>
                        <li>
                            <Link href="" className={ `text-[#333] text-[16px] flex items-center gap-[35px] md:gap-[10px] font-[400] ${ roboto.className }` }>
                                <Image src="/contactsImages/phone-call.png" className='min-w-[45px] max-w-[45px] xs:max-w-[30px] xs:min-w-[30px] object-contain' alt='phone-call' width={ 50 } height={ 50 } />
                                (406) 555-0120
                            </Link>
                        </li>
                        <li>
                            <Link href="" className={ `text-[#333] text-[16px] flex items-center gap-[35px] md:gap-[10px] font-[400] ${ roboto.className }` }>
                                <Image src="/contactsImages/email.png" className='min-w-[45px] max-w-[45px] xs:max-w-[30px] xs:min-w-[30px] object-contain' alt='email' width={ 50 } height={ 50 } />
                                nathan.roberts@example.com
                            </Link>
                        </li>
                        <li>
                            <Link href="" className={ `text-[#333] text-[16px] flex items-center gap-[35px] md:gap-[10px] font-[400] ${ roboto.className }` }>
                                <Image src="/contactsImages/gps.png" className='min-w-[45px] max-w-[45px] xs:max-w-[30px] xs:min-w-[30px] object-contain' alt='gps' width={ 50 } height={ 50 } />
                                4517 Washington Ave. Manchester, Kentucky 39495
                            </Link>
                        </li>
                    </ul>
                    <h4 className='mb-[55px] md:mb-[30px] mt-[44px] pl-[50px] relative'>
                        <span className='absolute translate-y-[-50%] top-[50%] w-full left-0 h-[1px] bg-gradient-to-b from-[#8fb5fc] z-[-1] to-[#b7d0ff00]'></span>
                        <span className={ `px-[10px] bg-white text-[#164f96] text-[24px] sm:text-[20px] font-[500] tracking-[0.72px] ${ roboto.className }` }>Links</span>
                    </h4>
                    <ul className='max-w-[465px] xs:pl-[10px] flex gap-[18px]'>
                        <li className='inline-flex'>
                            <Link href="">
                                <Image src="/contactsImages/instagram-logo-2.png" className='max-w-[30px] object-contain' alt='instagram' width={ 50 } height={ 50 } />
                            </Link>
                        </li>
                        <li className='inline-flex mx-[15px]'>
                            <Link href="">
                                <Image src="/contactsImages/facebook-logo-2.png" className='max-w-[30px] object-contain' alt='facebook' width={ 50 } height={ 50 } />
                            </Link>
                        </li>
                        <li className='inline-flex'>
                            <Link href="">
                                <Image src="/contactsImages/linkedin-logo-2.png" className='max-w-[30px] object-contain' alt='linkedin' width={ 50 } height={ 50 } />
                            </Link>
                        </li>
                    </ul>
                </div>
                <Image src="/contactsImages/map.png" className='max-w-full object-contain' width={ 500 } height={ 500 } alt='map' />
            </div>
            <div className='absolute top-[82px] z-[-1] xs:top-[50px] sm:top-[100px] sm:scale-[0.8] left-[-15px]'>
                <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='relative right-[-60px] top-0 max-w-[10px] max-h-[10px] object-contain' />
                <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='absolute top-[-10px] right-[-10px] max-w-[21px] max-h-[21px] object-contain' />
                <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='min-w-[45px] object-contain' />
            </div>
        </div>
    )
}