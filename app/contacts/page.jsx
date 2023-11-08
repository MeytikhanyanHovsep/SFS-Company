import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Contacts() {
    return (
        <div className='relative mt-[65px]'>
            <h5 className='text-[26px] font-[500] text-center leading-[35px] mb-[40px]'>Blog</h5>
            <div className='container flex gap-[40px] justify-between'>
                <div className='flex flex-col pt-[50px]'>
                    <h4 className='mb-[55px] pl-[50px] relative'>
                        <span className='absolute translate-y-[-50%] top-[50%] w-full left-0 h-[1px] bg-gradient-to-b from-[#8fb5fc] z-[-1] to-[#b7d0ff00]'></span>
                        <span className='px-[10px] bg-white text-[#164f96] text-[24px] font-[600] tracking-[0.72px]'>Contacts</span>
                    </h4>
                    <ul className='max-w-[465px] flex flex-col gap-[30px]'>
                        <li className='text-[#333] text-[16px] flex items-center gap-[35px]'>
                            <Image src="/contactsImages/phone-call.png" className='max-w-[45px] object-contain' alt='phone-call' width={ 50 } height={ 50 } />
                            (406) 555-0120
                        </li>
                        <li className='text-[#333] text-[16px] flex items-center gap-[35px]'>
                            <Image src="/contactsImages/email.png" className='max-w-[45px] object-contain' alt='email' width={ 50 } height={ 50 } />
                            nathan.roberts@example.com
                        </li>
                        <li className='text-[#333] text-[16px] flex items-center gap-[35px]'>
                            <Image src="/contactsImages/gps.png" className='max-w-[45px] object-contain' alt='gps' width={ 50 } height={ 50 } />
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </li>
                    </ul>
                    <h4 className='mb-[55px] mt-[44px] pl-[50px] relative'>
                        <span className='absolute translate-y-[-50%] top-[50%] w-full left-0 h-[1px] bg-gradient-to-b from-[#8fb5fc] z-[-1] to-[#b7d0ff00]'></span>
                        <span className='px-[10px] bg-white text-[#164f96] text-[24px] font-[600] tracking-[0.72px]'>Links</span>
                    </h4>
                    <ul className='max-w-[465px] flex gap-[18px]'>
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
                <Image src="/contactsImages/map.png" className='w-full object-contain' width={ 500 } height={ 500 } alt='map' />
            </div>
            <div className='absolute top-[82px] left-[-15px]'>
                <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='relative right-[-60px] top-0 max-w-[10px] max-h-[10px] object-contain' />
                <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='absolute top-[-10px] right-[-10px] max-w-[21px] max-h-[21px] object-contain' />
                <Image alt='' src="/designDetailsImages/circleDetail.png" width={ 50 } height={ 50 } className='max-w-[45px] max-h-[45px] object-contain' />
            </div>
        </div>
    )
}

export default Contacts